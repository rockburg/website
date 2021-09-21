import { providers } from 'ethers'
import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const Web3Context = createContext<[providers.Web3Provider, Dispatch<SetStateAction<providers.Web3Provider>>]>(null)
Web3Context.displayName = 'Web3Context'

export default Web3Context
