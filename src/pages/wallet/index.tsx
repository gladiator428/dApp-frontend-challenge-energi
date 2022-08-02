import React from "react";
import { useEthContext } from "context/EthereumContext";
import { toast } from "react-toastify";

const Wallet: React.FC = () => {
  const { provider, currentAcc }: any = useEthContext();

  const handleConnectWallet = async () => {
    if (provider) {
      await provider.request({ method: `eth_requestAccounts` });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  return (
    <div onClick={handleConnectWallet}>
      {currentAcc ? currentAcc : "Connect Wallet"}
    </div>
  );
};

export default Wallet;
