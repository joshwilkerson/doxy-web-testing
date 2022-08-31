# doxy-web

Unified styles for Church Center Web.

## Links

- [NPM package](https://www.npmjs.com/package/@planningcenter/doxy-web)
- [Github repository](https://github.com/ministrycentered/doxy-web)
- [Storybook (documentation)](https://ministrycentered.github.io/doxy-web)

## Getting Started

```
cd Code
git clone git@github.com:ministrycentered/doxy-web.git
cd doxy-web
yarn install
```

## Contributing Guide

- make SCSS/Storybook changes in branched forked from `main`
- updates to the NPM package should published from `main` after changes have been merged via approved PR
- `prerelease` package versions can be created from any branch (see below) and used for testing on `staging`

## Development Scripts:

#### 💅 Making SCSS changes (works in pco-box or cloud-box):

- `yarn link` (in doxy-web)
- `yarn link @planningcenter/doxy-web` (in `church-center` or proxied app)
- `yarn install` (in `church-center` or proxied app)
- `yarn develop` (in doxy-web): listens for SCSS changes and compiles to CSS
- changes reflected in CCW for local testing

⚠️ run `yarn unlink @planningcenter/doxy-web` and `yarn install --check-files` to return package to published version from NPM

#### 📚 Updating Storybook documentation:

- `yarn storybook`
  - local pco-box: http://localhost:3000
  - pco-cloud-box: https://churchcenter.test:3000

⚠️ SCSS changes reflected in Storybook are not available in CCW without running `yarn build` or `yarn develop`

#### 🚀🤞 Publishing prerelease version to NPM (from any branch):

- commit changes
- `npm login`
- `yarn prerelease`

(after alpha version is published, run `yarn add @planningcenter/doxy-web@next` in `church-center` or proxied app)

#### 🚢📦 Deploying package to NPM (from `main`):

- pull changes via merged PR
- `npm login`
- `yarn deploy:package`
- in CLI tool, choose semantic version to reflect level of changes made:

```
v1.2.3
 ^ ^ ^
 │ │ └─ Patch: Documentation and fixes
 │ └─── Minor: Additions
 └───── Major: Deletions and edits
```

- add version/change description on Github and create new release (page will open automatically in browser after deployment is complete)
- if updating `church-center` or proxied apps, update [VERSIONS.md](https://github.com/ministrycentered/doxy-web/blob/main/VERSIONS.md) to reflect the change/associated PR

#### 🚀📚 Deploying Storybook (from `main`):

- pull changes via merged PR
- `yarn deploy:storybook`
- view changes: [https://ministrycentered.github.io/doxy-web/](https://ministrycentered.github.io/doxy-web/)

## Consumable CSS

- `yarn add @planningcenter/doxy-web`
- import `@planningcenter/doxy-web/dist/css/doxy-web`
