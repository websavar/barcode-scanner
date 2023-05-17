module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/react",
    "next/babel"
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

