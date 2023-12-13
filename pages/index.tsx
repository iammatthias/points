import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MintTokensForm from "../components/mint";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  return (
    <div className={styles.container}>
      <Head>
        <title>$points</title>
        <meta content='farcaster native meme coin, for the culture' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>$points</h1>

        <p className={styles.description}>A Farcaster native meme coin, for the culture.</p>
        <p className={styles.description}>
          Build with or use $points however you want. The contract is{" "}
          <Link href='https://gist.github.com/iammatthias/918970d935911f04efca224692d6a4ee'>open source</Link> and{" "}
          <Link href='https://etherscan.io/token/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F#code'>
            verified on Etherscan
          </Link>
          .
        </p>
        <p className={styles.description}>
          There is a maximum supply of 1,000,000,000 $points. Once all the $points are minted, no more can be created.
        </p>

        <h2>Want $points?</h2>

        <ul>
          <li>
            random airdrop on <Link href='https://warpcast.com/~/invite-page/2728?id=0bb9e451'>Farcaster</Link>
          </li>
          <li>gift from a $points holder</li>
          <li>buy them</li>
          <ul>
            <li>
              $points can be purchased here or{" "}
              <Link href='https://etherscan.io/address/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F#writeContract#F3'>
                direct from the contract
              </Link>
            </li>
            <li>$points are 0.0001Ξ for 100 tokens, and scales accordingly</li>
            <li>$points are not (currently) listed on Uniswap or any other exchange</li>
          </ul>
        </ul>

        <p>Connect your wallet to mint.</p>

        <ConnectButton />

        {isConnected && <MintTokensForm />}
      </main>
    </div>
  );
};

export default Home;