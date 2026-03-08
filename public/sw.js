if (!self.define) {
  let s,
    e = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    e[a] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          ((s.src = a), (s.onload = e), document.head.appendChild(s));
        } else ((s = a), importScripts(a), e());
      }).then(() => {
        let s = e[a];
        if (!s) throw new Error(`Module ${a} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, c) => {
    const n =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[n]) return;
    let o = {};
    const l = (s) => a(s, n),
      r = { module: { uri: n }, exports: o, require: l };
    e[n] = Promise.all(i.map((s) => r[s] || l(s))).then((s) => (c(...s), o));
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
          revision: "14e1dcd6ea8afc2ba2f5ac14623400fc",
        },
        {
          url: "/_next/static/chunks/0e762574-6c4a5d715e217f79.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/173-e7c17582bcee25ed.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",
          revision: "2b4c1ee4fbe3a7cf",
        },
        {
          url: "/_next/static/chunks/218.d8ec56f1948566fd.js",
          revision: "d8ec56f1948566fd",
        },
        {
          url: "/_next/static/chunks/229-0ac46130b00ad9fa.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/274-f170b3806151a23c.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/293-ac2af3ab2ed830f1.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/30a37ab2-2fa755a240d16e72.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/375-f631708ea719b159.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/3d47b92a-79d77a955150937b.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/455-9626699e291c96d7.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/478-b06e3382fb5a6c25.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/488-be651eba7014c700.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/4bd1b696-69b5a592377d34e0.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/53c13509-251ab11791e3af24.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/566-c3d38342df2c2ce8.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/5e22fd23-442f77a52c6a1821.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/615-31c3213430a7f925.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/624-cbfee48f732d9086.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/649-f42316afd63b217e.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/795d4814-230aa6bc01909f26.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/845-36eaf52a3d93766b.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-169dc592ccccbaba.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/910-b81c42b7c62d88c5.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/94730671-e5c8754e0d720023.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-8a896b67466a7c2f.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/components/about/page-8259e20574c9e2e0.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/components/education/page-f75c3a169b5e6d43.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/components/experience/page-2459269f3d62eb52.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/components/hero-section/page-d05e2321b2eab26b.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/components/skills/page-361041591b88c8f4.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/layout-0d48cfc6722cd27e.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/page-909836caae109a69.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/projects/%5Bid%5D/page-aa8508149ba732dd.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/app/projects/page-1f3bfb6f3dbe5afd.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/c15bf2b0-ab03a155d0d7e7fd.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/f8025e75-798c90b793983ffc.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/framework-d29117d969504448.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/main-8447b526b8a49ddb.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/main-app-1aa69d0f11a67ffd.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/pages/_app-60989c630625b0d6.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/pages/_error-8a20a8cc0e244b4c.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-7a38f7657df9db57.js",
          revision: "svsmKpf_kfLoVdW_729ek",
        },
        {
          url: "/_next/static/css/c01560aa8504b6e3.css",
          revision: "c01560aa8504b6e3",
        },
        {
          url: "/_next/static/css/de27f1c1334c3538.css",
          revision: "de27f1c1334c3538",
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
          url: "/_next/static/media/logo.0bc81e29.png",
          revision: "e84339c72cfb0797e92a41952897083a",
        },
        {
          url: "/_next/static/svsmKpf_kfLoVdW_729ek/_buildManifest.js",
          revision: "c8768f8cc47f32e4e6c579e4242464d9",
        },
        {
          url: "/_next/static/svsmKpf_kfLoVdW_729ek/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/logo.png", revision: "e84339c72cfb0797e92a41952897083a" },
        {
          url: "/lottie/build.json",
          revision: "7f35591080c60b039576187683de32e3",
        },
        {
          url: "/lottie/code.json",
          revision: "cee313c8dea1e2ba5e82309d0209294f",
        },
        {
          url: "/lottie/coding.json",
          revision: "0649d95a6ec7f0dccfde0c48dd7662c1",
        },
        {
          url: "/lottie/contact.json",
          revision: "2d1bcce2fdc8035225cc961b42d77702",
        },
        {
          url: "/lottie/development.json",
          revision: "582c52ec2d8176476aa539d942d100a4",
        },
        {
          url: "/lottie/education.json",
          revision: "970c2d83617e2a69a10f853a8420b19e",
        },
        {
          url: "/lottie/js.json",
          revision: "183cef149aacbf5f127079633100b52a",
        },
        {
          url: "/lottie/lotti.json",
          revision: "3647405daf90aadd70e003ce51ae236a",
        },
        {
          url: "/lottie/study.json",
          revision: "c7f0f0aab6a33d8e8d0edf89e3b3c076",
        },
        { url: "/pic.jpg", revision: "5948431dd38320968a5e9329ae7ae3e1" },
        { url: "/pic2.jpg", revision: "4f3a91718fdbf86db45eb721d2c9b0f6" },
        { url: "/pic3.jpg", revision: "a8478bee9ff3d3f56fc5d6c0cd308c48" },
        {
          url: "/placeholder/placeholder.png",
          revision: "c83aa10e488792c4e2e77a46ed396914",
        },
        {
          url: "/projects/AI-image-generator/AI-image-generator.mp4",
          revision: "09158a42bc43a2b85704bfb7f5e7626d",
        },
        {
          url: "/projects/docs-now/Docs-now.png",
          revision: "004962f37cd68f2f18f264be392247d6",
        },
        {
          url: "/projects/docs-now/docs-now-chat.jpg",
          revision: "2d96ad813c3e35b209bb0ed806c3f9d5",
        },
        {
          url: "/projects/docs-now/docs-now-landing.png",
          revision: "5b4fe76fb9b6394b8316bc9bdc4b5228",
        },
        {
          url: "/projects/gamehub/gamehub.png",
          revision: "5159c5a4f8303788381b859b69be6ae3",
        },
        {
          url: "/projects/issue-tracker/dashboard.png",
          revision: "99005cc5484e3790015cb98f948eb540",
        },
        {
          url: "/projects/issue-tracker/issue-tracker.png",
          revision: "06ec1892d2d85a66a08c725d40496c9f",
        },
        {
          url: "/projects/issue-tracker/issues.png",
          revision: "12f4ba31cae61690221974acac49b0eb",
        },
        {
          url: "/projects/juhuu/juhoo.png",
          revision: "6bb2f7cba70fe7e2e6de1c123541e3af",
        },
        {
          url: "/projects/juhuu/marketplace-juhuu.png",
          revision: "6247dd5164fa5da6528d829644c93f4d",
        },
        {
          url: "/projects/tasktable/task-table.png",
          revision: "78f9952215ee85ea7a22ad089c94f9cd",
        },
        {
          url: "/svg/common/blur-23.svg",
          revision: "57a6a91b33f834819ee485044cfea3f1",
        },
        {
          url: "/svg/common/grid.svg",
          revision: "e35c653979e3096f7093aa764a43f508",
        },
        {
          url: "/svg/common/hero.svg",
          revision: "6e796d1ea4e696821418e6114ab114b5",
        },
        {
          url: "/svg/common/section.svg",
          revision: "2cd106a53834a0474163d47516a0b8ee",
        },
        {
          url: "/svg/skills/adobe-xd.svg",
          revision: "2599020077fb6fd0e0d1390cb88b734f",
        },
        {
          url: "/svg/skills/adobeaudition.svg",
          revision: "f6d6a8cb589aa2c334a4a0a51b700ffa",
        },
        {
          url: "/svg/skills/after-effects.svg",
          revision: "5ac6b6ec84d9722b662f2053f8dc5bd6",
        },
        {
          url: "/svg/skills/angular.svg",
          revision: "202b90d0e8701fe059e45c7cc1ad6230",
        },
        {
          url: "/svg/skills/aws.svg",
          revision: "bde4ea40a2cccb245e4729676e67a597",
        },
        {
          url: "/svg/skills/azure.svg",
          revision: "e34a90d5fd5dc2c49186b91583d9abf2",
        },
        {
          url: "/svg/skills/blender.svg",
          revision: "e8a0299a69e50a4be9291d4f1c538164",
        },
        {
          url: "/svg/skills/bootstrap.svg",
          revision: "79c2c41680cf98566b3a6dcb55bdbf00",
        },
        {
          url: "/svg/skills/bulma.svg",
          revision: "8f614cad8bfd05324ca6ccdcc599867a",
        },
        {
          url: "/svg/skills/c.svg",
          revision: "14bfb49f9e30f1051af25fdb3fe5f0e2",
        },
        {
          url: "/svg/skills/canva.svg",
          revision: "0397c10ee20d803780d11e2ceee2c0ed",
        },
        {
          url: "/svg/skills/capacitorjs.svg",
          revision: "d07872114b1027b2d3617a74e7a122ff",
        },
        {
          url: "/svg/skills/coffeescript.svg",
          revision: "f951912ac0ebe3acabf518df8fc899f7",
        },
        {
          url: "/svg/skills/cplusplus.svg",
          revision: "18ae83b098cad9d66cb603f83abc34b0",
        },
        {
          url: "/svg/skills/csharp.svg",
          revision: "299c3aa58b1c08d8021caa2bc555f79e",
        },
        {
          url: "/svg/skills/css.svg",
          revision: "f12256ac816604f347d1950948034aa8",
        },
        {
          url: "/svg/skills/dart.svg",
          revision: "9be754f9d6c69a79bef8dcf1ddec0ada",
        },
        {
          url: "/svg/skills/deno.svg",
          revision: "ff256ac71d367e7003e884dbe31b7331",
        },
        {
          url: "/svg/skills/django.svg",
          revision: "711c098d84605eeacdf7ede745b38157",
        },
        {
          url: "/svg/skills/docker.svg",
          revision: "f98f38268d029b1fa260f085c85adda0",
        },
        {
          url: "/svg/skills/fastify.svg",
          revision: "43831f4abc1e54fa237d0aa334e67897",
        },
        {
          url: "/svg/skills/figma.svg",
          revision: "05d3f6848be5ba50cce960abbdc51f05",
        },
        {
          url: "/svg/skills/firebase.svg",
          revision: "0887b85fc9385059d7192893a7c2d932",
        },
        {
          url: "/svg/skills/flutter.svg",
          revision: "80bad728963ac29d01a8768a01846551",
        },
        {
          url: "/svg/skills/gcp.svg",
          revision: "9691a2ffb853021d0dc5516517adddf4",
        },
        {
          url: "/svg/skills/gimp.svg",
          revision: "0cd0bc06bd325eb299dbc244d3ba2e4b",
        },
        {
          url: "/svg/skills/git.svg",
          revision: "feb28c650b0068074d77d3fd1462b3a3",
        },
        {
          url: "/svg/skills/go.svg",
          revision: "22eda6c5b933ded38d6ef779d7e53205",
        },
        {
          url: "/svg/skills/graphql.svg",
          revision: "7d4ee3f328bca46adecd3690648e8ffc",
        },
        {
          url: "/svg/skills/haxe.svg",
          revision: "3211f80a5f294be739159cd943a11480",
        },
        {
          url: "/svg/skills/html.svg",
          revision: "4196766f94def747ba58d82292172697",
        },
        {
          url: "/svg/skills/illustrator.svg",
          revision: "c986f0d411674b714fec2cb7e7430982",
        },
        {
          url: "/svg/skills/ionic.svg",
          revision: "ac7e1d64b359513a8a1860eea7413d55",
        },
        {
          url: "/svg/skills/java.svg",
          revision: "637fe6af336f90a0df96022548000bb5",
        },
        {
          url: "/svg/skills/javascript.svg",
          revision: "0484a8d2d45ffaad2834f59361d206fd",
        },
        {
          url: "/svg/skills/julia.svg",
          revision: "4fd3f3fce433fc835aea5c5436a55c79",
        },
        {
          url: "/svg/skills/kotlin.svg",
          revision: "1078bfd6b28e9707f5553ab97a2e6cf2",
        },
        {
          url: "/svg/skills/lightroom.svg",
          revision: "bd3b8b21822712b404caee0a1966fc33",
        },
        {
          url: "/svg/skills/markdown.svg",
          revision: "d66f22c08d6a74ab7a76f8a255f9791d",
        },
        {
          url: "/svg/skills/materialui.svg",
          revision: "53c8f867defac7bf24e5af56c50520b5",
        },
        {
          url: "/svg/skills/matlab.svg",
          revision: "7c6f889c03d7f0a8a14b728986aae8e5",
        },
        {
          url: "/svg/skills/memsql.svg",
          revision: "a370bd71ea8d72a1ad4da48ca6f606f5",
        },
        {
          url: "/svg/skills/microsoftoffice.svg",
          revision: "b45374f1f6d25d82887a05ffde9d2f3b",
        },
        {
          url: "/svg/skills/mongoDB.svg",
          revision: "85be680745d838b53aa7d48a9097a6e3",
        },
        {
          url: "/svg/skills/mysql.svg",
          revision: "c57e7443428ab067d3545dd02c77e8f1",
        },
        {
          url: "/svg/skills/nextJS.svg",
          revision: "9037feafa6bb03c2fc880a45aba63ea6",
        },
        {
          url: "/svg/skills/nginx.svg",
          revision: "e2b819e37f4c0da693c88bcf7d6da882",
        },
        {
          url: "/svg/skills/numpy.svg",
          revision: "7dda86e679b18029efd280f788143dbb",
        },
        {
          url: "/svg/skills/nuxtJS.svg",
          revision: "d433645968b3e47b2785a3d8dc4dffd3",
        },
        {
          url: "/svg/skills/opencv.svg",
          revision: "6bb8c58e7ae6f2ff833ce75982ecdbcb",
        },
        {
          url: "/svg/skills/photoshop.svg",
          revision: "816abc0ff4461221e6a0232ba76ebeab",
        },
        {
          url: "/svg/skills/php.svg",
          revision: "7cd861ebce35a4b22924629a9616a9f1",
        },
        {
          url: "/svg/skills/picsart.svg",
          revision: "f89fb5fa4eb40a2f47776c0e56aee144",
        },
        {
          url: "/svg/skills/postgresql.svg",
          revision: "0a61cf7ab417e5d57227116dbcee2cfc",
        },
        {
          url: "/svg/skills/premierepro.svg",
          revision: "e35506c55858f0b460460a94331b54f9",
        },
        {
          url: "/svg/skills/python.svg",
          revision: "fbea44889d262c328743da82176aa7d4",
        },
        {
          url: "/svg/skills/pytorch.svg",
          revision: "7eeaeef47160c90e685c39a99494f105",
        },
        {
          url: "/svg/skills/react.svg",
          revision: "a3163ac7fe36281f1b7dc7a2d91a2b8b",
        },
        {
          url: "/svg/skills/ruby.svg",
          revision: "d34e79c5beee3399796e5e5f0243146a",
        },
        {
          url: "/svg/skills/selenium.svg",
          revision: "1b7ce531b73032b35798ba81c7907b52",
        },
        {
          url: "/svg/skills/sketch.svg",
          revision: "1c3ae957f61637c7d1d4a687ea13dab4",
        },
        {
          url: "/svg/skills/sqlite.svg",
          revision: "71479666b13eecb8a516ee8069298476",
        },
        {
          url: "/svg/skills/strapi.svg",
          revision: "a0d8a6a8d7e3458916e9570c6cbe20b0",
        },
        {
          url: "/svg/skills/svelte.svg",
          revision: "ec68607813412c4831b3c3e34ba528f3",
        },
        {
          url: "/svg/skills/swift.svg",
          revision: "19d95e72efbb01654f6bcc80f1fc2396",
        },
        {
          url: "/svg/skills/tailwind.svg",
          revision: "dfa8abaecc34dcf850b3c33621b4834f",
        },
        {
          url: "/svg/skills/tensorflow.svg",
          revision: "76db955f7fbfdcedd66bd798d0a0c30c",
        },
        {
          url: "/svg/skills/typescript.svg",
          revision: "550fbd87250ac6fb68f390ab6ebab834",
        },
        {
          url: "/svg/skills/unity.svg",
          revision: "42c34404a7e4a5fd4998111876f69d90",
        },
        {
          url: "/svg/skills/vitejs.svg",
          revision: "6bf1686c0a8015ddbe30566f9bef7251",
        },
        {
          url: "/svg/skills/vue.svg",
          revision: "87ef18a6a2f103efb1ca52306b5fa189",
        },
        {
          url: "/svg/skills/vuetifyjs.svg",
          revision: "eeec0047f8e4bc071d983728c0067262",
        },
        {
          url: "/svg/skills/webix.svg",
          revision: "a2ea4f7492e69ad1ba6e1fcf902edea8",
        },
        {
          url: "/svg/skills/wolframalpha.svg",
          revision: "33a2e5995a6f91010226fc009cd4fb85",
        },
        {
          url: "/svg/skills/wordpress.svg",
          revision: "f69da95c1adfb46ae4580f3dfea76fe3",
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
      ({ request: s, url: { pathname: e }, sameOrigin: a }) =>
        "1" === s.headers.get("RSC") &&
        "1" === s.headers.get("Next-Router-Prefetch") &&
        a &&
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
      ({ request: s, url: { pathname: e }, sameOrigin: a }) =>
        "1" === s.headers.get("RSC") && a && !e.startsWith("/api/"),
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
