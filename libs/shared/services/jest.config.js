module.exports = {
  name: 'shared-services',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
