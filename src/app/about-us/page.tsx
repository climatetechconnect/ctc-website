import type { Metadata } from "next";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { AboutUsHero } from "@/components/organisms/AboutUsHero";
import aboutUs from "@/data/about-us.json";
import common from "@/data/common.json";

export const metadata: Metadata = {
	title: aboutUs.meta_title,
	description: aboutUs.meta_description,
};

const AboutUs = () => {
	return (
		<div>
			<AboutUsHero />
			<AboutUsContentSection />
			<LogosSection heading={aboutUs.logos.title} logos={common.our_partners} />
			<OurTeamSection />
			<JoinUsSection />
		</div>
	);
};

export default AboutUs;
