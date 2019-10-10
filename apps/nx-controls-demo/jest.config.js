module.exports = {
  name: 'nx-controls-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-controls-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
