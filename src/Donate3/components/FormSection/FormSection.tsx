import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit';
import classNames from 'classnames/bind';
import { ethers } from 'ethers';
import React, { MouseEvent, useEffect, useState } from 'react';
import {
  useAccount,
  useContract,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useSigner,
} from 'wagmi';
import useDonate from '../../hooks/useDonate';
// import { ReactComponent as SemiLogo } from '../../images/semilogo';
import abi from '../../abi.json';
import { ReactComponent as Eth } from '../../images/eth.svg';
import { ReactComponent as Switch } from '../../images/switch.svg';
import Footer from '../Footer/Footer';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './FormSection.module.css';
// https://imgloc.com/i/vk3wZ  https://i.328888.xyz/2023/03/12/vk3wZ.png  avatar
// https://imgloc.com/i/vkRxF  https://i.328888.xyz/2023/03/12/vkRxF.png  btc
// https://imgloc.com/i/vkcMH  https://i.328888.xyz/2023/03/12/vkcMH.png  wallet

function FormSection(props: { type: string; toAddress: string }) {
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { chain, chains } = useNetwork();
  const { address, isConnected } = useAccount();
  const [showSemiModal, setShowSemiModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  // const provider = useProvider();
  const createDonate = useDonate();
  const { data: signer } = useSigner();
  const contract = useContract({
    address: '0xbdEA24f8657eC8AD679b8bCcc761EcEE9600667e',
    abi: abi,
    signerOrProvider: signer,
  });

  // contract.off('MintEvent', mintEventListener);
  // contract.on('MintEvent', mintEventListener);

  let pid = 3;
  // let _merkleProof = '';
  // const amountIn = new BigNumber(amount * Math.pow(10, 18));
  const amountIn = amount && ethers.utils.parseEther(amount);
  const bytesMsg = ethers.utils.toUtf8Bytes(message);
  let donateTokenArgs = [
    pid,
    amountIn,
    '0xb86EB6f8a39Db243a9ae544F180ef958dBA4e8b4',
    // props.toAddress,
    bytesMsg,
    [],
    {
      value: amountIn,
    },
  ];
  // let mintArgs = [address, pid, address];

  console.log('donateTokenArgs', donateTokenArgs);
  const { config } = usePrepareContractWrite({
    address: '0xbdEA24f8657eC8AD679b8bCcc761EcEE9600667e',
    abi: abi,
    functionName: 'donateToken',
    args: donateTokenArgs,
  });
  // const { config: mintConfig } = usePrepareContractWrite({
  //   address: '0xbdEA24f8657eC8AD679b8bCcc761EcEE9600667e',
  //   abi: abi,
  //   functionName: 'mint',
  //   args: mintArgs,
  // });

  const {
    data: transactionData,
    isLoading,
    isSuccess,
    write,
  } = useContractWrite(config);
  // console.log('-------::', isLoading, isSuccess, transactionData);
  let cx = classNames.bind(styles);
  useEffect(() => {
    if (isConnected) {
      setShowSemiModal(false);
    } else {
      setShowSemiModal(true);
    }
  }, []);

  const asyncFunc = async () => {
    console.log('合约数据变更', transactionData, isLoading, isSuccess);
    const createDonateArgs = {
      chainType: chain?.name || 'unknow',
      coinType: 0,
      createTime: Date.now(),
      fromAddress: address,
      hash: transactionData?.hash,
      id: transactionData?.hash,
      message: message,
      status: 0, // TODO
      toAddress: props.toAddress,
      updateTime: Date.now(),
      usdValue: amount,
      userId: address,
      value: amount,
    };
    const result = await createDonate(createDonateArgs);
    console.log(result);
  };

  const handleDonate = async () => {
    if (isConnected) {
      setShowSemiModal(false);
      const data = {
        amount,
        message,
      };
      console.log(data, chain, chains, contract);
      // const res = await contract.mint(
      //   '0xb86EB6f8a39Db243a9ae544F180ef958dBA4e8b4',
      //   7,
      //   '0xb86EB6f8a39Db243a9ae544F180ef958dBA4e8b4',
      //   // {
      //   //   value: 100000,
      //   // },
      // );

      // console.log('-----', res);
      write?.();
      asyncFunc();
      console.log(transactionData);

      // TODO 调用合约
      // TODO toast
    } else {
      setShowSemiModal(true);
    }
  };

  const handleEthAmount = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.querySelectorAll('div').forEach((item: any) => {
      item.classList.remove(styles.active);
    });
    // @ts-ignore
    const amount = event.target?.dataset?.amount || 0;
    (event.target as HTMLElement).classList.add(styles.active);
    setAmount(amount);
  };

  const handleManualAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <section className={styles.appcontent}>
      <div className={styles.title}>Payment Method</div>
      <div className={styles.methodinput}>
        <div className={styles.eth}>
          <Eth />
        </div>
        <div>ETH</div>
        <input placeholder="Ethereum"></input>
        <div className={styles.switch} onClick={openChainModal}>
          <Switch />
        </div>
      </div>
      <div className={styles.footermark}>
        <div>icon</div>
        <div>21.11ETH</div>
        <div>0.01E = $127; 31GWEI = $0.75</div>
      </div>
      <div className={styles.shortcutoption} onClick={handleEthAmount}>
        <div data-amount={0.001}>0.001 ETH</div>
        <div data-amount={0.01}>0.01 ETH</div>
        <div data-amount={0.5}>0.5 ETH</div>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>
          <span>OR</span>
        </legend>
      </fieldset>
      <input
        className={styles.pricebtn}
        placeholder="Enter Price Manually"
        value={amount}
        onChange={handleManualAmount}
      ></input>
      <div className={styles.msg}>
        <div>Message</div>
        <input
          placeholder="Will be published on chain"
          multiple
          value={message}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
        ></input>
      </div>

      <button
        type="button"
        className={styles.donate3btn}
        // disabled={!write}
        onClick={handleDonate}
      >
        <div>DONATE3</div>
        <div>≈$875.32</div>
      </button>
      {showSemiModal ? (
        <div
          className={cx(
            styles.semiModal,
            { in: !isConnected || showSemiModal },
            { out: isConnected || !showSemiModal },
          )}
        >
          <div
            className={styles.bgmask}
            onClick={() => {
              setShowSemiModal(false);
            }}
          ></div>
          <div className={styles.semiwrap}>
            <div className={styles.semiimg}>
              <img
                className={styles.walleticon}
                // src="https://i.328888.xyz/2023/03/12/vkcMH.png"
                src={'https://i.328888.xyz/2023/03/12/vkcMH.png'}
              ></img>
              <img
                className={styles.btcicon}
                src="https://i.328888.xyz/2023/03/12/vkRxF.png"
              ></img>
            </div>
            <UserAvatar type={props.type}></UserAvatar>
            <div className={styles.semidonatebtn} onClick={openConnectModal}>
              Connect wallet for donation
            </div>
            <Footer></Footer>
          </div>
        </div>
      ) : null}
    </section>
  );
}

//

export default React.memo(FormSection);
