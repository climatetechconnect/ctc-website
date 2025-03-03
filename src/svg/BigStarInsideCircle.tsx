type Props = {
	className?: string;
};

export const BigStarInsideCircle = ({ className = "" }: Props) => {
	return (
		<svg className={className} viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="94.5" cy="94.5" r="94" stroke="#624049" />
			<path
				d="M36.2739 91.1072C27.4622 92.4196 19.0134 93.3705 12.6239 94.0035C18.7902 94.1041 26.8715 94.3812 35.3662 95.0699C44.3661 95.7997 53.8438 96.9926 62.0045 98.9321C70.1392 100.865 77.0634 103.562 80.8621 107.361C84.6582 111.157 87.4528 118.126 89.5317 126.332C91.6172 134.565 93.0049 144.138 93.9291 153.235C94.6551 160.38 95.0959 167.239 95.3637 172.934C95.696 167.238 96.2133 160.377 97.0159 153.23C98.0374 144.133 99.5225 134.56 101.681 126.328C103.833 118.123 106.677 111.155 110.471 107.361C114.268 103.564 121.043 100.867 128.961 98.9327C136.904 96.9928 146.091 95.7997 154.8 95.0699C163.014 94.3816 170.816 94.1044 176.767 94.0037C170.593 93.3706 162.424 92.4196 153.891 91.1069C145.04 89.7452 135.787 87.9926 127.961 85.7985C124.049 84.7015 120.483 83.4914 117.499 82.1603C114.521 80.8322 112.089 79.369 110.471 77.7515C108.852 76.1326 107.413 73.7108 106.127 70.7531C104.838 67.7887 103.689 64.2525 102.665 60.3756C100.617 52.6217 99.0589 43.4646 97.8917 34.7104C96.7241 25.9537 95.9459 17.5878 95.4597 11.412C95.4134 10.8241 95.3697 10.256 95.3286 9.70923C95.2941 10.2542 95.2573 10.8203 95.2181 11.4061C94.8048 17.582 94.1239 25.948 93.0536 34.705C91.9836 43.4594 90.523 52.6169 88.5478 60.3713C87.5602 64.2485 86.4414 67.7853 85.1738 70.7503C83.909 73.7086 82.4819 76.1316 80.8621 77.7515C79.2426 79.371 76.7714 80.8343 73.7308 82.1619C70.6826 83.4928 67.0259 84.7026 63.0042 85.7994C54.9605 87.9932 45.4161 89.7456 36.2739 91.1072Z"
				fill="#624049"
				stroke="#624049"
			/>
		</svg>
	);
};
