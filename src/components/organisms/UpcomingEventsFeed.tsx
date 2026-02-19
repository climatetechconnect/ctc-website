"use client";
import { useState, useMemo } from "react";
import { TabList } from "../molecules/TabList";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { EventTile } from "@/components/molecules/EventTile";
import { Text } from "@/components/atoms/Text";
import { ArrowDown } from "@/svg/ArrowDown";
import homepage from "@/data/homepage.json";

const tabs = [
	{
		id: 1,
		label: "2026",
	},
	{
		id: 2,
		label: "Past events",
	},
];

export const UpcomingEventsFeed = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const filteredEvents = useMemo(() => {
		return homepage.events.event_tiles
			.filter((event) => {
				const date = new Date(Date.UTC(event.date.year, event.date.month - 1, event.date.day));
				const eventDateUnix = Math.floor(date.getTime() / 1000);
				const todayUnix = Math.floor(
					new Date(
						new Date().getFullYear(),
						new Date().getMonth(),
						new Date().getDate(),
					).getTime() / 1000,
				);
				if (activeTab === 1) {
					return date.getFullYear() === 2026 && eventDateUnix > todayUnix;
				} else if (activeTab === 2) {
					return eventDateUnix < todayUnix;
				}
				return false;
			})
			.sort((a, b) => {
				const dateA = new Date(Date.UTC(a.date.year, a.date.month - 1, a.date.day)).getTime();
				const dateB = new Date(Date.UTC(b.date.year, b.date.month - 1, b.date.day)).getTime();
				return dateA - dateB;
			});
	}, [activeTab]);

	return (
		<section id="events">
			<Container className="md:py-22 py-16 pt-24 md:pt-16">
				<div className="relative">
					<ArrowDown className="absolute bottom-full left-0 w-8 -translate-y-6 stroke-green-600 md:w-10 lg:w-14" />
					<Heading is="h2" className="mb-7">
						Upcoming events
					</Heading>
					<TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="mb-7" />

					{filteredEvents.length ? (
						<ul className="grid grid-cols-1 items-stretch gap-7 pr-5 md:grid-cols-2 lg:pr-12 xl:grid-cols-3 2xl:pr-0">
							{filteredEvents.map((event, index) => (
								<EventTile key={index} event={event} />
							))}
						</ul>
					) : (
						<Text className="block w-full text-center">No events found</Text>
					)}
				</div>
			</Container>
		</section>
	);
};
