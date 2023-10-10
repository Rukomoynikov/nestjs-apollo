## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

**How schema.gql are generated?**

Our approach is code first. In settings of GraphQL we have this lines:

```typescript
GraphQLModule.forRootAsync<ApolloDriverConfig>({
  useFactory: (authService: AuthService) => {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    };
  },
})
```

It goes through all resolvers and builds that schema.

**How to generate graphql typings?**

Details of codegen utility are in codegen.ts files.

```bash
$ pnpm run codegen 
```