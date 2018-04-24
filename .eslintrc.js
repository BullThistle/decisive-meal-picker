module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "linebreak-style": 0
  },
  env: {
    browser: true,
    es6: true
  }
};
