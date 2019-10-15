module.exports = {
	"plugins": ["@typescript-eslint"],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2019,
		"project": "./tsconfig.json",
		"sourceType": "module",
	},
	"env": {
		"node": true,
		"es6": true
	},
	"globals": {
		"BigInt": true,
	},
	"rules": {
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "except-parens"],
		"no-console": ["warn", { "allow": ["log"] }],
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "warn",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": ["error", { "skipRegExps": true, "skipTemplates": true }],
		"no-misleading-character-class": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "warn",
		"no-regex-spaces": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"require-atomic-updates": "error",
		"use-isnan": "error",
		"valid-typeof": "warn",
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"complexity": ["error", 36],
		"consistent-return": "warn",
		"curly": ["error", "multi-or-nest", "consistent"],
		"default-case": "warn",
		"dot-location": ["error", "property"],
		"eqeqeq": ["error", "always", { "null": "ignore" }],
		"guard-for-in": "error",
		"no-caller": "error",
		"no-case-declarations": "warn",
		"no-div-regex": "error",
		"no-else-return": ["error", { "allowElseIf": false }],
		"no-empty-pattern": "warn",
		"no-eq-null": "warn",
		"no-eval": "warn",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "warn",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": ["error", { "allow": ["!!"] }],
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "warn",
		"no-warning-comments": "error",
		"no-with": "error",
		"prefer-named-capture-group": "warn",
		"prefer-promise-reject-errors": "warn",
		"radix": ["error", "as-needed"],
		"vars-on-top": "warn",
		"wrap-iife": "error",
		"yoda": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-shadow": "warn",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"global-require": "error",
		"handle-callback-err": "warn",
		"no-buffer-constructor": "error",
		"no-mixed-requires": "error",
		"no-path-concat": "warn",
		"array-bracket-spacing": "error",
		"array-element-newline": ["error", "consistent"],
		"block-spacing": "error",
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"capitalized-comments": "warn",
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"computed-property-spacing": "error",
		"consistent-this": "error",
		"eol-last": "error",
		"func-names": "error",
		"func-style": ["error", "declaration", { "allowArrowFunctions": true }],
		"jsx-quotes": ["error", "prefer-single"],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"line-comment-position": ["error", { "position": "above" }],
		"linebreak-style": ["warn", "unix"],
		"max-depth": ["error", 10],
		"max-len": ["error", { "code": 480 }],
		"max-nested-callbacks": ["error", { "max": 4 }],
		"max-statements-per-line": ["error", { "max": 2 }],
		"multiline-comment-style": "error",
		"multiline-ternary": ["error", "always-multiline"],
		"new-parens": "warn",
		"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multiple-empty-lines": "error",
		"no-negated-condition": "warn",
		"no-new-object": "error",
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "any"],
		"object-curly-newline": ["error", { "multiline": true, "consistent": true }],
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
		"operator-assignment": "error",
		"operator-linebreak": ["error", "after"],
		"padded-blocks": ["error", "never"],
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed"],
		"semi-spacing": "error",
		"semi-style": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"switch-colon-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": "warn",
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": "error",
		"arrow-spacing": "error",
		"constructor-super": "error",
		"generator-star-spacing": "error",
		"no-class-assign": "error",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "warn",
		"no-new-symbol": "error",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-numeric-literals": "warn",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-yield": "error",
		"rest-spread-spacing": "error",
		"sort-imports": "off",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": "error",

		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-ignore": "warn",
		"@typescript-eslint/ban-types": [
			"error",
			{
				"types": {
					"Object": {
						"message": "Use object instead",
						"fixWith": "object"
					},
					"String": {
						"message": "Use string instead",
						"fixWith": "string"
					},
					"Boolean": {
						"message": "Use boolean instead",
						"fixWith": "boolean"
					},
					"Number": {
						"message": "Use number instead",
						"fixWith": "number"
					}
				}
			}
		],

		"camelcase": "off",
		"@typescript-eslint/camelcase": ["error", { "ignoreDestructuring": true }],

		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
		"@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],

		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": ["error", "never"],

		"indent": "off",
		"@typescript-eslint/indent": ["error", "tab", { "SwitchCase": 1 }],
		
		"@typescript-eslint/interface-name-prefix": ["error", "never"],

		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/member-naming": ["error", { "private": "^_" }],
		"@typescript-eslint/member-ordering": [
			"error",
			{
				"default": [
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"constructor",

					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",

					"public-static-field",
					"protected-static-field",
					"private-static-field",

					"public-static-method",
					"protected-static-method",
					"private-static-method"
				]
			}
		],

		"no-array-constructor": "off",
		"@typescript-eslint/no-array-constructor": "error",
		
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "warn",

		"@typescript-eslint/no-empty-interface": "error",

		"no-extra-parens": "off",
		"@typescript-eslint/no-extra-parens": ["warn", "all", { "nestedBinaryExpressions": false }],
		
		"@typescript-eslint/no-floating-promises": "warn",

		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-this-alias": ["error", { "allowDestructuring": true }],
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",

		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"error", 
			{
				"vars": "all",
				"args": "all",
				"ignoreRestSiblings": true,
				"argsIgnorePattern": "^_",
				"caughtErrors": "all",
				"caughtErrorsIgnorePattern": "^_"
			}
		],

		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "error",

		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "error",

		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-regexp-exec": "warn",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/restrict-plus-operands": "error",

		"semi": "off",
		"@typescript-eslint/semi": "error",

		"@typescript-eslint/type-annotation-spacing": ["error", { "after": true, "before": false, overrides: { arrow: { before: true, after: true } } }],
		"@typescript-eslint/unbound-method": [
			"error",
			{
				"ignoreStatic": true
			}
		],
		"@typescript-eslint/unified-signatures": "error"
	}
}
