module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react-refresh", "react", "prettier", "import-helpers"],
  rules: {
    "no-var": "warn",
    "no-multiple-empty-lines": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    eqeqeq: "warn",
    "no-unused-vars": "off",
    "react/destructuring-assignment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-key": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "react/jsx-no-comment-textnodes": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", "/^@//", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          { target: "./src", from: "./src/features", except: ["./index.ts"] },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}
