{
  "targets": [
    {
      "target_name": "fibonacci",
      "sources": [
        "lib/*.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
