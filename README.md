# Athenetz-SV
[![ESLint](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/eslint.yml/badge.svg?branch=v0.0.1-dev)](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/eslint.yml)[![CodeQL](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/github-code-scanning/codeql/badge.svg?branch=v0.0.1-dev)](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/github-code-scanning/codeql)[![Dependabot Updates](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/dependabot/dependabot-updates/badge.svg?branch=v0.0.1-dev)](https://github.com/JackatDJL/Athenetz-SV/actions/workflows/dependabot/dependabot-updates)

This is the Monorepo for the Student Council of the Gymnasium Athenaeum Stade
Located in Stade, Lower Saxony, Germany

This project is currently entirely in German. In the (distant) future, English, Russian, and Ukrainian might be added.
However, English is used in README files and documentation out of habit.

[Open](https://athenetz-sv.vercel.app)

## Contact us!

If you got Questions please write us an E-/mail
[Write a Email](mailto:sv@athenetz.de?subject=%7BSubject%7D%20--%20SORT-REPO)

or a Mail to

Gymnasium Athenaeum
Schülervertretung
z. Hdn. Jack Ruder
Harsefelder Straße 40
21680 Stade

## To Contribute

Run the following commands in your dev directory:

```sh
git clone https://github.com/JackatDJL/Athenetz-SV.git
cd Athenetz-SV
git fetch
git checkout v0.0.1-dev
corepack enable
yarn install
yarn build
```

**Typescript** knowledge required!
**Yarn** package manager required!

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
yarn dedupe
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```