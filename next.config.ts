import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
