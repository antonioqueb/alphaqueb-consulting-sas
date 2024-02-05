/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['csm.queb.online'], // Añade el dominio de tus imágenes aquí
  },
  // ... otras configuraciones si las tienes
  generateBuildId: async () => {
    // Obtener el hash más reciente de git
    const { stdout } = await require('child_process').exec('git rev-parse HEAD')
    const gitHash = stdout.trim()

    return gitHash
  },
};

module.exports = nextConfig;
