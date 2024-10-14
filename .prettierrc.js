/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: false,
  printWidth: 120,
  arrowParens: "avoid",
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
};
