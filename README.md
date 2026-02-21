# generator-jhipster-yellowbricks-angular-contextpath

A [JHipster](https://www.jhipster.tech/) blueprint that sets the Angular `baseHref` in `angular.json` to a configurable context path.

[![NPM version][npm-image]][npm-url]
[![Generator][github-generator-image]][github-generator-url]

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

Run JHipster with this blueprint and pass your desired context path:

```bash
jhipster --blueprints yellowbricks-angular-contextpath \
  --yellowbricks-angular-contextpath-config='{"contextPath":"/jh/"}'
```

Replace `/jh/` with your actual context path. The trailing slash is required.

## Pre-release

To use the latest unreleased version directly from GitHub:

```bash
npm install -g idNoRD/generator-jhipster-yellowbricks-angular-contextpath#main
jhipster --blueprints yellowbricks-angular-contextpath \
  --yellowbricks-angular-contextpath-config='{"contextPath":"/jh/"}'
```

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-yellowbricks-angular-contextpath.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-yellowbricks-angular-contextpath
[github-generator-image]: https://github.com/idNoRD/generator-jhipster-yellowbricks-angular-contextpath/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/idNoRD/generator-jhipster-yellowbricks-angular-contextpath/actions/workflows/generator.yml
