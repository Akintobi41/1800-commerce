/// <reference types="vite/client" />

interface ImportMetaEnv { 
  readonly VITE_API_KEY: "wFlBiUTBviloGmCvJaViFjJozDrUCjxb0svrT9gQHc0";  // Add your custom environment variables here
  readonly VITE_SPACE_KEY: "6hoi4gahctlw",
  readonly VITE_APPWRITE_URL: "https://cloud.appwrite.io/v1"
  readonly VITE_APPWRITE_PROJECT_ID: "667b60d70006c997e6f7"
  readonly VITE_APPWRITE_DATABASE_ID: "667b63e0002ee853356b"
  readonly VITE_APPWRITE_COLLECTION_ID: "667b641e0019643bf170"
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}