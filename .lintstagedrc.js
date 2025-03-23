module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['pnpm lint:strict', 'pnpm format:write'],
  '**/*.{json,css,scss,md,webmanifest}': ['pnpm format:write'],
};
