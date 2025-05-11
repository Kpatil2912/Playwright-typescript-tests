# 🎭 Playwright Automation

A personal practice repository to build and refine end-to-end automation skills using [Playwright](https://playwright.dev/). This project includes UI testing, API interactions, cross-browser testing, and integration with CI/CD pipelines using Playwright's built-in reporting.

---

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/) (with TypeScript)
- Node.js
- Playwright Test Runner
- Axios (for API Testing)
- CI/CD Ready (GitHub Actions, Azure DevOps, Jenkins)

---

## 📁 Folder Structure

```ini
├── .github/                     # GitHub Actions workflows
├── Archive/                     # Archive or backup files
├── node_modules/                # Node.js dependencies
├── playwright-report/           # Playwright HTML report output
├── src/                         # Source code folder
│   ├── config/                  # Configuration files
│   │   └── env/                 # Environment specific configs
│   ├── dao/                     # Data access objects and interfaces
│   ├── data/                    # Static test data
│   ├── fixtures/                # Custom test fixtures
│   ├── pages/                   # Page Object Models (e.g., LoginPage.ts)
│   ├── reports/                 # Custom or manual test reports
│   ├── tests/                   # Test cases
│   ├── types/                   # TypeScript types and interfaces
│   ├── utils/                   # Utility functions
│   └── verifications/           # Custom assertions or verification helpers
├── test-results/                # Playwright test results output
├── .gitignore                   # Files and folders to ignore in Git
├── LICENSE                      # Project license
├── package-lock.json            # Exact versions of dependencies
├── package.json                 # NPM scripts and dependencies
├── playwright.config.ts         # Playwright configuration
├── README.md                    # Project readme
├── tsconfig.json                # TypeScript configuration
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/playwright-automation-practice.git
cd playwright-automation-practice

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Run Tests

```bash
npx playwright test

```

### 4. View Playwright HTML Report

```bash
npx playwright show-report

```

---

## 🔄 Continuous Integration

This project is compatible with:

- ✅ GitHub Actions
- ✅ Azure DevOps Pipelines
- ✅ Jenkins
- ✅ AWS CodePipeline

Sample CI workflows can be added under `.github/workflows/`.

---

## 🧪 Testing Capabilities

- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel and retry test execution
- Page Object Model structure
- API + UI integration tests
- Custom fixtures and setup scripts
- Test tagging and selective runs

## 🧹 Code Quality: ESLint & Prettier

### ESLint

[ESLint](https://eslint.org/) is used to analyze code for potential errors, enforce coding standards, and maintain code quality throughout the project.

**Useful ESLint Commands:**

```bash
# Check for linting errors in the project
npx eslint .

# Automatically fix fixable issues
npx eslint . --fix

# Check a specific file
npx eslint src/pages/homePage.ts
```

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter that ensures consistent code style across the codebase.

**Useful Prettier Commands:**

```bash
# Format all files in the project
npx prettier --write .

# Check formatting without making changes
npx prettier --check .

# Format a specific file
npx prettier --write src/pages/homePage.ts

# List files that are not formatted
npx prettier --list-different .
```

Both tools are integrated to help keep your codebase clean, readable, and maintainable. You can also add scripts to your `package.json` for convenience:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

## 🐶 Git Hooks: Husky & Commit Message Linting

### Husky

[Husky](https://typicode.github.io/husky/) is used to manage Git hooks, ensuring code quality checks (like linting and formatting) are run automatically before each commit or push.

**Pre-commit Hook:**

- Runs ESLint and Prettier (via lint-staged) on staged files before every commit.
- Blocks commits if there are lint errors that cannot be auto-fixed.

**Pre-push Hook (optional):**

- You can add a pre-push hook to run tests before pushing code to remote.

**Useful Husky Commands:**

```bash
# (Re)install Husky hooks
npm run prepare

# Manually run the pre-commit hook
.husky/pre-commit
```

### Commitlint

[Commitlint](https://commitlint.js.org/) enforces [Conventional Commits](https://www.conventionalcommits.org/) for commit messages, ensuring readable and consistent commit history.

**Commit Message Examples:**

- feat: add user login test
- fix: correct typo in homepage
- docs: update README
- refactor: improve test structure
- test: add e2e shopping cart test

**Useful Commitlint Commands:**

```bash
# Manually check a commit message
npx commitlint --edit <commit-msg-file>

# Example (for last commit):
npx commitlint --edit $(git log -1 --pretty=%H)
```

### Setup Steps (Summary)

1. Install Husky, lint-staged, and commitlint:
   ```bash
   npm install --save-dev husky lint-staged @commitlint/{config-conventional,cli}
   ```
2. Add Husky hooks:
   - Pre-commit: runs `npx lint-staged`
   - Commit-msg: runs `npx --no-install commitlint --edit $1`
3. Add `lint-staged` and `commitlint.config.js` to your project.
4. Configure your `package.json` scripts and lint-staged section as shown above.

---

## 🌱 Project Goals

- Strengthen Playwright skills via hands-on practice
- Develop a scalable test automation framework
- Integrate with modern DevOps pipelines
- Build readable and maintainable test code

---

## 🙌 Contributions

This is a personal learning project, but feel free to fork it, use it, or suggest improvements via pull requests or issues!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
