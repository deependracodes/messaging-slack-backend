### Eslint setup

- npm i -D es-lint
- npx eslint --init
- update/keep changes in eslint.config.ts file

### prettier setup

- npm i -D prettier
- touch .prettierrc file
- add {
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "none"
  }

### scripts for linting and prettier

- {
  "format": "prettier --write .",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix "
  }

### RoboHash is a service that generates unique robot images based on a given input such as a text string or a specific hash code

- GET https://robohash.org/{input}
