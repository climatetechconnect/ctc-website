import type { Metadata } from "next";
import { Montserrat, Sometype_Mono } from "next/font/google";
import { Navigation } from "@/components/organisms/Navigation";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

const montserrat = Montserrat({
	weight: ["200", "300", "400", "600", "700"],
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const sometypeMono = Sometype_Mono({
	weight: ["400", "700"],
	variable: "--font-sometype-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Climate Tech Connect",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		images: [
			{
				url: "https://climatetechconnect.nl/img/meta/og_image_large.jpg",
				width: 1400,
				height: 732,
				type: "image/jpg",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [
			{
				url: "https://climatetechconnect.nl/img/meta/og_image_large.jpg",
				width: 1400,
				height: 732,
				type: "image/jpg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" prefix="og: http://ogp.me/ns#">
			<body className={`${montserrat.variable} ${sometypeMono.variable}`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
