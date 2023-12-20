// @ts-check
import withPlaiceholder from "@plaiceholder/next"

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    domains: ["impulse360.ru"],
  },
}

export default withPlaiceholder(nextConfig)
