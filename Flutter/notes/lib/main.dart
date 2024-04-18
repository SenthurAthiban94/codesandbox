import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Tooltip(
            message: 'play',
            child: Text('Hello'),
          ),
        ),
      ),
    ),
  );
}
