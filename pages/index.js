import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <div d>
      <Head>
        <title>events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
     
    </div>
  )
}
