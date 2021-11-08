import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from './index'
import Navbar from './../components/Navbar'
import styles from "../../styles/Home.module.css";



const MyApp: React.FC <AppProps> = ({ Component, pageProps }) => {
 
    return (
        <>
        <Navbar/>
    <Component {...pageProps} />
    <footer className={styles.footer}>Footer</footer>
    </>
    );
    
}
export default MyApp
