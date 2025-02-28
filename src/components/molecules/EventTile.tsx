import Image from "next/image";
import { Button } from "../atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Galaxy } from "@/svg/Galaxy";

type Props = {
	event?: {
		id: number;
		color: string;
		badges: string[];
		prefix: string;
		title: string;
		description: string;
		image: string;
		date: Date;
		location: {
			place: string;
			city: string;
			country: string;
		};
		link: {
			url: string;
			label: string;
		};
	};
};

export const EventTile = ({ event }: Props) => {
	return (
		<li className="flex flex-col justify-start gap-4">
			<article
				className={`flex h-full w-full flex-col items-stretch justify-between gap-2 rounded-xl p-5 ${event?.color || "bg-gray-50"}`}
			>
				<div className="mb-3 flex flex-wrap items-start justify-start gap-2">
					{event ? (
						event.badges.map((badge, index) => <Badge key={index}>{badge}</Badge>)
					) : (
						<>
							<Badge className="h-7.5 w-28 bg-gray-400" />
							<Badge className="h-7.5 w-14 bg-gray-400" />
						</>
					)}
				</div>

				<header className="flex flex-col items-start justify-start gap-2">
					{event && (
						<Text className="text-md text-gray-900" is="p">
							{event.prefix}
						</Text>
					)}
					<div>
						<Heading is="h3" className={`text-3xl ${event ? "text-gray-900" : "text-gray-400"}`}>
							{event?.title || (
								<>
									To be <br></br>announced...
								</>
							)}
						</Heading>
					</div>
					{event && (
						<Text className="text-md text-gray-900" is="p">
							{event.description}
						</Text>
					)}
				</header>
				{event && (
					<div className="relative h-22 w-full">
						<Image src={event.image} alt={event.title} fill className="object-cover" />
					</div>
				)}

				<div className={`flex flex-col items-end justify-start ${event ? "gap-4" : "gap-2"}`}>
					<Text
						className={`ml-auto font-sometype-mono text-md lowercase ${event ? "tecxt-brown-600" : "text-gray-400"}`}
					>
						Invite only
					</Text>
					{event && (
						<Text className="text-3xl uppercase text-gray-900">
							{event.date.toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</Text>
					)}
					{event && (
						<div className="flex items-start justify-end gap-2">
							<Galaxy className="-mt-3 w-10" />
							<Text className="grow-0 text-right text-base uppercase">
								{event.location.place} <span className="px-2">/</span> {event.location.city}
								<span className="px-2">/</span> {event.location.country}
							</Text>
						</div>
					)}
				</div>
			</article>
			<Button className="self-end lowercase" href={event?.link.url} hasArrow disabled={!event}>
				{event?.link.label || "request a membership invite"}
			</Button>
		</li>
	);
};
