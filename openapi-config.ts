import type { ConfigFile } from '@rtk-query/codegen-openapi';

const baseDir = process.env.GEN_FOLDER!;

const config: ConfigFile = {
  schemaFile: './openapi.yaml',
  apiFile: './src/store/emptyApi.ts',
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
