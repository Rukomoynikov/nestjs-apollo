# An example project to test combination of react and nest js

## Installation

1. Install npm packages in both directories (pnpm install)
2. Migrate database `npx prisma migrate dev` in api folder
3. Generate GraphQL types `npm run codegen` in api folder

## Start server

1. Start dev server `pnpm run start:dev`
2. GraphQL playground available - http://localhost:4000/graphql

(It's possbile to start both client and server via `overmind start` in the main folder)
