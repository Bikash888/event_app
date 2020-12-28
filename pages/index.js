import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Category from './components/catagories'
import EventCard from './components/eventCard'
import Header from './components/Header'
import EventDetails from "./event-details"

export default function Home() {
  return (
    <div >
      {/* <Head>
        <title>events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <Category/>
       <div className={styles.cardMain}>
       <div className={styles.eventMain}>
        <strong className={styles.eventTitle}>Events You  Can't Miss </strong> 
         
       </div>
       </div> */}
       <EventDetails/>
    </div>
  )
}
