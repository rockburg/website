import { FC, useContext, useEffect, useState } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import useContract from '@/hooks/useContract'
import Web3Context from '@/context/Web3Context'
import { BigNumber } from '@ethersproject/bignumber'

type NftDescriptor = {
	tokenId: string
	svgString: string
}

const Landing: FC = () => {
	const contract = useContract()
	const [web3Provider] = useContext(Web3Context)
	const [userAddress, setUserAddress] = useState<string>('')
	const [ownedNfts, setOwnedNfts] = useState<NftDescriptor[]>([])

	useEffect(() => {
		web3Provider?.getSigner().getAddress().then(setUserAddress)
	}, [web3Provider])

	useEffect(() => {
		if (!userAddress) {
			return
		}

		setOwnedNfts([])

		const getOwnedTokens = async () => {
			const userBalance = (await contract.balanceOf(userAddress)).toNumber()

			const idArray = [...Array(userBalance)].map((_, idx) => idx)
			idArray.forEach(async (_, idx) => {
				const tokenId = await contract.tokenOfOwnerByIndex(userAddress, idx)

				const tokenUri = await contract.tokenURI(tokenId)
				const encodedJsonString = tokenUri.split(',')[1]
				const decodedJsonString = Buffer.from(encodedJsonString, 'base64').toString()
				const json = JSON.parse(decodedJsonString)

				const encodedImageString = json.image.split(',')[1]
				const decodedImageString = Buffer.from(encodedImageString, 'base64').toString()

				setOwnedNfts(prevNfts => [...prevNfts, { tokenId: tokenId.toString(), svgString: decodedImageString }])
			})
		}

		getOwnedTokens()
	}, [userAddress])

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<ConnectWallet className="absolute top-4 right-4 border border-black p-1 rounded-lg">Connect Wallet</ConnectWallet>
			<h1 className="text-6xl font-semibold">WIP</h1>
			<h2 className="text-4xl font-semibold mt-16">Owned Rockburgs</h2>
			<div className="flex gap-2 mt-8">
				{ownedNfts.map(({ tokenId, svgString }) => (
					<div className="svg-container flex h-60" key={tokenId} dangerouslySetInnerHTML={{ __html: svgString }} />
				))}
			</div>
		</div>
	)
}

export default Landing
