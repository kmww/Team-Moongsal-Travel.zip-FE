import Head from 'next/head';

import { RichEditor } from '@/components/Editor';
import { TravelogueList } from '@/components/Travelogue';

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel.zip</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <TravelogueList />
        <RichEditor />
      </main>
    </>
  );
}
