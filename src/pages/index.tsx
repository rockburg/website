import type { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'

const Landing: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<ConnectWallet className="absolute top-4 right-4 border border-black p-1 rounded-lg">Connect Wallet</ConnectWallet>
			<h1 className="text-6xl font-semibold">WIP</h1>
		</div>
	)
}

export default Landing
