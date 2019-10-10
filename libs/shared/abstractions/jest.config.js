module.exports = {
  name: 'shared-abstractions',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/abstractions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
