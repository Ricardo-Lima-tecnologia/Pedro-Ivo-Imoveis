// Cloudflare Worker environment types
export interface Env {
  DB?: D1Database;
  R2_BUCKET?: R2Bucket;
  EMAILS?: any;
}
