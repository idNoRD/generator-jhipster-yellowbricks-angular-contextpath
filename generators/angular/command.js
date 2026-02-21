import { asCommand } from 'generator-jhipster';

export default asCommand({
  configs: {
    contextPath: {
      description: 'Context path to set as baseHref in angular.json (e.g. /jh/)',
      cli: {
        type: String,
      },
      scope: 'blueprint',
    },
  },
});
