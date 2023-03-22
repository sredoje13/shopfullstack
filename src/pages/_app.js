import '@/styles/globals.css'
import { Provider } from 'store/useContext'
import { Navbar } from 'components'
import { useRouter } from 'next/router'
import {useState} from 'react'
import './../styles/globals.css'
import Footer from 'components/footer'
export default function App({ Component, pageProps }) {
  const router=useRouter()
 
  let isok=false
if(router.pathname==="/"){
 isok=true
}
  return (
  <Provider> 
    <div className='body'>
   {isok&&<Navbar/>}
     <Component {...pageProps} />
     <Footer/></div>
     </Provider>)

}
