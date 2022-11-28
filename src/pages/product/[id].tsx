import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import {useRouter } from 'next/router'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'


interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({product} : ProductProps) {
    const {isFallback} = useRouter()

    function handleBuyProduct() {
        console.log(product.defaultPriceId)
    }    



    if (isFallback) {
        return <p>Loading</p>
    }

    return(
        <ProductContainer>
            <ImageContainer>
               <Image  src={product.imageUrl} alt="" width={520} height={480}/>
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button onClick={handleBuyProduct}>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: 'prod_MsICijreFiPEeM'},},
            {params: {id: 'prod_MsICNYehvGvoPr'},},
            {params: {id: 'prod_MsIBNlQiLJz6iO'},},
            {params: {id: 'prod_MsI8jZewb5gBjj'},},
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, {id: string }> = async ({params}) => {
    const productId = params!.id;
    
    const product = await  stripe.products.retrieve(productId , {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price

    return{
       props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      }
       },
       revalidate: 60 * 60 * 1, // 1hour 
    }
}