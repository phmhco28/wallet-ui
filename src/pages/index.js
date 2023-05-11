import Image from 'next/image';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Card from '@/components/Card';
import ButtonCard from '@/components/ButtonCard';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`container mx-auto min-h-screen flex flex-row py-28 px-36 ${inter.className}`}
		>
			<div className="z-1 max-w-5xl font-mono text-sm lg:flex">
				<div className="flex flex-row">
					<div className="px-4">
						{/* back */}
						<div>
							<button
								type="button "
								className="float-left text-gray-700"
								// onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<ArrowBackOutlinedIcon aria-hidden="true" />
							</button>
							<h5 className='px-8 text-lg w-full'>PAYING WITH CARD</h5>
						</div>
						{/* card & button */}
						<div className="flex flex-col">
							{/* card */}
							<div className="py-2">
								<Card />
							</div>

							{/* Button */}
							<div className="grid gap-4 grid-cols-2 py-2 row-span-1">
								<ButtonCard name="Load" icon={<SystemUpdateAltOutlinedIcon />} />

								<ButtonCard name="Transfer" icon={<InputOutlinedIcon />} />

								<ButtonCard name="Withdraw" icon={<SystemUpdateAltOutlinedIcon />} />

								<ButtonCard name="Refund" icon={<CurrencyExchangeOutlinedIcon />} />
							</div>
						</div>
					</div>

					{/* QR */}
					<div className="text-center">
						<div className='py-8 px-12'>
              <div className='w-48 h-48 border-2 border-black bg-none'>

              </div>
              <h5 className='py-2'>Present QR Code to <strong>Pay</strong></h5>
            </div>
					</div>
				</div>
			</div>
		</main>
	);
}
