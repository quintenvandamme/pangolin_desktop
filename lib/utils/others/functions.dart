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

import 'package:Pangolin/utils/applicationdata.dart';
import 'package:Pangolin/utils/others/context_menu_item.dart';
import 'package:Pangolin/utils/widgets/system_overlay.dart';

import 'key_ring.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';

double _scaleFactor = 1.1;

/// Hides all overlays except [except] if applicable.
void hideOverlays({GlobalKey<SystemOverlayState> except}) {
  <GlobalKey<SystemOverlayState>>[
    KeyRing.launcherOverlayKey,
    KeyRing.statusOverlayKey,
  ].where((GlobalKey<SystemOverlayState> overlay) => overlay != except).forEach(
      (GlobalKey<SystemOverlayState> overlay) =>
          overlay.currentState.visible = false);
}

/// Sets the given [overlay]'s visibility to [visible].
/// When showing an overlay, this also hides every other overlay.
void setOverlayVisibility({
  @required GlobalKey<SystemOverlayState> overlay,
  @required bool visible,
}) {
  if (visible) {
    hideOverlays(except: overlay);
  }
  overlay.currentState.visible = visible;
}

void toggleCallback(bool toggled) {
  initializeApps();
  setOverlayVisibility(
    overlay: KeyRing.launcherOverlayKey,
    visible: toggled,
  );
}

double scale(double x) {
  return x * _scaleFactor;
}

void showContextMenu(BuildContext context, GlobalKey widgetKey,
    List<ContextMenuItem> entries) async {
  final RenderBox renderBoxButton = widgetKey.currentContext.findRenderObject();
  final buttonPosition = renderBoxButton.localToGlobal(Offset.zero);
  final RelativeRect position = RelativeRect.fromLTRB(buttonPosition.dx + 50,
      buttonPosition.dy, buttonPosition.dx - 50, buttonPosition.dy);

  var result = await showMenu(
      context: context,
      position: position,
      useRootNavigator: true,
      items: List.generate(
          entries.length,
          (index) => PopupMenuItem(
                child: Row(
                  children: [
                    Icon(entries[index].icon),
                    SizedBox(
                      width: 10,
                    ),
                    Text(entries[index].text),
                  ],
                ),
                value: entries[index].action,
                height: 30,
              )));

  if (result != null) {
    return result();
  }
}
