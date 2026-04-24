if (!self.define) {
  let s,
    e = {};
  const i = (i, c) => (
    (i = new URL(i + ".js", c).href),
    e[i] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          ((s.src = i), (s.onload = e), document.head.appendChild(s));
        } else ((s = i), importScripts(i), e());
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (c, n) => {
    const a =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[a]) return;
    let t = {};
    const r = (s) => i(s, a),
      o = { module: { uri: a }, exports: t, require: r };
    e[a] = Promise.all(c.map((s) => o[s] || r(s))).then((s) => (n(...s), t));
  };
}
define(["./workbox-f1770938"], function (s) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: "/Website-overview.png",
          revision: "d25fbeae776594354c2f7419bfd8934f",
        },
        {
          url: "/_next/static/Rynx1As9MKvtVUO0Djcho/_buildManifest.js",
          revision: "033d8ba61c29daa57ca53ce506a0a430",
        },
        {
          url: "/_next/static/Rynx1As9MKvtVUO0Djcho/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/0e762574-6c4a5d715e217f79.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/101-6ce293165b7f28e4.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/12-5de5151a120a4828.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/138-a4ecc229fe2af12f.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/173-e7c17582bcee25ed.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/283-359732b6a1f8f659.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/30a37ab2-90265b03a5b6202c.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/351-aa6df1af388ce9fb.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/3d47b92a-79d77a955150937b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/402-15e64445e470c3e7.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/455-9626699e291c96d7.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/482-da0fc7d2adb431e9.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/488-dfa1deed54dbb0c9.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/4bd1b696-69b5a592377d34e0.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/5e22fd23-442f77a52c6a1821.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/615-31c3213430a7f925.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/757-6289563618c689d8.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/795d4814-230aa6bc01909f26.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/842-edeed6b66de9b3fe.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/845-36eaf52a3d93766b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-008902a09d1569d2.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/94730671-e5c8754e0d720023.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/970-fb607054c2eb393b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-8a896b67466a7c2f.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/certificado/%5Bid%5D/page-12aab25107196f2d.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/certificado/not-found-aca1cfc6a7bf3bf5.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-802c5477633a1b8d.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/certificates/page-c86cea371bde0fc0.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-902bf2f3b73ef85b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-a603cfcdbafd589d.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-383822b883c5706f.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-bed6d087a2f667bf.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/layout-8203145614c2babd.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/page-2a2ccae9e6e05dd3.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-86c6137e633972a2.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/app/projects/page-2ef64ab2d4d21808.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/c15bf2b0-ab03a155d0d7e7fd.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/f8025e75-798c90b793983ffc.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/framework-d29117d969504448.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/main-app-5787eb357e09099b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/main-c9d26e0caf71ac90.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-f0fc817d6de2880b.js",
          revision: "Rynx1As9MKvtVUO0Djcho",
        },
        {
          url: "/_next/static/css/1212233ee98d7dc5.css",
          revision: "1212233ee98d7dc5",
        },
        {
          url: "/_next/static/css/f4dc5ac5d09f6dc0.css",
          revision: "f4dc5ac5d09f6dc0",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/logo.c68b797c.png",
          revision: "778721fd5b9aac3828afd9101f69d625",
        },
        {
          url: "/certificates/dsa-python-fundamentos.jpg",
          revision: "999afc6c1dd5f37865732ec48a18758c",
        },
        { url: "/logo.png", revision: "778721fd5b9aac3828afd9101f69d625" },
        {
          url: "/lottie/build.json",
          revision: "a6ddf6e22242cad2ca6085b24d1c277f",
        },
        {
          url: "/lottie/code.json",
          revision: "ae769dfb5eafc645619f9279761e43ad",
        },
        {
          url: "/lottie/coding.json",
          revision: "9780a8f715b9a3accc2d2399551e0a44",
        },
        {
          url: "/lottie/contact.json",
          revision: "2d74c8213b82654fba5362749e289739",
        },
        {
          url: "/lottie/development.json",
          revision: "31f75da79676027a6a6384b4e7562eaf",
        },
        {
          url: "/lottie/education.json",
          revision: "13c1078ac32e1572de723b853d6d59ad",
        },
        {
          url: "/lottie/js.json",
          revision: "ad2ffff084c35a1ef8212677c89dbc34",
        },
        {
          url: "/lottie/lotti.json",
          revision: "c1bdff0f692923acf7c8301d5deac9fd",
        },
        {
          url: "/lottie/study.json",
          revision: "5e985e66436f52e7e9107e59bac9f127",
        },
        { url: "/pic3.jpg", revision: "0e4d3e361e077dab7814989b5eea8d52" },
        {
          url: "/placeholder/placeholder.png",
          revision: "c83aa10e488792c4e2e77a46ed396914",
        },
        {
          url: "/projects/project_name/sla",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/projects/project_name2/sla2",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/svg/common/blur-23.svg",
          revision: "a75aa61e5a246b6d47b0004a9d27309b",
        },
        {
          url: "/svg/common/grid.svg",
          revision: "4059253fedf8e205d870303d6129d239",
        },
        {
          url: "/svg/common/hero.svg",
          revision: "d33b61b8bd3f0dcce3b67c27f1273467",
        },
        {
          url: "/svg/common/section.svg",
          revision: "1118180cd02e6fd6a9804f27e92a5baf",
        },
        {
          url: "/svg/skills/aws.svg",
          revision: "b7f09ee2045ad700ccba4102f2e4155e",
        },
        {
          url: "/svg/skills/azure.svg",
          revision: "f548d3f1cd3e4faf1f0b7099db1a4907",
        },
        {
          url: "/svg/skills/bootstrap.svg",
          revision: "53b32f2e7321dcaa2a27c637c6e36b82",
        },
        {
          url: "/svg/skills/c.svg",
          revision: "e85538a5f40888dcbc932f14f03ae3aa",
        },
        {
          url: "/svg/skills/canva.svg",
          revision: "b8f13636be472787575c9a38a40d1c2a",
        },
        {
          url: "/svg/skills/cplusplus.svg",
          revision: "f525a103eda91528ace5248914305d93",
        },
        {
          url: "/svg/skills/csharp.svg",
          revision: "eaa9632e78db110e155c571e7bcd3742",
        },
        {
          url: "/svg/skills/css.svg",
          revision: "989a735cec29082b067dc389ea2da68a",
        },
        {
          url: "/svg/skills/dart.svg",
          revision: "6775917ea12c014f2459559b962b7dab",
        },
        {
          url: "/svg/skills/django.svg",
          revision: "8c0e0365dbe471cb772c4d96eceda8a6",
        },
        {
          url: "/svg/skills/docker.svg",
          revision: "7e6ccb94a73afd23c3960aef7e296210",
        },
        {
          url: "/svg/skills/firebase.svg",
          revision: "704986854726d329449f30664550f986",
        },
        {
          url: "/svg/skills/flask.svg",
          revision: "318c795b48bf389a0ff4bd7951bcbe45",
        },
        {
          url: "/svg/skills/gcp.svg",
          revision: "d2115a79cde7279b8d1769f76ec14e89",
        },
        {
          url: "/svg/skills/git.svg",
          revision: "e6b832b0c31b469c8fcdfd4f2c4f1d3b",
        },
        {
          url: "/svg/skills/graphql.svg",
          revision: "b6b6c04bcc0e9f73b357dcd6036822a0",
        },
        {
          url: "/svg/skills/html.svg",
          revision: "68aab8d074270f9ee0a7e385519d98fa",
        },
        {
          url: "/svg/skills/java.svg",
          revision: "459bbae2e96a2410c5b429eb941a4c11",
        },
        {
          url: "/svg/skills/javascript.svg",
          revision: "46524a43caf30828c17e38ec573dc5a3",
        },
        {
          url: "/svg/skills/linux.svg",
          revision: "17eb8f433d72c073ec12417f3ca5d157",
        },
        {
          url: "/svg/skills/matlab.svg",
          revision: "d9f74f0a1b6fe9575b438de61755b9ea",
        },
        {
          url: "/svg/skills/mongoDB.svg",
          revision: "e7d230b7ad2cb1744a781ad63b10487f",
        },
        {
          url: "/svg/skills/mysql.svg",
          revision: "2cf2fd30658ed833e714cf1fd682d120",
        },
        {
          url: "/svg/skills/nextJS.svg",
          revision: "b9159e822528599d52e216907227a0bd",
        },
        {
          url: "/svg/skills/nginx.svg",
          revision: "3868dbe51aafc3df8a240d58fe8fb392",
        },
        {
          url: "/svg/skills/numpy.svg",
          revision: "961f7a1bd730836151b5687a91a3fe1c",
        },
        {
          url: "/svg/skills/opencv.svg",
          revision: "b18a26d418342b335ac5129a45fa9129",
        },
        {
          url: "/svg/skills/postgresql.svg",
          revision: "58ecff980609fade0b1cb5f8ded6cef3",
        },
        {
          url: "/svg/skills/python.svg",
          revision: "71374043d9b3d9ea7fa09976a747d475",
        },
        {
          url: "/svg/skills/pytorch.svg",
          revision: "5f2b7688dfcf98a41922dc5f6b74ffba",
        },
        {
          url: "/svg/skills/react.svg",
          revision: "7be113a51aa59fbe2be7ac966109e3de",
        },
        {
          url: "/svg/skills/seaborn.svg",
          revision: "01db021c1ad92e246e13178fc60de0ed",
        },
        {
          url: "/svg/skills/sqlite.svg",
          revision: "23bf430b6b73e93205d7f72d9e125cef",
        },
        {
          url: "/svg/skills/supabase.svg",
          revision: "371a583556622b3702f434aeceebe975",
        },
        {
          url: "/svg/skills/tensorflow.svg",
          revision: "e9e391585abd9c372c20c8b9b5bb08d9",
        },
        {
          url: "/svg/skills/typescript.svg",
          revision: "8854b02a490d214fb564211c1cf531e2",
        },
        {
          url: "/svg/skills/unity.svg",
          revision: "639e923cdca2c22431b25cb42f975345",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      "/",
      new s.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: s }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\/_next\/static.+\.js$/i,
      new s.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:mp4|webm)$/i,
      new s.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new s.RangeRequestsPlugin(),
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ sameOrigin: s, url: { pathname: e } }) =>
        !(!s || e.startsWith("/api/auth/callback") || !e.startsWith("/api/")),
      new s.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ request: s, url: { pathname: e }, sameOrigin: i }) =>
        "1" === s.headers.get("RSC") &&
        "1" === s.headers.get("Next-Router-Prefetch") &&
        i &&
        !e.startsWith("/api/"),
      new s.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ request: s, url: { pathname: e }, sameOrigin: i }) =>
        "1" === s.headers.get("RSC") && i && !e.startsWith("/api/"),
      new s.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ url: { pathname: s }, sameOrigin: e }) => e && !s.startsWith("/api/"),
      new s.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    s.registerRoute(
      ({ sameOrigin: s }) => !s,
      new s.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ));
});
