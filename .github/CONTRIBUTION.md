# Contributing to Pomodoro Commander

Thank you for your interest in contributing to Pomodoro Commander! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js v16.13.2 (use `.nvmrc` file)
- Yarn package manager
- Git

#### Node.js Version Management

This project requires Node.js v16.13.2. Use one of these methods:

**Option A: Using nvm (Recommended)**
```bash
# Install nvm first, then:
nvm install 16.13.2
nvm use 16.13.2
```

**Option B: Using Volta**
```bash
# Install Volta first, then:
volta install node@16.13.2
```

**Option C: Direct Download**
Download Node.js v16.13.2 from [nodejs.org](https://nodejs.org/)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/siaarzh/pomodoro-commander.git
   cd pomodoro-commander
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Build the project**
   ```bash
   yarn build
   ```

4. **Run tests**
   ```bash
   yarn test
   ```

5. **Start development**
   ```bash
   yarn start
   ```

## How to Contribute

### Reporting Issues

- Check existing [issues](https://github.com/siaarzh/pomodoro-commander/issues) before creating a new one
- Use the provided issue templates for bug reports and feature requests
- Provide clear descriptions and steps to reproduce

### Submitting Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding conventions below
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**
   ```bash
   yarn test
   yarn lint
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Conventions

- **Styling**: Use [styled-components](https://www.styled-components.com) instead of separate CSS files
- **Code Style**: Follow the existing ESLint configuration
- **TypeScript**: Maintain type safety and add proper type annotations
- **Testing**: Write tests for new features and bug fixes
- **Commits**: Use conventional commit messages (feat:, fix:, docs:, etc.)

## Project Structure

- `src/main/` - Electron main process code
- `src/renderer/` - React frontend code
- `src/shared/` - Shared utilities and types
- `src/components/` - Reusable UI components

## Development Notes

- This is an Electron application with React frontend
- The project uses TypeScript throughout
- State management is handled with Redux
- Database operations use NeDB (local JSON database)

## Questions?

Feel free to open an issue or start a discussion if you have any questions about contributing!
