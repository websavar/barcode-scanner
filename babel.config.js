module.exports = {
  "presets": [
    ["@babel/preset-env", { "debug": false, "modules": false }],
    "@babel/preset-react", "next/babel"
  ],
  "plugins": [
    "@babel/plugin-transform-modules-commonjs"
  ],
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
};

