import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '5ab0ec650215296cf65cdcd599323a2c'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export { wagmiConfig, ethereumClient, projectId };

// function App() {
//   return (
//     <>
//       <WagmiConfig config={wagmiConfig}>
//         <HomePage />
//       </WagmiConfig>

//       <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
//     </>
//   )
