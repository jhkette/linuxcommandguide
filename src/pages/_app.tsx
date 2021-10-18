import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from './index'
import Navbar from './../components/Navbar'



const MyApp: React.FC <AppProps> = ({ Component, pageProps }) => {
 
    return (
        <>
        <Navbar/>
    <Component {...pageProps} />
    </>
    );
    
}
export default MyApp
