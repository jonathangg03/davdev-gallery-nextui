import Head from "next/head";
import { Text } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Text color="warning" h1>
          Almost before we knew it, we had left the ground
        </Text>
        <Text color="success" size="1.5em">
          Almost before we knew it, we had left the ground
        </Text>
        <Text color="error" size={20}>
          Tamaño de 20px
        </Text>
      </main>
    </>
  );
}
