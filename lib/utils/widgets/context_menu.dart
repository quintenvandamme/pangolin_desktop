import 'package:Pangolin/utils/others/context_menu_item.dart';
import 'package:Pangolin/utils/others/functions.dart';
import 'package:flutter/material.dart';

class ContextMenu extends StatelessWidget {
  final List<ContextMenuItem> entries;
  final Widget child;

  ContextMenu({@required this.entries, @required this.child});
  @override
  Widget build(BuildContext context) {
    GlobalKey _key = GlobalKey();
    return GestureDetector(
      key: _key,
      child: child,
      onSecondaryTap: () {
        print("object");
        showContextMenu(context, _key, entries);
      },
    );
  }
}
