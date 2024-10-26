import "../styles/globals.css";
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import { Providers } from "./providers"

// Create the wagmi config
const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkit',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

// Update the App component to include both Providers and WagmiProvider
export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </WagmiProvider>
  );
}