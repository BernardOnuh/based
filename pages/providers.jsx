import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains';
import { useState } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { createPublicClient } from 'viem';

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http()
  }
});

export function Providers(props) {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}
        >
          {props.children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}


export default Providers;