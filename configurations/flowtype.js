module.exports = {
  plugins: [
    'flowtype',
  ],
  rules: {
    'flowtype/array-style-complex-type': [
      2,
      'verbose',
    ],
    'flowtype/array-style-simple-type': [
      2,
      'shorthand',
    ],
    'flowtype/arrow-parens': [
      2,
      'always',
    ],
    'flowtype/boolean-style': [
      2,
      'boolean',
    ],
    'flowtype/define-flow-type': 2,
    'flowtype/delimiter-dangle': [
      2,
      'always-multiline',
    ],
    'flowtype/enforce-line-break': 2,
    'flowtype/generic-spacing': [
      2,
      'never',
    ],
    'flowtype/interface-id-match': 0,
    'flowtype/newline-after-flow-annotation': 2,
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-duplicate-type-union-intersection-members': 2,
    'flowtype/no-existential-type': 0,
    'flowtype/no-flow-fix-me-comments': 2,
    'flowtype/no-internal-flow-type': 2,
    'flowtype/no-mixed': 2,
    'flowtype/no-mutable-array': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-unused-expressions': 0,
    'flowtype/no-weak-types': 2,
    'flowtype/object-type-curly-spacing': 0,
    'flowtype/object-type-delimiter': [
      2,
      'comma',
    ],
    'flowtype/quotes': [
      2,
      'single',
    ],
    'flowtype/require-compound-type-alias': 0,
    'flowtype/require-exact-type': 2,
    'flowtype/require-indexer-name': [
      2,
      'always',
    ],
    'flowtype/require-inexact-type': [
      2,
      'always',
    ],
    'flowtype/require-parameter-type': 0,
    'flowtype/require-readonly-react-props': 2,
    'flowtype/require-return-type': 0,
    'flowtype/require-types-at-top': 2,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
    ],
    'flowtype/require-variable-type': 0,
    'flowtype/semi': [
      2,
      'always',
    ],
    'flowtype/sort-keys': [
      0,
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    'flowtype/sort-type-union-intersection-members': [
      2,
      {
        order: 'asc',
      },
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always',
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never',
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never',
    ],
    'flowtype/spread-exact-type': 0,
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+Type$',
    ],
    'flowtype/type-import-style': [
      2,
      'declaration',
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always',
    ],
    'flowtype/use-flow-type': 2,
    'flowtype/use-read-only-spread': 2,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
