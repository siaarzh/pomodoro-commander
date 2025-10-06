# Contributor Quick Start

## TL;DR
```bash
# 1. Install Node.js v16.13.2
nvm install 16.13.2 && nvm use 16.13.2

# 2. Install dependencies
yarn install

# 3. Build and run
yarn build && yarn start:prod
```

## Why Node.js v16?

This project currently requires Node.js v16.13.2 due to legacy dependencies:
- `nedb` (database) - incompatible with Node.js v17+
- `happypack` (webpack plugin) - deprecated
- OpenSSL compatibility issues

**We're working on upgrading to Node.js v24+** - see [UPGRADE_ROADMAP.md](UPGRADE_ROADMAP.md) for details.

## Development Commands

- `yarn start` - Development server
- `yarn build` - Build application
- `yarn test` - Run tests
- `yarn start:prod` - Run production build

## Troubleshooting

- **Build fails**: Ensure you're using Node.js v16.13.2
- **Permission errors**: Run terminal as administrator (Windows)
- **Dependency issues**: Try `yarn install --force`

## Questions?

- Check [SETUP.md](SETUP.md) for detailed setup instructions
- See [UPGRADE_ROADMAP.md](UPGRADE_ROADMAP.md) for modernization plans
- Review [CONTRIBUTION.md](.github/CONTRIBUTION.md) for contribution guidelines
