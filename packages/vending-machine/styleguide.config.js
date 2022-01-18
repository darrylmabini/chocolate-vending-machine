module.exports = {
  assetsDir: 'public/',
  skipComponentsWithoutExample: true,
  ignore: ['**/*index.js'],
  pagePerSection: true,
  usageMode: 'expand',
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction/README.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide',
    },
    {
      name: 'Components',
      content: './docs/components/README.md',
      sectionDepth: 2,
      exampleMode: 'collapse',
      usageMode: 'expand',
      components: './src/components/**/*.jsx',
    },
    {
      name: 'Containers',
      content: './docs/containers/README.md',
      sectionDepth: 2,
      exampleMode: 'collapse',
      usageMode: 'expand',
      components: './src/containers/**/*.jsx',
    },
  ],
};
