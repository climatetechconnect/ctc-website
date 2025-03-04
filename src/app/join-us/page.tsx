import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
	title: "Join the Climate Tech Connect community | Climate Tech Connect",
	description:
		"Become a part of the Climate Tech Connect community. Join us to collaborate, innovate, and drive change in climate technology.",
};

const JoinUs = () => {
	return (
		<div>
			<section>
				<Container className="py-16 md:py-20">
					<div className="relative flex flex-col gap-10 md:gap-14">
						<Heading className="text-center text-xl lowercase text-brown-600">Join us</Heading>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<div className="flex items-start justify-center">
						{/* <iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSdFZijRjDUulFbquGoWgwjk8OM2j9LYDOr3p8hDdLLDRe0Ysg/viewform?embedded=true"
							width="640"
							height="1080"
							frameBorder={0}
							marginHeight={0}
							marginWidth={0}
						>
							Loading…
						</iframe> */}
						<Text className="block py-72 text-center text-gray-400">Soon</Text>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default JoinUs;
