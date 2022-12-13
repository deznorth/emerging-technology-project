import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS - Emerging Technology Project</title>
        <meta name="description" content="Emerging Technology Project - NextJS" />
      </Head>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link href="ssr">Server-Side Rendering</Link>
        </li>
        <li>
          <Link href="ssg">Static-Site Generation</Link>
        </li>
        <li>
          <Link href="tisr">Timed Incremental Static Regeneration</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
