// pm2.config.js
module.exports = {
  apps: [
    {
      name: 'samtek-landing-page-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
    },
  ],
};
