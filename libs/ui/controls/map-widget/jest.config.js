module.exports = {
  name: 'ui-controls-map-widget',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/controls/map-widget',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
