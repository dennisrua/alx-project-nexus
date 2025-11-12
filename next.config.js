/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

// Above code ensures server-side rendering works smoothly with Styled Components, enabling better debugging and consistent class names across server and client.
