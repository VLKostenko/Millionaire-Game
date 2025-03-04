// import js from "@eslint/js";
// import react from "eslint-plugin-react";
// import airbnb from "eslint-config-airbnb";
// import airbnbTypescript from "eslint-config-airbnb-typescript";
// import tsParser from "@typescript-eslint/parser";
// import tsEsLint from "@typescript-eslint/eslint-plugin";
// import importPlugin from "eslint-plugin-import";
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import reactHooks from "eslint-plugin-react-hooks";
// import next from "@next/eslint-plugin-next";
//
// export default [
//   js.configs.recommended,
//   {
//     files: ["**/*.ts", "**/*.tsx", "**/*.jsx", "**/*.js"],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: "./tsconfig.json",
//       },
//     },
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//       "@typescript-eslint": tsEsLint,
//       import: importPlugin,
//       "jsx-a11y": jsxA11y,
//       "@next/next": next,
//     },
//     rules: {
//       ...airbnb.rules,
//       ...airbnbTypescript.rules,
//       ...react.configs.recommended.rules,
//       ...importPlugin.configs.recommended.rules,
//       ...jsxA11y.configs.recommended.rules,
//
//
//       "react/react-in-jsx-scope": "off", // Next.js does not need React import
//       "import/no-extraneous-dependencies": "off", // Sometimes too strict
//       "react/jsx-props-no-spreading": "off", // Allow prop spreading
//       "import/prefer-default-export": "off",
//       "react/function-component-definition": "off",
//       "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
//       "jsx-a11y/anchor-is-valid": "off"
//     },
//   },
// ];

// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// import { FlatCompat } from "@eslint/eslintrc";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });
//
// const eslintConfig = [
//   ...compat.config({
//     extends: ["next/core-web-vitals", "next/typescript", "prettier"],
//     rules: {
//       semi: ["error"],
//       quotes: ["error", "double"]
//     }
// })
// ];
//
// export default eslintConfig;
