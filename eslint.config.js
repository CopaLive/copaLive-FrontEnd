import js from '@eslint/js'
import globals from 'globals'
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      react: pluginReact,
    },
    rules: {
      "no-duplicate-imports": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],

      // REACT
      "react/react-in-jsx-scope": "off",
      "react/button-has-type": "error",
      "react/hook-use-state": "error",
      "react/jsx-no-bind": [
        "error",
        {
          allowArrowFunctions: true,
        },
      ],
      "react/no-danger": "error",
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-pascal-case": "error",
      "react/no-children-prop": "error",
      "react/no-object-type-as-default-prop": "error",
      "react/no-this-in-sfc": "error",
      "react/void-dom-elements-no-children": "error",

      // REACT HOOKS
      "react-hooks/exhaustive-deps": "off",

      // TYPESCRIPT
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          fixToUnknown: true,
        },
      ],
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lodash",
              message: "Import [module] from lodash/[module] instead",
            },
            {
              name: "dayjs",
              message: "Do not import dayjs directly. Use DateUtils instead",
            },
          ],
        },
      ],
    },
  },
])
