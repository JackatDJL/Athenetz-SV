# Athenetz-SV

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

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@athenetz-sv/web`: The Production Output [Next.js](https://nextjs.org/) app
- `@athenetz-sv/wahlen`: the [Next.js](https://nextjs.org/) app for the Voting Module
- `@athenetz-sv/ui`: The UI Libary - **DIRECT COPY OF MY DJLUI PACKAGE** - Version: [1edf620](https://github.com/JnMProjects/DJLUI/commit/1edf62067684ba4c4659c2021a4c47712887461b)
- `@athenetz-sv/util-eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@athenetz-sv/util-typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@athenetz-sv/util-tailwind-config`: **Design System** Contoll through `tailwind.config.js`

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

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
