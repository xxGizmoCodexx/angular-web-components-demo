module.exports = {
  name: 'ui-controls-card',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/controls/card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
