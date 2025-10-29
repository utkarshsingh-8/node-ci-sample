# node-ci-sample

Minimal Node.js (Express) app to demonstrate GitHub Actions CI pipeline.

## What is included
- Express app (`src/index.js`)
- One sample route (`/health`)
- Unit test with Jest + Supertest
- ESLint config
- GitHub Actions workflow: `.github/workflows/node-ci.yml`

## Local setup
```bash
git clone <your-repo>
cd node-ci-sample
npm install
npm test
npm run lint
npm start
```

## How to use for CI
1. Push this repo to GitHub.
2. The workflow in `.github/workflows/node-ci.yml` will run on push/pull_request to main.
3. Add any secrets in GitHub settings if you plan on deploying.
