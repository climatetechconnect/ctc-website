import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: false,
	basePath: "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
