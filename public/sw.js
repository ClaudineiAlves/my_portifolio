if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + ".js", i).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = c), (e.onload = s), document.head.appendChild(e));
        } else ((e = c), importScripts(c), s());
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => c(e, n),
      l = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(i.map((e) => l[e] || r(e))).then((e) => (a(...e), t));
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
          url: "/_next/static/bG82Wrvl9zt5QDCcKB7B0/_buildManifest.js",
          revision: "c5c46da63707cb8e8bb254b35f9d6d81",
        },
        {
          url: "/_next/static/bG82Wrvl9zt5QDCcKB7B0/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/0e762574-f209e8ee7d7f35c4.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/138-fccb293e5a422286.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/173-ef4628b97d07f635.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/283-a1dbe498c4e0171e.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/30a37ab2-845a0e208c2b2b54.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/351-2c7d9b7433ac8617.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/3d47b92a-5149bb0083ba49b2.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/402-5db952f8fcfbf681.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/455-cc071b3b05a810b2.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/4bd1b696-51a69a298431e716.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/566-c2449a568d067713.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/586-bff62326a9bf6919.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/5e22fd23-4e51f69bf4f577ba.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/615-44e32e819a88ca7a.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/62-a4c2a183dac9c0f8.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/684-935ed6d240c35216.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/795d4814-14f4bd1bc7a5f5c7.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/845-9432665949e6fc76.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-9406a1e604e348f8.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/944-29009b0c7f888a34.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/94730671-f4f33b58d3af3260.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/970-6de1cc3721ac5af8.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-d804ee6fe7c7177d.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/api/contact/route-3ecb87c36905ca2a.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/api/locale/route-e4776d98812e0f47.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/certificado/%5Bid%5D/page-12aab25107196f2d.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/certificado/not-found-09b0296246e64f32.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-fe689f6a445390a0.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/certificates/page-4a7d754f8b276bba.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-eebe9bb874b837c8.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-50f96a6a674e74cd.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-97c9d9605c36202f.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-bfdfa7b8908d34ad.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/layout-28d106c3b252efe2.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/page-3c142cfa061b4b2e.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-67d2f6e8ecccbaf5.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/app/projects/page-5e45a809eee74d96.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/c15bf2b0-fa7b0a3d79221ad8.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/framework-d29117d969504448.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/main-02c9ea05d86a2b3e.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/main-app-5787eb357e09099b.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-f0fc817d6de2880b.js",
          revision: "bG82Wrvl9zt5QDCcKB7B0",
        },
        {
          url: "/_next/static/css/7c735e89552ed8aa.css",
          revision: "7c735e89552ed8aa",
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
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: function (e) {
              return _ref.apply(this, arguments);
            },
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
      function (e) {
        var s = e.sameOrigin,
          c = e.url.pathname;
        return !(
          !s ||
          c.startsWith("/api/auth/callback") ||
          !c.startsWith("/api/")
        );
      },
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
      function (e) {
        var s = e.request,
          c = e.url.pathname,
          i = e.sameOrigin;
        return (
          "1" === s.headers.get("RSC") &&
          "1" === s.headers.get("Next-Router-Prefetch") &&
          i &&
          !c.startsWith("/api/")
        );
      },
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          c = e.url.pathname,
          i = e.sameOrigin;
        return "1" === s.headers.get("RSC") && i && !c.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        var s = e.url.pathname;
        return e.sameOrigin && !s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      function (e) {
        return !e.sameOrigin;
      },
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
