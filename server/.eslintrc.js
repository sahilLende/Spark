module.exports = {
  env: {
    node: true,
    es2022: true,
  },

  extends: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    curly: "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
  },
  ignorePatterns: ["src/**/*.test.ts", "dist/**/*", ".eslintrc.js"],
};
