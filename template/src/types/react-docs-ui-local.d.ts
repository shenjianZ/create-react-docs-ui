declare module "../../../react-docs-ui/dist/docs-app.es.js" {
  import type { JSX } from "react"
  import type { ShikiBundle } from "../../../react-docs-ui/dist/types/docs-app"

  export interface DocsAppProps {
    shikiBundle?: ShikiBundle
  }

  export function DocsApp(props?: DocsAppProps): JSX.Element
  export function preloadDocsRuntime(): void
}
