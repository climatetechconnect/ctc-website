import type { Metadata } from "next";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { AboutUsHero } from "@/components/organisms/AboutUsHero";
import aboutUs from "@/data/about-us.json";

export const metadata: Metadata = {
	title: aboutUs.meta_title,
	description: aboutUs.meta_description,
};

const partnersLogos = [
	{
		id: 1,
		src: "/img/logos/endeit.png",
		alt: "endeit logo",
		width: 137,
		height: 137,
		href: "https://www.linkedin.com/company/endeitcapital/about/",
	},
	{
		id: 2,
		src: "/img/logos/deroos.png",
		alt: "deroos logo",
		width: 121,
		height: 121,
		href: "https://www.linkedin.com/company/de-rooseu/about/",
	},
	{
		id: 3,
		src: "/img/logos/amsterdam-standard.png",
		alt: "amsterdam standard logo",
		width: 230,
		height: 230,
		href: "https://www.linkedin.com/company/amsterdam-standard/about/",
	},
	{
		id: 4,
		src: "/img/logos/junction.png",
		alt: "junction logo",
		width: 133,
		height: 133,
		href: "https://www.linkedin.com/company/junction-growth-investors/about/",
	},
	{
		id: 5,
		src: "/img/logos/sfpim.png",
		alt: "sfpim logo",
		width: 94,
		height: 94,
		href: "https://www.linkedin.com/company/sfpi-fpim/",
	},
];

const AboutUs = () => {
	return (
		<div>
			<AboutUsHero />
			<AboutUsContentSection />
			<LogosSection heading={aboutUs.logos.title} logos={partnersLogos} />
			<OurTeamSection />
			<JoinUsSection />
		</div>
	);
};

export default AboutUs;
