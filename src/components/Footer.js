import React from 'react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-gradient-to-r from-purple-800 to-pink-600 text-white">
			<div className="grid grid-cols-3 p-6 lg:px-8">
				<div className="mx-auto flex max-w-7xl">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">eWallet</span>
						<img
							className="h-8 w-auto"
							src="https://market-kanoo-dev.kardsys.com/assets/image/home.png"
							alt=""
						/>
					</Link>
				</div>
				<div className="flex flex-col col-span-2 pb-2">
					<div className="pl-10">
						<ul className="flex flex-row justify-around  mb-0 list-none">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Disclaimers</a>
							</li>
							<li>
								<a href="#">T & C</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li href="#">
								<a>Contact Us</a>
							</li>
						</ul>
					</div>
					<div className="flex justify-end">Copyright © 2020 -</div>
				</div>
			</div>
		</footer>
	);
}
