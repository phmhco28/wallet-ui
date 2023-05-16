import { useContext, useState, React, Fragment } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Card from '@/components/Card';
import ButtonCard from '@/components/ButtonCard';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<main className={`container mx-auto min-h-screen flex flex-row py-28 px-36 ${inter.className}`}>
			<div className="z-2 max-w-5xl font-mono text-sm lg:flex">
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
							<h5 className="px-8 text-lg w-full">PAYING WITH CARD</h5>
						</div>
						{/* card & button */}
						<div className="flex flex-col">
							{/* card */}
							<div className="py-2">
								<Card />
							</div>

							{/* Button */}
							<div className="grid gap-4 grid-cols-2 py-2 row-span-1">
								<ButtonCard
									func={() => openModal()}
									name="Load"
									icon={<SystemUpdateAltOutlinedIcon />}
								/>

								<ButtonCard name="Transfer" icon={<InputOutlinedIcon />} />

								<ButtonCard name="Withdraw" icon={<SystemUpdateAltOutlinedIcon />} />

								<ButtonCard name="Refund" icon={<CurrencyExchangeOutlinedIcon />} />
							</div>
						</div>
					</div>

					{/* QR */}
					<div className="text-center">
						<div className="py-8 px-12">
							<div className="w-48 h-48 border-2 border-black bg-none"></div>
							<h5 className="py-2">
								Present QR Code to <strong>Pay</strong>
							</h5>
						</div>
					</div>
				</div>
			</div>

			{/* Dialog Load */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/30 bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="drop-shadow-2xl bg-purple-300 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<div className="fixed top-0 left-0 right-0 bg-white rounded-t-2xl p-6">
										<Dialog.Title
											as="h2"
											className="text-xl text-center font-medium leading-6 text-gray-900"
										>
											Choose a card
										</Dialog.Title>
									</div>
									<div className="overflow-y-auto max-h-96 mt-12">
										{/*content here */}
										<div className='mx-auto px-10 py-4'>
                      <Link href="/about">
                        <Card />
                      </Link>
                    </div>
										<div className='mx-auto px-10 py-4'>
                      <Link href="/">
                        <Card />
                      </Link>
                    </div>
										<div className='mx-auto px-10 py-4'>
                      <Link href="/">
                        <Card />
                      </Link>
                    </div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</main>
	);
}
