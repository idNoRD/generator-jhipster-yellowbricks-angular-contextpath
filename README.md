# generator-jhipster-yellowbricks-angular-contextpath

Assume the context-path is "/jh"

For `angular.json`
```diff
  ...
  "architect": {
    "build": {
      "builder": ...
      "options": {
+       "baseHref": "/jh/",
            ...
```
