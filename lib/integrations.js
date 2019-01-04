/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'adroll': require('@segment/analytics.js-integration-adroll'),
  'adwords': require('@segment/analytics.js-integration-adwords'),
  'bronto': require('@segment/analytics.js-integration-bronto'),
  'chartbeat': require('@segment/analytics.js-integration-chartbeat'),
  'drip': require('@segment/analytics.js-integration-drip'),
  'facebook-conversion-tracking': require('@segment/analytics.js-integration-facebook-conversion-tracking'),
  'facebook-custom-audiences': require('@segment/analytics.js-integration-facebook-custom-audiences'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'google-tag-manager': require('@segment/analytics.js-integration-google-tag-manager'),
  'hubspot': require('@segment/analytics.js-integration-hubspot'),
  'intercom': require('@segment/analytics.js-integration-intercom'),
  'kissmetrics': require('@segment/analytics.js-integration-kissmetrics'),
  'klaviyo': require('@segment/analytics.js-integration-klaviyo'),
  'mixpanel': require('@segment/analytics.js-integration-mixpanel'),
  'optimizely': require('@segment/analytics.js-integration-optimizely'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'twitter-ads': require('@segment/analytics.js-integration-twitter-ads'),
  'scratch-it': require('@segment/analytics.js-integration-scratch-it')
};
