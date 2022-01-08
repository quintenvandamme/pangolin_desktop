'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"main.dart.js": "1530b0a03d2ac839369316bbfb663247",
"version.json": "82cce2c8fcc81ccb48d459444670376c",
"manifest.json": "846faeef084c96fba071c878f4500620",
"icons/Icon-512.png": "19ef15ec4cf1762faa56096e0803f57e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "8b796818f0e035735378238fc07b5845",
"assets/NOTICES": "ca28733c2009ea83a760e820f5a11377",
"assets/AssetManifest.json": "a7e278690beb51640a7f3a8e87736ae9",
"assets/FontManifest.json": "ef14a40105993b214118ec491cba48ac",
"assets/assets/images/wallpapers/wood.jpg": "5a9effc0334bcd012f410b07be09332d",
"assets/assets/images/wallpapers/Three_Bubbles.png": "bc437cfc4c4d2cb8e036b9aaab065198",
"assets/assets/images/wallpapers/forest.jpg": "bb9971fadf446779b9f29204180bcf72",
"assets/assets/images/wallpapers/mountain.jpg": "7fca0b04f5582bd15144f8ede952aa17",
"assets/assets/images/wallpapers/Bubbles_wallpaper.png": "46b9730c0c07198404a23bc13c3f385e",
"assets/assets/images/wallpapers/modern.png": "1c517d39617b8a04f7ea0b3655589dce",
"assets/assets/images/wallpapers/modern_dark.png": "46992ae5e214b91bccc9ecb53b73be77",
"assets/assets/images/wallpapers/dahliaOS_white_logo_pattern_wallpaper.png": "6493c5cf40d2b4f4edc55202ee94b5a7",
"assets/assets/images/wallpapers/Gradient_logo_wallpaper.png": "cc93d4e28412dbdab2608ff625a4492e",
"assets/assets/images/wallpapers/dahliaOS_white_wallpaper.png": "cb8d99e02029bd75eff508d3fdd56c37",
"assets/assets/images/wallpapers/beach.jpg": "f96f64f4360c2baf586f27d3e34dea15",
"assets/assets/images/wallpapers/Mountains_wallpaper.png": "6e7975b97f96ede66ace575fad741cc6",
"assets/assets/images/logos/dahliaOS-modern.png": "027dab4f9150bb5769a7714cfa725033",
"assets/assets/images/logos/dahliaOS-white.png": "7b437d6f873ee55cc24278e776a16f72",
"assets/assets/images/logos/dahliaOS-logo.png": "02f1c9f097b0a80bf77544d0a382d990",
"assets/assets/images/other/null.png": "74c2d1eb37ec4a0b1a5b45edc7e67082",
"assets/assets/images/other/Desktop.png": "c7a2ea58837eed2fcaa17acde26e5941",
"assets/assets/images/other/about-mask.png": "8fc16147f096c1c595e1bfebaa6c1eba",
"assets/assets/textures/NoiseAsset_256X256_PNG.png": "81f27726c45346351eca125bd062e9a7",
"assets/assets/textures/NoiseAsset.txt": "0957c5fa9ab4897fb4d9005b3343d2cb",
"assets/assets/json/visualData.json": "93a968c14d5c5a38c91d65683e4faf61",
"assets/assets/icons/task.png": "548e313c465c5caf31cad9d574119016",
"assets/assets/icons/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/assets/icons/web.png": "63f2cc8d972d4b5d53826fb8d346a7fa",
"assets/assets/icons/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/assets/icons/welcome-info.png": "cf9e894cfddbcd39a5efaf9f29186ba9",
"assets/assets/icons/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/assets/icons/software.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/assets/icons/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/assets/icons/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/assets/icons/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/assets/icons/value_editor.png": "f0034b5799a20f9c355a71f0239aa0b6",
"assets/assets/icons/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/assets/icons/null.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/assets/icons/graft.png": "044c55245afc351fee36122f676369de",
"assets/assets/icons/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/assets/icons/photos.png": "f191683d9cd0b0fb26385cf9fc80f108",
"assets/assets/fonts/lato/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/lato/Lato-BoldItalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/fonts/lato/Lato-BlackItalic.ttf": "2e26a9163cb4974dcba1bea5107d4492",
"assets/assets/fonts/lato/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/assets/fonts/lato/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/lato/Lato-LightItalic.ttf": "4d80ac573c53d192dafd99fdd6aa01e9",
"assets/assets/fonts/lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/lato/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/lato/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/assets/fonts/inter/Inter-Regular.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/assets/fonts/CustomIcons.ttf": "cc73b5bfddd6e04d22b8bdc9fae42b87",
"assets/assets/fonts/dm-sans/DMSans-BoldItalic.ttf": "a300c77208334f8ad8b2fc95ee2040ce",
"assets/assets/fonts/dm-sans/DMSans-MediumItalic.ttf": "a2a143d61d86a67e5e77cf43fd0a4e59",
"assets/assets/fonts/dm-sans/DMSans-Bold.ttf": "071853031a2175ada019db9e6fd1585c",
"assets/assets/fonts/dm-sans/DMSans-Regular.ttf": "3e7f038b85daa739336e4a3476c687f2",
"assets/assets/fonts/dm-sans/DMSans-Medium.ttf": "fbbc5a515be4021a9a36f048e25ad396",
"assets/assets/fonts/dm-sans/DMSans-Italic.ttf": "b89267290c0df2e03ae1b60bd14109c8",
"assets/assets/fonts/firacode/FiraCode-Medium.ttf": "38989befe49ab72063b68518a4531cc8",
"assets/assets/fonts/firacode/FiraCode-Light.ttf": "93f948964a49886cbcc390bd52ecbf36",
"assets/assets/fonts/firacode/FiraCode-Retina.ttf": "2f7bfe28b1954979587e0a79dcae2bef",
"assets/assets/fonts/firacode/FiraCode-Bold.ttf": "01f3d4803613ee9556769509a85dba50",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/unicons/icons/UniconsLine.ttf": "897b30998fda10237ba083acb529d291",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/utopia_wm/fonts/CustomIcons.ttf": "cc73b5bfddd6e04d22b8bdc9fae42b87",
"assets/packages/media/assets/examples/logo.png": "c7040497f3c2f593a3fc7417ca6e782c",
"assets/packages/media/assets/examples/example1.mp4": "bfa9d457805f81be518634ca5726e552",
"assets/packages/media/assets/examples/example2.mp4": "1a32e5e5d2f61e89b69a1c470e250b77",
"assets/packages/task_manager/assets/images/icons/PNG/facebook.png": "d54e509f31d051140eca9e8d7b34ec40",
"assets/packages/task_manager/assets/images/icons/PNG/task.png": "548e313c465c5caf31cad9d574119016",
"assets/packages/task_manager/assets/images/icons/PNG/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/packages/task_manager/assets/images/icons/PNG/theme.png": "1b065d813d384c82002793b1b92b0b85",
"assets/packages/task_manager/assets/images/icons/PNG/web.png": "a26b78a08fe2da40a81e3c837a60cede",
"assets/packages/task_manager/assets/images/icons/PNG/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/packages/task_manager/assets/images/icons/PNG/welcome-info.png": "cf9e894cfddbcd39a5efaf9f29186ba9",
"assets/packages/task_manager/assets/images/icons/PNG/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/packages/task_manager/assets/images/icons/PNG/software.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/packages/task_manager/assets/images/icons/PNG/fuchsia.png": "687e3a9bac810885c97028229adf3ac2",
"assets/packages/task_manager/assets/images/icons/PNG/social.png": "e0f4fcf882cc23ed646290fbfc859986",
"assets/packages/task_manager/assets/images/icons/PNG/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/packages/task_manager/assets/images/icons/PNG/note_mobile.png": "5bc75d1575688657c59eeab91631d473",
"assets/packages/task_manager/assets/images/icons/PNG/disks.png": "b8c23e9bf62238d900b958540be4f236",
"assets/packages/task_manager/assets/images/icons/PNG/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/packages/task_manager/assets/images/icons/PNG/authenticator.png": "35096977d24eb89d0c661b0956567642",
"assets/packages/task_manager/assets/images/icons/PNG/grey-drag.png": "af96264233287efd9efbf4ee2954fc67",
"assets/packages/task_manager/assets/images/icons/PNG/reddit.png": "9b1ba56edec14b468ecf4b3913a7794d",
"assets/packages/task_manager/assets/images/icons/PNG/instagram.png": "60ef178e1c7539c232abfad28d2bdaeb",
"assets/packages/task_manager/assets/images/icons/PNG/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/packages/task_manager/assets/images/icons/PNG/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/packages/task_manager/assets/images/icons/PNG/credits.png": "8eb3c439b19df88fb7643c395bc983b2",
"assets/packages/task_manager/assets/images/icons/PNG/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/packages/task_manager/assets/images/icons/PNG/welcome.png": "3ba49cfcd43616510002a9431b90bdb5",
"assets/packages/task_manager/assets/images/icons/PNG/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/packages/task_manager/assets/images/icons/PNG/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/packages/task_manager/assets/images/icons/PNG/messages.png": "004c87d98d7fb5ed52f8d79898d88ae6",
"assets/packages/task_manager/assets/images/icons/PNG/software-shared.png": "868fe8e3d80b189e934220391a09dfaa",
"assets/packages/task_manager/assets/images/icons/PNG/github.png": "bd64ef0f18cf6b627dc8390a96aed2bd",
"assets/packages/task_manager/assets/images/icons/PNG/discord.png": "103e593c79206b9cd16fef562cc7ac32",
"assets/packages/task_manager/assets/images/icons/PNG/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/packages/task_manager/assets/images/icons/PNG/music.png": "91e7695e656f380f48df79ef8616b205",
"assets/packages/task_manager/assets/images/icons/PNG/twitter.png": "4607476796cc93ca75cfeccf2661fd1a",
"assets/packages/task_manager/assets/images/icons/PNG/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/packages/task_manager/assets/images/icons/PNG/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/packages/task_manager/assets/images/icons/PNG/help.png": "149ba5f0862946faea4d5744619ba607",
"assets/packages/task_manager/assets/images/icons/PNG/graft.png": "11cbd7517f73ff7e1df235eb17279db8",
"assets/packages/task_manager/assets/images/icons/PNG/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/packages/task_manager/assets/images/icons/PNG/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/packages/task_manager/assets/images/icons/PNG/telegram.png": "36218d3af50dbc1d0240879a5f966fc4",
"assets/packages/task_manager/assets/images/icons/PNG/photos.png": "9b2ee870807ea18761ff4bf308897394",
"assets/packages/task_manager/assets/images/icons/PNG/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/packages/task_manager/assets/images/icons/PNG/developer.png": "14f413a0c0ba35af4fe5bcc04ebf2820",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "02bb4ed19870acc1660b8e336f263e5b",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "d4208aaecbdff16baf8a4fdedbb9db68",
"assets/packages/welcome/assets/logos/dahliaOS/dahliaOS.png": "59237f137e1af02826e308259a3e2b5e",
"assets/packages/welcome/assets/logos/socialmedia/facebook.png": "2f01aac297576493ff25564b49c3ce95",
"assets/packages/welcome/assets/logos/socialmedia/reddit.png": "87772b81745127dcda3d4a107b1b2828",
"assets/packages/welcome/assets/logos/socialmedia/instagram.png": "3be464d303a204e8ae70fd09712d7450",
"assets/packages/welcome/assets/logos/socialmedia/github.png": "a8c9be7b7b3e151661aa358c5c7bba80",
"assets/packages/welcome/assets/logos/socialmedia/discord.png": "1f6f19abcafc26a2e1875a2d3454b626",
"assets/packages/welcome/assets/logos/socialmedia/twitter.png": "1585c6a1cc6026291cb85dd435758235",
"assets/packages/welcome/assets/logos/socialmedia/telegram.png": "f7c0ccc413c7f3af5ed1d503b6c1d853",
"assets/packages/files/lib/assets/icons/folder.png": "bf696664ea09b8cd4e2eed65993be06e",
"assets/packages/files/lib/assets/icons/file.png": "2b4409f3e88456ccc7a4551dceb17b14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "72883f181696fcc98da60a0371ecf7fd",
"/": "72883f181696fcc98da60a0371ecf7fd",
"favicon.png": "353cc04a466aee60dcab137995ed9a09"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
