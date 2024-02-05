// next.config.js

const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  images: {
    domains: ['csm.queb.online'],
  },
  generateBuildId: async () => {
    try {
      const { stdout, stderr } = await exec('git rev-parse HEAD');
      if (stderr) {
        console.error(stderr);
        throw new Error(stderr);
      }
      return stdout.trim();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
