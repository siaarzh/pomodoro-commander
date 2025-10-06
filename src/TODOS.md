# Development TODOs

## High Priority

-   [x] **Node.js Setup**: Install Node.js v16.13.2 and test build process
-   [x] **Build Verification**: Ensure `yarn build` works with correct Node.js version
-   [x] **Feature Testing**: Test all app features after rebranding

## Medium Priority

-   [ ] **Code Cleanup**: Remove any remaining hardcoded "PomodoroLogger" references
-   [ ] **Documentation**: Update inline code comments and JSDoc
-   [ ] **Testing**: Ensure all tests pass with new branding

## Low Priority

-   [ ] **Performance**: Profile app startup time
-   [ ] **UI Polish**: Review UI for any branding inconsistencies
-   [ ] **Error Messages**: Update error messages to use new app name

## Next Sprint: Node.js v24+ Upgrade

-   [ ] **Follow UPGRADE_ROADMAP.md**: Detailed modernization plan
-   [ ] **Database Migration**: Replace nedb with modern alternative (better-sqlite3, sqlite3, or lowdb)
-   [ ] **Build System**: Replace happypack with thread-loader
-   [ ] **Node.js v18 LTS**: Intermediate upgrade step
-   [ ] **Node.js v24+**: Final target version
-   [ ] **Cleanup**: Remove temporary workarounds and Windows-specific scripts

## Completed ✅

-   [x] Rebrand package.json and all config files
-   [x] Update README.md with new branding
-   [x] Set up cross-platform build system
-   [x] Configure CI/CD with Codecov
-   [x] Create Node.js v24+ compatibility branch
-   [x] Update contribution guidelines
