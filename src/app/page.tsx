import type { Metadata } from "next";
import { HomeHero } from "@/components/organisms/HomeHero";
import { FeatureSection } from "@/components/organisms/FeatureSection";
import { UpcomingEventsFeed } from "@/components/organisms/UpcomingEventsFeed";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import homepage from "@/data/homepage.json";
import common from "@/data/common.json";

export const metadata: Metadata = {
	title: homepage.meta_title,
	description: homepage.meta_description,
};

const Home = () => {
	return (
		<div>
			<HomeHero />
			<LogosSection heading={homepage.logos.title} logos={common.our_partners} />
			<FeatureSection />
			<UpcomingEventsFeed />
			<JoinUsSection />
		</div>
	);
};

export default Home;
