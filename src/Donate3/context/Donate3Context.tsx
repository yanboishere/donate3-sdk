import * as React from 'react';
import { useAccount } from 'wagmi';
import { Donate3ContextType } from '../@types/donate3';
import { useFetchDonors } from '../hooks/useDonate';
// import DonorResultMockData from '../Mock/DonorResult.json';
import { DONATE_TYPE, ZERO_ADDRESS } from '../utils/const';
export const Donate3Context = React.createContext<Donate3ContextType>({
  toAddress: ZERO_ADDRESS,
  fromAddress: ZERO_ADDRESS,
  type: DONATE_TYPE.NORMAL,
  color: '#764abc',
  total: 0,
  title: 'Donate3',
  showDonorList: false,
  setShowDonorList: () => {},
  showSemiModal: false,
  setShowSemiModal: () => {},
  isConnected: false,
  showLoading: false,
  setShowLoading: () => {},
});

const Donate3Provider: React.FC<{
  children: React.ReactNode;
  toAddress: `0x${string}` | undefined;
  type: number;
  color: string;
  title: string;
}> = ({
  children,
  toAddress,
  type = DONATE_TYPE.NORMAL,
  color = '#764abc',
  title = 'Donate3',
}) => {
  const [showDonorList, setShowDonorList] = React.useState(false);
  const [showSemiModal, setShowSemiModal] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);

  const { address: fromAddress, isConnected } = useAccount();
  // const [donorList, setDonorList] = React.useState<DonorResult>();
  const { donors: donorList } = useFetchDonors(toAddress, '1');
  const total = donorList?.records?.length;
  console.log('----------all context----------');
  console.log('type:', type);
  console.log('color:', color);
  console.log('isConnected:', isConnected);
  console.log('showDonorList:', showDonorList);
  console.log('showLoading:', showLoading);
  console.log('toAddress:', toAddress);
  console.log('fromAddress:', fromAddress);

  React.useEffect(() => {
    if (isConnected) {
      setShowSemiModal(false);
    } else {
      setShowSemiModal(true);
    }
  }, [isConnected]);

  return (
    <Donate3Context.Provider
      value={{
        total,
        donorList,
        toAddress,
        fromAddress,
        title,
        type,
        color,
        showDonorList,
        setShowDonorList,
        showSemiModal,
        setShowSemiModal,
        isConnected,
        showLoading,
        setShowLoading,
      }}
    >
      {children}
    </Donate3Context.Provider>
  );
};

export default Donate3Provider;