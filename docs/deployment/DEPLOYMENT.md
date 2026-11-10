# Deployment Plan — Cloudflare

## Hosting target
Cloudflare Workers with Workers Static Assets for the React/Vite application. Keep the first release static/client-rendered unless a server requirement is demonstrated. Add Worker routes for APIs only when needed.

## Project CLI
Follow current Cloudflare guidance: use the Cloudflare CLI (`cf`) for a new project without existing Wrangler configuration. If the repository already contains a valid `wrangler.jsonc`, `wrangler.json` or `wrangler.toml`, inspect it and use Wrangler rather than introducing a second CLI. Do not add a Wrangler config simply by habit.

## Git workflow
- `main`: production-ready.
- `develop`: integration branch if needed once multiple parallel features exist.
- `feature/*` and `fix/*`: scoped work.
- Pull requests require build, unit, typecheck and E2E checks appropriate to the phase.
- Preview deployment for each reviewable change; production only after acceptance.
- Tag releases and document rollback procedure.

## Environment and security
No secrets in Git. Use Cloudflare secrets for credentials. Keep public build variables non-sensitive. Restrict production deploy permissions. Review dependency and asset licenses.

## Asset delivery
Bundle small critical assets with the app. Evaluate R2 for large shared models/textures only when asset volume and caching needs justify it. Use immutable/versioned asset URLs and cache headers. Do not put user-generated uploads into the static asset bundle.

## Rollback
Retain the last known-good deployment and Git commit. Roll back by redeploying the prior immutable release. Verify health, routing and asset URLs after rollback.

## Current status
Cloudflare account connection is present, but no LumaLab Worker, deployment target, domain mapping or production environment has yet been verified. Inspect the connected account and repository before creating or changing resources.
