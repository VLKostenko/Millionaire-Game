import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import airbnb from 'eslint-config-airbnb';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import path from 'path';

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  js.configs.recommended,
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb/hooks'),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tsPlugin,
      next: nextPlugin,
    },
    rules: {
      semi: 'off',
      'no-undef': 'off',
      'no-shadow': 'off',
      'max-len': 'off',
      'no-case-declarations': 'off',
      'import/order': 'off',
      'comma-dangle': 'off',
      'no-else-return': 'off',
      'arrow-parens': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-confusing-arrow': 'off',
      'prefer-destructuring': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'implicit-arrow-linebreak': 'off',
      'operator-linebreak': 'off',
      'react/jsx-curly-newline': 'off',
      'arrow-body-style': 'off',
      'no-nested-ternary': 'off',
      'function-paren-newline': 'off',
      'import/no-duplicates': 'off',
      'react/no-array-index-key': 'off',
      'object-curly-newline': 'off',
      'react/require-default-props': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'consistent-return': 'off',
      'react/function-component-definition': 'off',
      'no-unneeded-ternary': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        { tsx: 'never', ts: 'never', jsx: 'never', js: 'never' },
      ],
      'react/prop-types': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-unresolved': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['.'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: path.resolve('tsconfig.json'), // Указываем путь к tsconfig.json
        },
      },
    },
  },
];
