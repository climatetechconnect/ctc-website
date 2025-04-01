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
				url: "https://climatetechconnect.nl/img/meta/615x615.png",
				width: 615,
				height: 615,
				type: "image/png",
			},
			{
				url: "https://climatetechconnect.nl/img/meta/1200x627.png",
				width: 1200,
				height: 627,
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [
			{
				url: "https://climatetechconnect.nl/img/meta/615x615.png",
				width: 615,
				height: 615,
				type: "image/png",
			},
			{
				url: "https://climatetechconnect.nl/img/meta/1200x627.png",
				width: 1200,
				height: 627,
				type: "image/png",
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
		<html lang="en">
			<body className={`${montserrat.variable} ${sometypeMono.variable}`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
