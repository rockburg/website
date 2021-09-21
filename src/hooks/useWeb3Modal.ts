import { useMemo } from 'react'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const useWeb3Modal = (): Web3Modal => {
	return useMemo<Web3Modal>(() => {
		if (typeof window === 'undefined') return

		return new Web3Modal({
			cacheProvider: true,
			providerOptions: {
				walletconnect: {
					display: {
						description: 'Use Rainbow & other popular wallets',
					},
					package: WalletConnectProvider,
					options: {
						infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
					},
				},
			},
		})
	}, [])
}

export default useWeb3Modal
