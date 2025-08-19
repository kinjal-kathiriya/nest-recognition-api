
# Nest Recognition API (Starter Skeleton)

This is a **starter project skeleton** for the Nest Solutions assessment. It includes:
- TypeScript + GraphQL Yoga server
- Basic schema and resolvers structure
- PubSub wiring for subscriptions
- ESLint/Prettier and scripts to run

⚠️ **Integrity Notice Reminder**: Per the assessment PDF, you must implement the business logic
(RBAC, visibility masking, analytics, etc.) **yourself**. This skeleton intentionally leaves
TODOs for you to complete.

## Prerequisites
- Node.js 20+ (npm included)
- VS Code recommended

## Install
```bash
npm install
```

## Run (dev)
```bash
npm run dev
```
Open http://localhost:4000 to access GraphiQL.

## Build & start (prod-like)
```bash
npm run build
npm start
```

## Project Structure
```
src/
  server.ts
  schema.ts
  resolvers/
    index.ts
    Query.ts
    Mutation.ts
    Subscription.ts
  domain/
    models.ts
    rbac.ts
    visibility.ts
    data.ts
```

## Next Steps (you implement)
- Fill `src/domain/data.ts` with sample users/recognitions.
- Implement RBAC/visibility in `src/domain/rbac.ts` and `src/domain/visibility.ts`.
- Implement logic in resolvers (filters, analytics, subscriptions publish).
- Add descriptions to schema fields (assessment requires it).
- Document your design decisions in this README.

## Quick Tests (GraphiQL)
```graphql
query { me { id name role team } }
```
Open a second tab to subscribe after you implement publishing:
```graphql
subscription { recognitionReceived(userId: "u2") { id message } }
```
Then run a mutation targeting user "u2" once you implement sendRecognition.
