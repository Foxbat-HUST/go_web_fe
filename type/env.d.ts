interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly BASE_URL: string
  readonly API_BASE_URL: string
  readonly PORT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
