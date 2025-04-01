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
