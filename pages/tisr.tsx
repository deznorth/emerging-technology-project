import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type ssgProps = {
    fill: string
};

const SSG: NextPage<ssgProps> = (props) => {
  return (
    <div>
        <Head>
            <title>NextJS - SSG Demo</title>
            <meta name="description" content="Emerging Technology Project - NextJS - SSG Demo" />
        </Head>
        <Link href="/">{'<'} Go Back</Link>
        <h1>Timed Incremental Static Regeneration Example</h1>
        <p>This page generates a &ldquo;random color&ldquo; at build time. but the page is rebuilt on the next visit after 5 seconds have passed</p>
        <h2>Your random color is: {props.fill}</h2>
        <svg width="400" height="110">
            <rect width="300" height="300" fill={props.fill} strokeWidth='3' stroke='rgb(0,0,0)' />
        </svg>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const fill = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    return {
        props: { fill },
        revalidate: 5,
    };
}

export default SSG