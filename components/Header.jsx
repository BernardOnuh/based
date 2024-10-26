import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownDisconnect, 
} from '@coinbase/onchainkit/wallet'; 
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';



// Wallet connection components
const MobileConnectWallet = () => (
<div className="rounded-md">
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
);

const DesktopConnectWallet = () => (
<div className="rounded-md border border-white">
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <div className='bg-black'>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
        </div>
      </Wallet>
    </div>
);
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-700 ">
      {/* Main header */}
      <div className='mx-auto max-w-7xl'>
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        <div className="flex items-center">
          <Image 
            src="/Basedpfp.svg" 
            alt="Basedpfp Logo" 
            width={180} 
            height={76}
            className="mr-2"
          />
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/create-event"
            className="px-4 py-2 text-white border border-white rounded-[10px] hover:bg-blue-600 transition-colors"
          >
            Create Event
          </Link>
          
          <DesktopConnectWallet />
          
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-700 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              href="/create-event"
              className="px-4 py-2 text-white border border-white rounded-[10px] l text-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              Create Event
            </Link>
            <MobileConnectWallet />
          </div>
        </div>
      )}
      </div>
    </header>
  );
}