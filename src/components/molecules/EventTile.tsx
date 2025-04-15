import Image from "next/image";
import { useMemo } from "react";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Galaxy } from "@/svg/AnimatedGalaxy";
import { Badge as FlagshipBadge } from "@/svg/Badge";
import { Button } from "@/components/atoms/Button";

type Props = {
	event?: {
		color: string;
		isFlagship: boolean;
		tags: string[];
		prefix: string;
		title: string;
		description: string;
		image: string;
		date: {
			year: number;
			month: number;
			day: number;
		};
		location: {
			place: string;
			city: string;
			country: string;
		};
		button: {
			url: string;
			label: string;
		};
	};
};

export const EventTile = ({ event }: Props) => {
	const eventDate = useMemo(() => {
		if (!event) return null;
		return new Date(Date.UTC(event.date.year, event.date.month - 1, event.date.day));
	}, [event]);

	return (
		<li className="flex flex-col justify-start gap-4">
			<article
				className={`relative flex h-full w-full flex-col items-stretch justify-between gap-2 rounded-xl p-5 ${event?.color || "bg-gray-50"}`}
			>
				<div className="mb-3 flex flex-wrap items-start justify-start gap-2">
					{event ? (
						event.tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)
					) : (
						<>
							<Badge className="h-7.5 w-28 bg-gray-400" />
							<Badge className="h-7.5 w-14 bg-gray-400" />
						</>
					)}
				</div>
				{event?.isFlagship && (
					<div className="absolute left-full top-14 z-10 flex h-20 w-20 -translate-x-3/4 -rotate-[25deg] items-center justify-center lg:h-24 lg:w-24 lg:-translate-x-1/2">
						<FlagshipBadge className="absolute left-0 top-0 w-full" />
						<Text className="relative z-10 text-center font-sometype-mono text-2xs lowercase text-white lg:text-sm">
							Flagship
							<br />
							event
						</Text>
					</div>
				)}
				<header className="flex flex-col items-start justify-start gap-2">
					{event && (
						<Text className="text-md text-gray-900" is="p">
							{event.prefix}
						</Text>
					)}
					<div className="w-full">
						<Heading
							is="h3"
							className={`pr-10 text-3xl ${event ? "text-gray-900" : "text-gray-400"}`}
						>
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
					{eventDate && (
						<Text className="text-3xl uppercase text-gray-900">
							{eventDate.toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</Text>
					)}
					{event && (
						<div className="flex items-start justify-end gap-2">
							<Galaxy className="-mt-3 w-10 shrink-0" />
							<Text className="grow-0 text-right text-base uppercase">
								{event.location.place} <span className="px-2">/</span> {event.location.city}
								<span className="px-2">/</span> {event.location.country}
							</Text>
						</div>
					)}

					<div className="flex items-center justify-end gap-2">
						<Button
							target="_blank"
							className="bg-white lowercase"
							href={event?.button.url}
							disabled={!event?.button.url}
							hasArrow
						>
							{event?.button.label}
						</Button>
					</div>
				</div>
			</article>
		</li>
	);
};
