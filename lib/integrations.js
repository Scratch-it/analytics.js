/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'bronto': require('@segment/analytics.js-integration-bronto'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'hubspot': require('@segment/analytics.js-integration-hubspot'),
  'intercom': require('@segment/analytics.js-integration-intercom'),
  'klaviyo': require('@segment/analytics.js-integration-klaviyo'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'twitter-ads': require('@segment/analytics.js-integration-twitter-ads'),
  'scratch-it': require('@segment/analytics.js-integration-scratch-it')
};
