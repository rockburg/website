import '@/styles/tailwind.css'
import { FC, useState } from 'react'
import { providers } from 'ethers'
import type { AppProps } from 'next/app'
import Web3Context from '@/context/Web3Context'

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const web3State = useState<providers.Web3Provider>(null)

	return (
		<Web3Context.Provider value={web3State}>
			<Component {...pageProps} />
		</Web3Context.Provider>
	)
}

export default App
