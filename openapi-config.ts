import type { ConfigFile } from '@rtk-query/codegen-openapi';

const baseDir = './src/store/api/gen';

const config: ConfigFile = {
  schemaFile: './openapi.yaml',
  apiFile: './src/store/api/empty.api.ts',
  apiImport: 'emptySplitApi',
  hooks: true,
  outputFiles: {
    [`${baseDir}/scans.api.gen.ts`]: {
      filterEndpoints: /scan/i,
      exportName: 'ScansApi',
    },
    [`${baseDir}/files.api.gen.ts`]: {
      filterEndpoints: [/file/i],
      exportName: 'FilesApi',
    },
  },
};

export default config;
