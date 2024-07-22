import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './openapi.yaml',
  apiFile: './src/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/store/LynxScannerApi.ts',
  exportName: 'LynxScannerApi',
  hooks: true,
}

export default config
