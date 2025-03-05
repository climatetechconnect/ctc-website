import { twMerge } from "tailwind-merge";

export const Star = ({ className }: { className?: string }) => (
	<svg
		className={twMerge("fill-brown-600", className)}
		viewBox="0 0 21 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M10.2857 0.348554C10.2857 0.348554 9.70427 6.3171 7.50161 8.87476C5.29894 11.4324 0.0367349 12.2493 0.0367349 12.2493C0.0367349 12.2493 5.29511 12.7072 7.48286 15.115C9.6706 17.5229 10.2163 23.453 10.2163 23.453C10.2163 23.453 10.7978 17.4844 13.0004 14.9268C15.2031 12.3691 20.4653 11.5522 20.4653 11.5522C20.4653 11.5522 15.2069 11.0943 13.0192 8.68648C10.8314 6.27864 10.2857 0.348554 10.2857 0.348554Z" />
	</svg>
);
