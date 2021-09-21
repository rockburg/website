import { providers } from 'ethers'
import Web3Context from '@/context/Web3Context'
import { Dispatch, SetStateAction, useContext } from 'react'

const useWeb3: {
	(): providers.Web3Provider
	({ withSetter }: { withSetter?: true }): [providers.Web3Provider, Dispatch<SetStateAction<providers.Web3Provider>>]
} = ({ withSetter }: { withSetter?: boolean } = { withSetter: false }): any => {
	const [web3, setWeb3] = useContext(Web3Context)

	if (!withSetter) return web3

	return [web3, setWeb3]
}

export default useWeb3
