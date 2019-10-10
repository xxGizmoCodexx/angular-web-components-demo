module.exports = {
  name: 'nx-element-container',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-element-container',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
