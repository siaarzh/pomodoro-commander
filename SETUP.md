# Pomodoro Commander - Development Setup

## Quick Start

This project currently requires **Node.js v16.13.2** due to dependency compatibility constraints.

### Prerequisites

- Node.js v16.13.2 (see `.nvmrc` file)
- Yarn package manager
- Git

### First Time Setup

1. **Install Node.js v16.13.2**:
   ```bash
   # Using nvm (recommended)
   nvm install 16.13.2
   nvm use 16.13.2
   
   # Or download directly from nodejs.org
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Build and run**:
   ```bash
   yarn build
   yarn start:prod
   ```

### Development Commands

- `yarn start` - Start development server
- `yarn build` - Build the application
- `yarn test` - Run tests
- `yarn start:prod` - Run production build

## Current Limitations

This project currently uses older dependencies that require Node.js v16:
- `nedb` - Local database (incompatible with Node.js v17+)
- `happypack` - Webpack plugin (deprecated)
- OpenSSL compatibility issues with newer Node.js versions

## Future Upgrade Plan

We plan to upgrade to Node.js v24+ in the near future by:
- Replacing `nedb` with a modern database solution
- Updating `happypack` to `thread-loader`
- Resolving OpenSSL compatibility issues
- Updating all dependencies to latest versions

See the `feature/nodejs-v24-compatibility` branch for ongoing work.

## Troubleshooting

- **Build errors**: Ensure you're using Node.js v16.13.2
- **Dependency issues**: Try `yarn install --force`
- **Permission errors**: Run terminal as administrator (Windows)

