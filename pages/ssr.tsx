import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type ssrProps = {
    magicNumber: number
};

const SSR: NextPage<ssrProps> = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS - SSR Demo</title>
        <meta name="description" content="Emerging Technology Project - NextJS - SSR Demo" />
      </Head>
      <Link href="/">{'<'} Go Back</Link>
      <h1>Server-Side Rendering Example</h1>
      <p>This page generates a &ldquo;random number&ldquo; every time it is visited because it gets rendered on each visit and the props get recalculated.</p>
      <h2>Your magic number is: {props.magicNumber}</h2>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const magicNumber = Math.floor(Math.random() * 50);
    return {
        props: { magicNumber }
    };
}

export default SSR