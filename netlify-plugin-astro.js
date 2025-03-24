module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Setting up Astro build environment...');
    
    // This helps ensure Netlify uses the right build settings
    process.env.ASTRO_TELEMETRY_DISABLED = '1';
    process.env.NETLIFY_IMAGES_CDN_DOMAIN = process.env.URL || process.env.DEPLOY_URL;
  }
};
