'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3e92bbf9066f3e9c98d222e11e1d0f27",
"index.html": "e3503a7dff57f6d7f21a2c853a2f68eb",
"/": "e3503a7dff57f6d7f21a2c853a2f68eb",
"main.dart.js": "849edb2f3f3957e50fd577906abad03c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "a3f6ffa848f1462f65b4d4a69798cf99",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b8a4aa179980d24a14f5614e22747ff7",
".git/config": "9a746f09d6085a3ebc762e86277131b3",
".git/objects/95/ddaf4023dccffdc09470817b4fc47755d5d36c": "79248457616efd7f224897ec45ec1cdd",
".git/objects/95/40bf7c9176efb433b69fd2a307f040fbd6bc83": "6c4295fda81e74572b536ac43da85718",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/6da1194372acf0ec4941b1ce4e30c3d65acf71": "fa79533ca92be73ef4e89799a13fbd35",
".git/objects/6a/bbf9e115ca1bbe36fd60ddbb1f9915016de6e7": "2bea860a3dd55b51e8fcb2112c7c6bbc",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/2de9bcf4d7a9fad801338060865b74f564b956": "60978205a91777e2856f9f65387f2119",
".git/objects/69/13333ddba814e0eb8ac4509725819cce4193c5": "9ddb1384b3bfa0a0b57338b20c940125",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/ca86f8d3077e5d4c9a2d56c310cf0b0d7ff41e": "2247995f997f042cf6e5ba4c9ca411db",
".git/objects/0b/1e48335e359b516d39f0a9f4530ade31a6c0a8": "5265376bd49b90e2b8c43ce128114ba7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/5f/380f3b958fba420eaaca10f46e82a802b240db": "cfcc10ed360805e3a79eb58b20f2f991",
".git/objects/33/71733f57de4e237850172254ec04a987a65d39": "40d98b7a2678c685bee11e56b56b12b5",
".git/objects/9c/15138235e200777900992456a84a1152c6bace": "f8bed861d4817a3050eba2c0392ba4de",
".git/objects/9c/6bf99fef7e79e85272c439a0289396ca089568": "861e699073a81e739b36bf7f6a57e823",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d1/14ce4594d95976065bf1845590f5eedbc4b993": "b3dfec5e6ea94e2c79dd7f1802fea18f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/52427caa08af4f051a869071ff794e7cd2b585": "6c88a51ae7ffd8418573872b9f3dd304",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/534ac4b13c5fee14085138787d29033fd89962": "e4f07533fc3a95a3fc7f3ece536ba614",
".git/objects/fc/4ede1ffe0edef9fb3142cd37f53daec74b83b9": "1d3efd8e13fd00f21ec5cd623f4dfbab",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/e3/ac8d967cc3feba3cedbccbacfce29237c2c421": "42e5424ba0d234a51da945bef7908276",
".git/objects/ca/6764edfa5e76775323d16ca98f5a386174cae7": "cb78f2baf7732cf80d79cbaa4051f0d2",
".git/objects/e4/e0fef1703e154637359a54119fe16220dc5a91": "91718e1a289082e747310027d817f001",
".git/objects/ec/8f899815470f3daf7f740f55ee336a1f3321d5": "c90bbfe1d35fa91d4909b03026995d14",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/7d/7b571e34a2d34390cbd757250752135988f209": "febd39525b7fd329f1dea5d4ab4fca74",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/6d97ddecdb4db32bfd6d6900d97c722b5b2204": "3b687a3d883fafeccc1ee5539c630c85",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/43/6e64dae0a53b8ae2e471b72c768fcf741e8b87": "d30bc294df0e17c89f346bf0b439c4de",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/faa822a37d255b2af6d12b811c948bdb5fbec7": "45682c653d028d9e85b18d7e90e79b8f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/e85a91afe2a3c1662a70766e9f6b8fa3a09548": "9d2ffb3805d5c5a7c2864c42ba77a320",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/55/30ef2b064bbf4c4ad8fab5a9994279c03a2962": "52bebb09359327053232e4aac1576a13",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b8/233e11ffd51cd1bc9b921035518547b3b64c23": "94885311b6619287df80bf9551f4197a",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/8cf5223e368285eaaacdfcb836e92197a944ea": "02859f1a42ebd25c83aa634b9627c58d",
".git/objects/d2/9d2060e4926ced5b0a864a306c6918cdb16c8f": "529e3f1ce61d4626fb8b64b45c9c68bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3ac920dacc768912954b3e10143750eb4a1282": "0d9bb48d313958b529315fdc0c97c03e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/dbb80193ab603d7c96a5a937ec9d9dc8a89896": "11af685c8a36d49af2d17b95031868cc",
".git/objects/b0/d9da25a76da46869fd3c649488de9331b39acb": "7407a5f2621dc7eef03832bf6f363ef8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/094375febe18a3c2c30e1fae5154b61dc25d1d": "9f7972e7bc1f3f2e263d101a7cf87e7e",
".git/objects/e1/66c99d45b17aaa8cbdee83ed818856ec6379e1": "9a92c47a428fc75aa1f1ff87862363db",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ff/a2a7447308a09595f35930878869a5fb300feb": "39dff1589017cc2709be8fa81e730642",
".git/objects/c2/bbe7460c071b42abb840a476414343e67d96d2": "27b58c0a86f3cf06e42d7bf05e53ac5c",
".git/objects/c2/d4f112e49b6cd31e7b157ca1624ab142815eb1": "368148ce1e5dd244cb5bc76eb14a4c50",
".git/objects/e9/7a0a3d6cac0b35f0f75d68180e81d733819c62": "23f2e8c3bdbcc802bb98830834e6dcb8",
".git/objects/f1/44555cfd4af7dc9ca07e0413cb1dabe31b7740": "3b52c8bd16edecaf0d8861278fd20d14",
".git/objects/e7/c570c1800799e0e311e3b786e34d923bc50bcc": "bc93687e44a8bd98156f56d4a52c2618",
".git/objects/f8/b22b36cae8f01e1bf14a7f2d588c53705bdedb": "ba40401a351391f28edf28b63d353beb",
".git/objects/46/0f1b08eba89dd9b9b62e49df120b75f0bc89a6": "6d878b400bd1871466a88be451ef1189",
".git/objects/79/0f010c5490b1620f9790143832903e8cdb476a": "87dae7fd472bf00ebfa6d3c4c0fd44e5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/e14c5fcb15a11f129afedab2f77988cde1181a": "f908e60138a833ef3a14edf7e88eb9c5",
".git/objects/41/678c0c32bfbc90cdbb5378837ca9643f030b64": "4c6d3ce75a1e8a992b2736b84dd3ca28",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/fa28a7e0c6c3e67d1b4ce65ac87e9e608d7b88": "018f2660a67c18f5477c1b1f4becc09a",
".git/objects/4a/b1794650d3357ffede0d2eaccfa74fc7b6ded2": "3d30b2535f4ca9d9849cfeec3b775b49",
".git/objects/4a/aef898d1ac35552b971ee8a9cfbf0cd198b382": "524a3d67b06fab393f29010465264ca5",
".git/objects/23/ef79cca9cf97f2176b1bfea0a0912a283c4891": "8f81d77b72a16ab4913aa66ce498a974",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/47/1a3d13179175ba93e2b8cb00e8601295a6f511": "fb5897f1398a8882e067694213d53a7f",
".git/objects/8b/22a7719c395b9786b265f9000950ecee3bc59f": "85bd64c7ecf5a64d6bb2c37191c9f3b4",
".git/objects/7f/a7818c9ee7bc46b8c58940c4d593c4cb5040e9": "065601a4dfe24e88fdc760e2b0fed626",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/995437b7944e0116a8ad06b473ab0064a8edb2": "ab6b52e048ddf579a0bd9a0ce644b3ca",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e53d5907ce45a712c16f6844d69bb1cc",
".git/logs/refs/heads/main": "e53d5907ce45a712c16f6844d69bb1cc",
".git/logs/refs/remotes/origin/main": "7a91549ed09413c5fb60248c017dcc07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "27d2aba0715e059bceb6a3bc48d8912c",
".git/refs/remotes/origin/main": "27d2aba0715e059bceb6a3bc48d8912c",
".git/index": "3507711b3759c17649883973f1d50804",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "8f86bd5ffda67abea42586921601bcfa",
"assets/NOTICES": "4f496bdc3986df44586b30a4bd0fc75f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f2a4fb3e4ee97c5c7e1476d6c61d240a",
"assets/fonts/MaterialIcons-Regular.otf": "7504855658b3d8e261f2166dd3587b8e",
"assets/assets/images/initial_green.png": "39a0c67f0cb43091824b2daf9da37bf9",
"assets/assets/images/initial_white.png": "a3b396aa926aee228728602c42edfbff",
"assets/assets/images/logo_with_initial.png": "9f4803523c889d19079c3b6d784024db",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
