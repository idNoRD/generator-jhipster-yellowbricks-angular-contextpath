import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, {
      ...features,

      sbsBlueprint: true,
    });
  }

  get [BaseApplicationGenerator.INITIALIZING]() {
    return this.asInitializingTaskGroup({
      async initializingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PROMPTING]() {
    return this.asPromptingTaskGroup({
      async promptingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.CONFIGURING]() {
    return this.asConfiguringTaskGroup({
      async configuringTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING]() {
    return this.asComposingTaskGroup({
      async composingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.COMPOSING_COMPONENT]() {
    return this.asComposingComponentTaskGroup({
      async composingComponentTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.LOADING]() {
    return this.asLoadingTaskGroup({
      async loadingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_PREPARING]() {
    return this.asPostPreparingTaskGroup({
      async postPreparingTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.DEFAULT]() {
    return this.asDefaultTaskGroup({
      async defaultTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: {
            files: [{ templates: ['template-file-angular'] }],
          },
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.MULTISTEP_TRANSFORM]() {
    return this.asMultistepTransformTaskGroup({
      async multistepTransformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async addBaseHref() {
        const contextPath = this.blueprintConfig.contextPath;
        if (!contextPath) {
          this.log.warn(
            '[base-href blueprint] contextPath not configured — pass --yellowbricks-angular-contextpath-config=\'{"contextPath":"/jh/"}\' when running jhipster',
          );
          return;
        }

        this.editFile('angular.json', { ignoreNonExisting: true }, content => {
          const json = JSON.parse(content);
          const projectName = Object.keys(json.projects ?? {})[0];
          const build = json.projects?.[projectName]?.architect?.build;

          // --- drift detection: verify expected surrounding structure ---
          const expectedBuilder = '@angular-builders/custom-esbuild:application';

          if (!build) {
            this.log.warn(
              '[base-href blueprint] angular.json: architect.build section not found — manual intervention needed',
            );
            return content;
          }
          if (build.builder !== expectedBuilder) {
            this.log.warn(
              `[base-href blueprint] angular.json: expected builder "${expectedBuilder}" but found "${build.builder ?? 'undefined'}" — manual intervention needed`,
            );
            return content;
          }
          if (!build.options) {
            this.log.warn(
              '[base-href blueprint] angular.json: architect.build.options not found — manual intervention needed',
            );
            return content;
          }
          if (!Array.isArray(build.options.plugins)) {
            this.log.warn(
              '[base-href blueprint] angular.json: build.options.plugins array not found — manual intervention needed',
            );
            return content;
          }
          if (!build.options.outputPath) {
            this.log.warn(
              '[base-href blueprint] angular.json: build.options.outputPath not found — manual intervention needed',
            );
            return content;
          }
          // --- end drift detection ---

          const previousBaseHref = build.options.baseHref;

          // Remove existing baseHref (if any) then insert as the first key in options
          const { baseHref: _removed, ...remainingOptions } = build.options;
          build.options = { baseHref: contextPath, ...remainingOptions };

          if (previousBaseHref && previousBaseHref !== contextPath) {
            this.log.info(
              `[base-href blueprint] angular.json: baseHref renamed from "${previousBaseHref}" to "${contextPath}"`,
            );
          } else {
            this.log.info(`[base-href blueprint] angular.json: baseHref "${contextPath}" added successfully`);
          }

          return `${JSON.stringify(json, null, 2)}\n`;
        });
      },
    });
  }

  get [BaseApplicationGenerator.TRANSFORM]() {
    return this.asTransformTaskGroup({
      async transformTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.INSTALL]() {
    return this.asInstallTaskGroup({
      async installTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_INSTALL]() {
    return this.asPostInstallTaskGroup({
      async postInstallTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.END]() {
    return this.asEndTaskGroup({
      async endTemplateTask() {},
    });
  }
}
