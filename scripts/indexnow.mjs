#!/usr/bin/env node
/**
 * IndexNow ping. Fetches the production sitemap, extracts <loc> URLs and
 * submits the list to api.indexnow.org, which fans out to Bing, Yandex,
 * Seznam, Naver and other participants.
 *
 * Run: `npm run indexnow`
 */

const HOST = "claudineiportifolio.vercel.app";
const KEY = "94f2c6e68c528c33bb83d219a88f779b";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, {
    headers: { "User-Agent": "indexnow-ping-script" },
  });
  if (!res.ok) {
    throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) throw new Error("No <loc> entries found in sitemap.");
  return urls;
}

async function verifyKeyHosted() {
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(
      `Key file not reachable at ${KEY_LOCATION} (status ${res.status}). ` +
        "Deploy first, then re-run.",
    );
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(
      `Key mismatch: ${KEY_LOCATION} returned "${body}", expected "${KEY}".`,
    );
  }
}

async function submit(urlList) {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

(async () => {
  console.log(`> Verifying key file at ${KEY_LOCATION}`);
  await verifyKeyHosted();

  console.log(`> Fetching sitemap: ${SITEMAP_URL}`);
  const urls = await fetchSitemapUrls();
  console.log(`> Found ${urls.length} URL(s):`);
  for (const u of urls) console.log(`  - ${u}`);

  console.log(`> Submitting to ${INDEXNOW_ENDPOINT}`);
  const { status, body } = await submit(urls);

  // IndexNow returns 200 (accepted), 202 (accepted, pending), or an error.
  if (status === 200 || status === 202) {
    console.log(`✓ Accepted (HTTP ${status}). Bing/Yandex will recrawl soon.`);
  } else {
    console.error(`✗ Submission failed: HTTP ${status}`);
    if (body) console.error(body);
    process.exit(1);
  }
})().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
