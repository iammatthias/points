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
        // og images
        <meta property='og:title' content='$points' />
        <meta property='og:description' content='farcaster native meme coin, for the culture' />
        <meta property='og:image' content='/og.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>$points</h1>

        <div className='statement'>
          <p>
            The support that $points has received has been overwhelming. I’m glad the community has found enjoyment in
            this, but I need to step away. I will not be working on or supporting $points.
          </p>
          <p>
            There is still not a plan for the funds, but they will not be used to support the $points ecosystem. I will
            decide what to do at my sole discretion.
          </p>
          <p>
            <Link href='https://warpcast.com/iammatthias/0xb573f17a'>https://warpcast.com/iammatthias/0xb573f17a</Link>
          </p>
        </div>
        <p className={styles.description}>
          Build with or use $points however you want. The contract is{" "}
          <Link href='https://etherscan.io/token/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F#code' target='_blank'>
            verified on Etherscan
          </Link>
          .
        </p>

        <h1>
          <Link href='https://etherscan.io/tx/0x3eb38ebce80d0f6a82748134e168ce0bc8138f01bf0f2b64fb22457ef7b2388b'>
            On December 14th, 2023 750,000,000 of the max supply was burned
          </Link>{" "}
          to reduce the token amount. All tokens have now been minted.
        </h1>
      </main>
    </div>
  );
};

export default Home;
