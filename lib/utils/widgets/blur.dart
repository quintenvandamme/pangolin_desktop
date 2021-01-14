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

import 'package:Pangolin/utils/hiveManager.dart';
import 'package:flutter/material.dart';

class Blur extends StatefulWidget {
  Widget child;
  BorderRadius borderRadius;
  double blurRadius;
  Blur({Key key, @required this.child, borderRadius, blurRadius})
      : super(key: key);

  @override
  _BlurState createState() => _BlurState();
}

class _BlurState extends State<Blur> {
  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: widget.borderRadius == null
          ? BorderRadius.circular(0)
          : widget.borderRadius,
      child: BackdropFilter(
        filter: (widget.blurRadius == null
            ? (HiveManager.get("blur")
                ? ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0)
                : ImageFilter.blur(sigmaX: 0.0, sigmaY: 0.0))
            : ImageFilter.blur(
                sigmaX: widget.blurRadius, sigmaY: widget.blurRadius)),
        child: widget.child,
      ),
    );
  }
}
