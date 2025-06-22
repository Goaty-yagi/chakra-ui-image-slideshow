import js from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      ".storybook",
      "node_modules",
      "playground",
      "yarn.lock",
      "package-lock.json",
      "public",
      ".swc",
    ],
  },
  js.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "no-unused-vars": "off", // disable core rule
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^React$|^_", // ignore variables named "React" or starting with _
          argsIgnorePattern: "^_", // ignore unused function args starting with _
          caughtErrorsIgnorePattern: "^_", // ignore unused catch-block params starting with _
        },
      ],
      "no-shadow": "off",

      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "import/no-unresolved": "error",
      "import/named": "error",

      "prettier/prettier": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
  prettierConfig,
];
