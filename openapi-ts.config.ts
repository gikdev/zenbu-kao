import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'src/features/api/openapi.yml',
  output: 'src/features/api/client/generated',
  plugins: [
    { name: '@hey-api/typescript', includeInEntry: true, enums: 'typescript-const' },
    { name: '@hey-api/client-fetch', includeInEntry: true, baseUrl: false, throwOnError: true },
    { name: '@hey-api/sdk', includeInEntry: true, paramsStructure: 'flat' },
    { name: '@tanstack/react-query', includeInEntry: true },
  ],
})
