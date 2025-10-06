# Contributor Quick Start

## TL;DR

**Windows (WSL2 for testing only)**:
```bash
# Open WSL2 Ubuntu terminal
wsl -d Ubuntu

# 1. Install Node.js v16.13.2
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install Yarn (requires sudo)
sudo npm install -g yarn

# 3. Install dependencies
yarn install --ignore-optional

# 4. Test only (GUI apps won't work in WSL2)
yarn test
yarn build
# Note: yarn start:prod won't work - use Windows terminal for GUI apps
```

**Windows (Native development)**:
```bash
# Use Windows terminal with Node.js v16.13.2
# Install via nvm-windows or direct download
nvm install 16.13.2
nvm use 16.13.2

# Install Yarn
npm install -g yarn

# Install dependencies
yarn install --ignore-optional

# Build and run (this will work)
yarn build && yarn start:prod
```

**macOS/Linux**:
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
- **Windows issues**: Use WSL2 Ubuntu for best compatibility with CI environment
- **Permission errors**: Run terminal as administrator (Windows) or use WSL2
- **Dependency issues**: Try `yarn install --force` or `yarn install --ignore-optional`
- **WSL2 setup**: Install WSL2 Ubuntu from Microsoft Store, then follow Windows instructions above

## Questions?

- Check [SETUP.md](SETUP.md) for detailed setup instructions
- See [UPGRADE_ROADMAP.md](UPGRADE_ROADMAP.md) for modernization plans
- Review [CONTRIBUTION.md](.github/CONTRIBUTION.md) for contribution guidelines
