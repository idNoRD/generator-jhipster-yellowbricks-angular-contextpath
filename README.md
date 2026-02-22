# generator-jhipster-yellowbricks-angular-contextpath

A [JHipster](https://www.jhipster.tech/) blueprint that sets the Angular `baseHref` in `angular.json` to a configurable context path.

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]
![GitHub Maintained](https://img.shields.io/maintenance/yes/2026)

## What it does

Patches `angular.json` during generation to insert `baseHref` as the first key in `build.options`:

```diff
  "architect": {
    "build": {
      "builder": "@angular-builders/custom-esbuild:application",
      "options": {
+       "baseHref": "/jh/",
        ...
```

The value is configurable — any context path can be used.

## Prerequisites

- Node.js `^22.18.0 || >=24.11.0`
- JHipster 9

## Installation

```bash
npm install -g generator-jhipster-yellowbricks-angular-contextpath
```

## Usage

Create a `.yo-rc.json` in your project directory with the desired context path:

```json
{
  "generator-jhipster-yellowbricks-angular-contextpath": {
    "contextPath": "/jh/"
  }
}
```

Replace `/jh/` with your actual context path. The trailing slash is required.

Then run JHipster with this blueprint:

```bash
# Standard generator
jhipster --blueprints yellowbricks-angular-contextpath

# With JDL
jhipster import-jdl your-app.jdl --blueprints yellowbricks-angular-contextpath
```

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-angular-contextpath.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-angular-contextpath
[github-generator-image]: https://github.com/idNoRD/generator-jhipster-yellowbricks-angular-contextpath/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/idNoRD/generator-jhipster-yellowbricks-angular-contextpath/actions/workflows/generator.yml
