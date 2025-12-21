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
    token: process.env.RELIZY_NPM_TOKEN_OTP,
    safetyCheck: true,
  },

  release: {
    publish: true,
  },
})
