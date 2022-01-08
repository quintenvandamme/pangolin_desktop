import 'dart:io';
import 'dart:core';
import 'package:process_run/shell.dart';

var shell = Shell();

get_commit() async {
  var getcommit = await Process.run(
    'git',
    ['rev-parse', 'HEAD'],
  );
  var commit = getcommit.stdout;
  commit = commit.trim().replaceAll(RegExp(r'(\n){3,}'), "\n\n");
  return commit;
}

void main() async {
  Directory.current = 'lib/utils/data/';
  var commit = await get_commit();
  String contents = new File('globals.dart').readAsStringSync();
  var parts = contents.split('String pangolinCommit = "');
  var part = parts[1].trim();
  var complete_part = 'String pangolinCommit = "$part';
  var sed_part1 = "sed -i 's+$complete_part+String pangolinCommit = ";
  var sed_part2 = '"$commit";+gI';
  var sed_part3 = "'";
  var sed = '$sed_part1$sed_part2$sed_part3 globals.dart';
  // debug
  print('sed_part1: $sed_part1');
  print('sed_part2: $sed_part2');
  print('sed_part3: $sed_part3');
  print('commit: $commit');

  await shell.run('''$sed''');
  await shell.run('''git config user.name github-actions''');
  await shell.run('''git config user.email "action@github.com"''');
  await shell.run('''git add --all''');
  await shell.run('''git commit -m "Update pangolinCommit"''');
  await shell.run('''git push''');
}