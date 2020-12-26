/*
Copyright 2019 The dahliaOS Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import 'dart:math';
import 'dart:ui';

import 'package:Pangolin/desktop/launcher/taskbar.dart';
import 'package:Pangolin/desktop/window/wallpaper_layer.dart';
import 'package:Pangolin/main.dart';
import 'package:Pangolin/utils/others/key_ring.dart';
import 'package:Pangolin/utils/hiveManager.dart';
import 'package:Pangolin/utils/themes/customization_manager.dart';
import 'package:Pangolin/utils/widgets/blur.dart';
import 'package:Pangolin/desktop/quicksettings/quick_settings.dart';
import 'package:flutter/material.dart';
import 'package:Pangolin/utils/widgets/system_overlay.dart';
import 'package:Pangolin/desktop/launcher/launcher_toggle.dart';
import 'package:Pangolin/desktop/quicksettings/status_tray.dart';
import 'package:Pangolin/desktop/launcher/launcher.dart';
import 'package:provider/provider.dart';
import 'package:Pangolin/utils/others/functions.dart';

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:utopia_wm/wm.dart';

class Desktop extends StatefulWidget {
  Desktop({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _DesktopState createState() => _DesktopState();
}

class _DesktopState extends State<Desktop> {
  final Tween<double> _overlayScaleTween = Tween<double>(begin: 0.9, end: 1.0);
  final Tween<double> _overlayOpacityTween =
      Tween<double>(begin: 0.0, end: 1.0);

  @override
  Widget build(BuildContext context) {
    final customizationNotifier = context.watch<CustomizationNotifier>();
    final _random = new Random();
    Pangolin.overlayState = Overlay.of(context);
    return ChangeNotifierProvider(
      create: (_) => CustomizationNotifier(),
      child: Scaffold(
        body: WindowHierarchy(
          rootWindow: WallpaperLayer(
            image: AssetImage(
              kIsWeb
                  ? wallpapers[3]
                  : HiveManager.get("randomWallpaper")
                      ? wallpapers[_random.nextInt(wallpapers.length)]
                      : wallpapers[HiveManager.get("wallpaper").toInt()],
            ),
          ),
          margin: EdgeInsets.only(bottom: 48),
          alwaysOnTopWindows: [
            SystemOverlay(
              key: KeyRing.launcherOverlayKey,
              builder: (Animation<double> animation) => Center(
                child: AnimatedBuilder(
                  animation: animation,
                  builder: (BuildContext context, Widget child) =>
                      FadeTransition(
                    opacity: _overlayOpacityTween.animate(animation),
                    child: SlideTransition(
                      position: Tween(begin: Offset(0, 1), end: Offset(0, 0))
                          .animate(animation),
                      child: child,
                    ),
                  ),
                  child: Container(
                      padding: const EdgeInsets.all(0.0),
                      alignment: Alignment.center,
                      width: double.infinity,
                      height: double.infinity,
                      child: LauncherWidget() //Launcher(),
                      ),
                ),
              ),
              callback: (bool visible) {
                KeyRing.launcherToggleKey.currentState.toggled = visible;
              },
            ),
            SystemOverlay(
              key: KeyRing.statusOverlayKey,
              builder: (Animation<double> animation) => Positioned(
                right: 8,
                bottom: 56,
                child: AnimatedBuilder(
                  animation: animation,
                  builder: (BuildContext context, Widget child) =>
                      FadeTransition(
                    opacity: _overlayOpacityTween.animate(animation),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(5),
                      child: Blur(
                        child: ScaleTransition(
                          scale: _overlayScaleTween.animate(animation),
                          alignment: FractionalOffset.bottomRight,
                          child: child,
                        ),
                      ),
                    ),
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(5),
                    child: Blur(
                      borderRadius: BorderRadius.circular(5.0),
                      child: Stack(children: [
                        BackdropFilter(
                          filter: ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0),
                          child: Container(
                            decoration: BoxDecoration(
                              color: Colors.black.withOpacity(0.75),
                            ),
                            child: QuickSettings(),
                          ),
                        ),
                      ]),
                    ),
                  ),
                ),
              ),
              callback: (bool visible) {
                KeyRing.statusToggleKey.currentState.toggled = visible;
              },
            ),
            Taskbar(
              backgroundColor: customizationNotifier.darkTheme
                  ? Colors.black38
                  : Colors.white38,
              alignment: HiveManager.get("centerTaskbar")
                  ? TaskbarAlignment.CENTER
                  : TaskbarAlignment.LEFT,
              leading: LauncherToggleWidget(
                toggleKey: KeyRing.launcherToggleKey,
                callback: toggleCallback,
              ),
              trailing: Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: 2,
                  horizontal: 8,
                ),
                child: StatusTrayWidget(
                  toggleKey: KeyRing.statusToggleKey,
                  callback: (bool toggled) => setOverlayVisibility(
                    overlay: KeyRing.statusOverlayKey,
                    visible: toggled,
                  ),
                ),
              ),
            ),
            // BlueLight Filter Overlay,
            IgnorePointer(
              child: Container(
                width: double.infinity,
                height: double.infinity,
                color: HiveManager.get("enableBlueLightFilter")
                    ? Colors.deepOrange.withOpacity(0.2)
                    : Colors.deepOrange.withOpacity(0.0),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
