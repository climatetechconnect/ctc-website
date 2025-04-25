import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";

type Props = {
	heading: string;
	logos: {
		src: string;
		alt?: string;
		width: number;
		height: number;
		href: string;
	}[];
};

export const LogosSection = ({ heading, logos }: Props) => {
	return (
		<section>
			<Container className="bg-white pb-28 pt-20 md:pb-44 md:pt-24">
				<div>
					<Heading is="h2" className="mb-20">
						{heading}
					</Heading>
					<ul className="flex flex-wrap items-center justify-around gap-12 sm:justify-between">
						{logos.map(({ src, alt = "", width, height, href }, index) => (
							<li key={index}>
								<Link href={href} target="_blank" className="transition-opacity hover:opacity-70">
									<Image src={src} alt={alt} width={width} height={height} />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
