# Branching Strategy

This document outlines the git branching strategy used across all budget app repositories.

## Branch Types

We follow a modified Gitflow workflow with the following branches:

- `main`: Production code. Represents the official release history.
- `develop`: Development branch. Contains the latest delivered development changes for the next release.
- `feature/*`: Feature branches. Used to develop new features. Branch from `develop` and merge back into `develop`.
- `release/*`: Release branches. Used to prepare for a new production release. Branch from `develop` and merge into both `develop` and `main`.
- `hotfix/*`: Hotfix branches. Used to quickly patch production releases. Branch from `main` and merge into both `develop` and `main`.

## Workflow

### Feature Development
1. Create a feature branch from `develop`: `git checkout -b feature/my-feature develop`
2. Work on the feature, committing changes as needed
3. When the feature is complete, create a pull request to merge back into `develop`
4. After code review and approval, merge the pull request

### Preparing a Release
1. Create a release branch from `develop`: `git checkout -b release/1.0.0 develop`
2. Make any final adjustments (version numbers, etc.)
3. When ready to release, create a pull request to merge into `main`
4. After merging into `main`, create another pull request to merge back into `develop`
5. Tag the release on `main`

### Hotfixes
1. Create a hotfix branch from `main`: `git checkout -b hotfix/1.0.1 main`
2. Fix the issue
3. Create a pull request to merge into `main`
4. After merging into `main`, create another pull request to merge into `develop`
5. Tag the hotfix on `main`

## Branch Protection

Both `main` and `develop` branches are protected:
- Require pull request reviews before merging
- Require status checks to pass before merging
- Restrict who can push to these branches

## Commit Messages

Follow conventional commits format: `type(scope): subject`
- `type`: feat, fix, docs, style, refactor, test, chore
- `scope`: optional, indicates what part of the codebase is affected
- `subject`: short description of the change

Example: `feat(auth): add login functionality`