import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import Logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
console.log(Logo) 

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
 
  return(
    <Container>
      <Header>
        <Image src={Logo}  alt=""/>
      </Header>
      
      <Component {...pageProps} />
     </Container>
    )
}
