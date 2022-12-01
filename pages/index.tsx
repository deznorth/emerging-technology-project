import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Emerging Technology Project</title>
        <meta name="description" content="Emerging Technology Project - NextJS" />
      </Head>
      <h1>Hello World!</h1>
    </div>
  )
}

export default Home
