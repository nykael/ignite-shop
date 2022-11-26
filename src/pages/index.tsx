import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import Camiseta1 from '../assets/1.png'
import Camiseta2 from '../assets/2.png'
import Camiseta3 from '../assets/3.png'


export default function Home() {
  return (
      <HomeContainer>
        <Product>
          <Image src={Camiseta1} alt="" width={520} height={480} />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product>
          <Image src={Camiseta2} alt="" width={520} height={480} />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
  )
}


// file-system Routing
//Roteamento baseando em arquivos fisicos