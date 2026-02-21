import { beforeAll, describe, expect, it } from 'vitest';

import { defaultHelpers as helpers, result } from 'generator-jhipster/testing';

const SUB_GENERATOR = 'angular';
const BLUEPRINT_NAMESPACE = `jhipster:${SUB_GENERATOR}`;

const sharedOptions = {
  ignoreNeedlesError: true,
};

function getAngularBuildOptions(runResult) {
  const json = runResult._readFile('angular.json', true);
  const projectName = Object.keys(json.projects)[0];
  return json.projects[projectName].architect.build.options;
}

describe('SubGenerator angular of yellowbricks-angular-contextpath JHipster blueprint', () => {
  describe('without contextPath', () => {
    beforeAll(async () => {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig()
        .withOptions(sharedOptions)
        .withJHipsterGenerators()
        .withConfiguredBlueprint()
        .withBlueprintConfig();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).toMatchSnapshot();
    });

    it('should not set baseHref in angular.json', () => {
      expect(getAngularBuildOptions(result).baseHref).toBeUndefined();
    });
  });

  describe('with contextPath configured', () => {
    beforeAll(async () => {
      await helpers
        .run(BLUEPRINT_NAMESPACE)
        .withJHipsterConfig()
        .withOptions(sharedOptions)
        .withJHipsterGenerators()
        .withConfiguredBlueprint()
        .withBlueprintConfig({ contextPath: '/jh/' });
    });

    it('should set baseHref to contextPath in angular.json', () => {
      expect(getAngularBuildOptions(result).baseHref).toBe('/jh/');
    });

    it('should insert baseHref as the first key in build.options', () => {
      expect(Object.keys(getAngularBuildOptions(result))[0]).toBe('baseHref');
    });
  });
});
