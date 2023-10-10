import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.gql',
  documents: ['../client/src/**/*.{ts,tsx}'],
  generates: {
    '../client/src/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
