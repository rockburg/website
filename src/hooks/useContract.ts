import useWeb3 from './useWeb3'
import type { RockburgNFT } from '@/contracts'
import { RockburgNFT__factory } from '@/contracts'

const useContract = (): RockburgNFT => {
	const web3 = useWeb3()

	return RockburgNFT__factory.connect(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, web3)
}

export default useContract
