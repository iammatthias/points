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

        <p className={styles.description}>A Farcaster native meme coin, for the culture.</p>
        <p className={styles.description}>
          Build with or use $points however you want. The contract is{" "}
          <Link href='https://gist.github.com/iammatthias/918970d935911f04efca224692d6a4ee' target='_blank'>
            open source
          </Link>{" "}
          and{" "}
          <Link href='https://etherscan.io/token/0xd7C1EB0fe4A30d3B2a846C04aa6300888f087A5F#code' target='_blank'>
            verified on Etherscan
          </Link>
          .
        </p>
        <p className={styles.description}>
          There is a maximum supply of 1,000,000,000 $points. Once all the $points are minted, no more can be created.
        </p>

        <h1>
          <Link href='https://etherscan.io/tx/0x3eb38ebce80d0f6a82748134e168ce0bc8138f01bf0f2b64fb22457ef7b2388b'>
            On December 14th, 2023 750,000,000 of the max supply was burned
          </Link>{" "}
          to reduce the token amount. All tokens have now been minted.
        </h1>

        <p> pointstokeneth@gmail.com </p>
      </main>
    </div>
  );
};

export default Home;
