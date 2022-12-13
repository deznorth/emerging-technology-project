import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type ssgProps = {
    magicNumber: number
};

const SSG: NextPage<ssgProps> = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS - SSG Demo</title>
        <meta name="description" content="Emerging Technology Project - NextJS - SSG Demo" />
      </Head>
      <Link href="/">{'<'} Go Back</Link>
      <h1>Static-Site Generation Example</h1>
      <p>This page generates a &ldquo;random number&ldquo; at build time. So the only way for it to show a new number is to rebuild the page. However, it runs on all requests during development.</p>
      <h2>Your magic number is: {props.magicNumber}</h2>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const magicNumber = Math.floor(Math.random() * 50);
    return {
        props: { magicNumber }
    };
}

export default SSG