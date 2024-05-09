import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'
import styles from '../src/styles/Layout.module.css'

export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel='shortcut icon' href="/images/favicon.ico"/>
            <title>PokeNext</title>
        </Head>
        <Navbar />
        <main className={styles.layout}>{children}</main>
        <Footer />
        </>
    )
}