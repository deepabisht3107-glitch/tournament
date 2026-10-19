# SSAB Connected Tournament Websites

This project contains two separate responsive websites that share the same Supabase database:

- `coach/index.html` — coach creates tournaments, views player entries, generates a random knockout draw, schedules courts/times, enters scores, and prints.
- `player/index.html` — players see open tournaments, register without creating an account, and check entries using their phone number.

## Connect the two websites

1. Create a free project at https://supabase.com/.
2. In Supabase, open **SQL Editor**, paste all of `supabase/schema.sql`, and run it.
3. Open **Project Settings → API** and copy the Project URL and `anon`/publishable key.
4. Edit `shared-config.js`, replacing `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_KEY` with your values. Never put a `service_role` key in browser code.
5. Test by serving the whole project from one local web server (for example, VS Code Live Server) and open `/coach/` and `/player/`. The relative shared files must remain in place.
6. To publish, upload the whole folder to a static host such as GitHub Pages or Netlify, keeping the same folder structure. Use the same configured project for both sites.

## Important security note

The included SQL policies are intentionally permissive for a quick prototype and allow public changes to tournament data, match results, and registrations. Do not use these policies with real player data on a public internet site. Before public launch, secure coach write operations using server-side authorization or Supabase Auth/RLS, and restrict access to phone numbers/registrations. The player-facing registration form is not a player account/login.

## Current prototype features

- Coach creates and publishes tournaments.
- Player portal reads the same tournament records and inserts registrations.
- Coach sees registrations as they arrive.
- Random knockout draw with byes, match score/winner entry, court/time fields, close registration, print, and basic registration lookup.
- Mobile-first styling and reduced-motion support.

This is a starter prototype, not a complete production tournament platform. Automatic bracket advancement after scores, live realtime subscriptions, payments, and secure coach-only access need additional implementation before production use.
