module.exports = {
  name: 'nx-element-container-ivy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-element-container-ivy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
