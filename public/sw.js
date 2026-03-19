if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = i), (e.onload = s), document.head.appendChild(e));
        } else ((e = i), importScripts(i), s());
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let r = {};
    const t = (e) => i(e, c),
      o = { module: { uri: c }, exports: r, require: t };
    s[c] = Promise.all(n.map((e) => o[e] || t(e))).then((e) => (a(...e), r));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Website-overview.png",
          revision: "d25fbeae776594354c2f7419bfd8934f",
        },
        {
          url: "/_next/static/chunks/0e762574-6c4a5d715e217f79.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/173-2030307676805877.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/274-f170b3806151a23c.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/30a37ab2-90265b03a5b6202c.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/319-041946aa40c2f11a.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/3d47b92a-79d77a955150937b.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/402-a4e3f8636051a308.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/455-5e0081b69245b9db.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/478-b06e3382fb5a6c25.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/488-46c3d068f879cf1b.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/4bd1b696-8a3b7b3d3ff56393.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/537-974f72ccbe02f6a8.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/566-c3d38342df2c2ce8.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/5e22fd23-442f77a52c6a1821.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/615-386dcc1334ad0759.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/624-32c53ba5faf23787.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/649-f583bdb036528a84.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/795d4814-230aa6bc01909f26.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/811-ebbeed7627c26a09.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/845-4ce0eb3d00353223.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-008902a09d1569d2.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/926-bbe96c1a0de71f6a.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/94730671-e5c8754e0d720023.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/970-e4d00e117498b353.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-6fb72d6cad0c027e.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/certificado/%5Bid%5D/page-29ce1974f599e4a1.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/certificado/not-found-4374886dc178fbb5.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-f199a7caf524d364.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/certificates/page-41cf51e5996f7143.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-79ed6acf883ce220.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-a1696e5c8aca9bd3.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-0a149bbb95d15e36.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-7aa7f5f1825a9bf1.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/layout-ede37daf3b1eac25.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/page-324f02e7b2acdf84.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-8826a2c5c2e4cf2c.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/app/projects/page-ba7b2870113d2a77.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/c15bf2b0-ab03a155d0d7e7fd.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/f8025e75-798c90b793983ffc.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/framework-d29117d969504448.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/main-app-8b6d2090efc843ab.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/main-c9d26e0caf71ac90.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-3a3a35c975d7d449.js",
          revision: "pHnoX5ZLAxD87W891GOer",
        },
        {
          url: "/_next/static/css/078ee3d390028bf8.css",
          revision: "078ee3d390028bf8",
        },
        {
          url: "/_next/static/css/29ab5ff40e22afd7.css",
          revision: "29ab5ff40e22afd7",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/logo.c68b797c.png",
          revision: "778721fd5b9aac3828afd9101f69d625",
        },
        {
          url: "/_next/static/pHnoX5ZLAxD87W891GOer/_buildManifest.js",
          revision: "033d8ba61c29daa57ca53ce506a0a430",
        },
        {
          url: "/_next/static/pHnoX5ZLAxD87W891GOer/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
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
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        i &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: i }) =>
        "1" === e.headers.get("RSC") && i && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ));
});
