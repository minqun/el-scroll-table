module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 自定义后的element-ui按需引入
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~theme'
      }
    ]
  ]
}
