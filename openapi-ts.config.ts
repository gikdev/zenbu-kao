import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'src/features/api/openapi.yml',
  output: 'src/features/api/client/generated',
  plugins: [
    { name: '@hey-api/typescript', includeInEntry: true, enums: 'typescript-const' },
    { name: '@hey-api/client-fetch', includeInEntry: true, baseUrl: false },
    { name: '@hey-api/sdk', includeInEntry: true, paramsStructure: 'grouped' },
    { name: '@tanstack/react-query', includeInEntry: true },
  ],
})
