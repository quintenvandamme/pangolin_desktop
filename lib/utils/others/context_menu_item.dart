import 'package:flutter/material.dart';

class ContextMenuItem {
  String text;
  Function action;
  IconData icon;

  ContextMenuItem(
      {@required this.text, @required this.icon, @required this.action});
}
