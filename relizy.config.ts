import { defineConfig } from 'relizy'

export default defineConfig({
  types: {
    feat: { title: '🚀 Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    style: { title: '💄 Styles', semver: 'patch' },
    docs: { title: '📖 Documentation' },
    test: { title: '🧪 Tests' },
    chore: false,
    examples: false,
    ci: false,
    build: false,
  },

  monorepo: {
    versionMode: 'selective',
    packages: ['./packages/*'],
  },

  publish: {
    safetyCheck: true,
  },

  release: {
    publish: false,
    commit: false,
    gitTag: false,
    push: false,
    social: true,
  },

  social: {
    changelogUrl: 'https://github.com/LouisMazel/relizy/releases',
    twitter: {
      enabled: true,
    },
  }
})
