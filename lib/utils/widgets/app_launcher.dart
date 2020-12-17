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

import 'dart:ui';
import 'package:Pangolin/desktop/window/model.dart';
import 'package:Pangolin/utils/hiveManager.dart';
import 'package:Pangolin/utils/widgets/hover.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/rendering.dart';
import 'package:utopia_wm/wm.dart';

class AppLauncherButton extends StatefulWidget {
  final Widget app;
  final String icon;
  final bool appExists;
  final bool customBar;
  final double childHeight;
  final double childWidth;
  final String label;
  final Color color;
  final ValueChanged<bool> _callback;

  AppLauncherButton({
    @required this.app,
    @required this.icon,
    this.label,
    this.appExists = true,
    this.customBar = true,
    this.childHeight = 64.0,
    this.childWidth = 64.0,
    @required this.color,
    callback,
  }) : _callback =
            callback; //This alien syntax must be syntactical glucose for a setter. Neato.

  @override
  AppLauncherButtonState createState() => AppLauncherButtonState();
}

class AppLauncherButtonState extends State<AppLauncherButton> {
  bool _toggled = false;
  bool hover = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8),
      child: Container(
        width: 128,
        height: 128,
        child: Hover(
          cursor: SystemMouseCursors.click,
          color: Colors.white.withOpacity(0.2),
          borderRadius: BorderRadius.circular(6),
          onTap: () {
            setState(() {
              toggled = !_toggled;
              widget._callback?.call(_toggled);
            });

            widget.appExists
                ? Provider.of<WindowHierarchyState>(context, listen: false)
                    .pushWindowEntry(
                    WindowEntry.withDefaultToolbar(
                      content: widget.app,
                      icon: AssetImage(widget.icon),
                      title: widget.label,
                      toolbarColor: HiveManager.get("coloredTitlebar")
                          ? widget.color
                          : Colors.grey[900],
                    ),
                  )
                : showDialog(
                    context: context,
                    builder: (BuildContext context) {
                      // return object of type Dialog
                      return AlertDialog(
                        title: new Text("Feature not implemented"),
                        content: new Text(
                            "This feature is currently not available on your build of Pangolin. Please see https://reddit.com/r/dahliaos to check for updates."),
                        actions: <Widget>[
                          // usually buttons at the bottom of the dialog
                          new FlatButton(
                            child: new Text("OK"),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          ),
                        ],
                      );
                    },
                  );
          },
          child: Container(
            width: 200,
            height: 200,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                Opacity(
                  opacity: widget.appExists ? 1.0 : 0.4,
                  child: Container(
                    child: Image.asset(
                      widget.icon,
                      fit: BoxFit.contain,
                      width: 64,
                      height: 64,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text(
                    widget.label,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      color: widget.appExists ? Colors.white : Colors.grey[400],
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  set toggled(bool value) {
    if (value == _toggled) {
      return;
    }
  }
}
