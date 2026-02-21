# Development

## Prerequisites

- Node.js `^22.18.0 || >=24.11.0`
- JHipster 9 (`npm install -g generator-jhipster@9.0.0-beta.3`)

## Setup

```bash
npm install
```

## Running tests

```bash
npm test
```

This runs Prettier, ESLint, and Vitest in sequence. To run only tests:

```bash
npm run vitest
```

To update snapshots after intentional output changes:

```bash
npm run update-snapshot
```

## Testing locally against a real JHipster project

### 1. Link the blueprint globally

From the root of this repository:

```bash
npm link
```

### 2. Generate a JHipster app with the blueprint

Create an empty directory, then run JHipster with this blueprint:

```bash
mkdir /tmp/test-app && cd /tmp/test-app
jhipster \
  --blueprints yellowbricks-angular-contextpath \
  --yellowbricks-angular-contextpath-config='{"contextPath":"/jh/"}'
```

The generator will patch `angular.json` during the `POST_WRITING` phase and add (or overwrite) `baseHref` with the configured context path.

### 3. Verify the result

```bash
grep -A1 '"baseHref"' angular.json
```

Expected output:

```
"baseHref": "/jh/"
```

### 4. Unlink when done

```bash
npm unlink -g generator-jhipster-yellowbricks-angular-contextpath
```

## Releasing to npm

### 1. Make sure the working tree is clean

```bash
git status
```

### 2. Bump the version

```bash
npm version patch   # or minor / major
```

This updates `package.json`, commits the change, and creates a git tag.

### 3. Push the tag

```bash
git push origin main --tags
```

### 4. Publish

```bash
npm publish
```

If publishing for the first time or to a public registry:

```bash
npm publish --access public
```

### Version conventions

| Change type                        | Command             |
| ---------------------------------- | ------------------- |
| Bug fix                            | `npm version patch` |
| New feature (backwards compatible) | `npm version minor` |
| Breaking change                    | `npm version major` |
