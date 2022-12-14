import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Teste from '../components/teste/index'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <header>
            <h1 className={styles.title}>
              Welcome to Next.js!
            </h1>
            {/* <Teste/> */}
          </header>
        </main>
      </div>
    </>
  )
}
