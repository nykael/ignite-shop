import { styled } from "../styles"

const Button = styled('button', {
    backgroundColor: '$rocket',
    borderRadius: 4,
    padding: '4px 8px',

    span: {
      fontWeight: 'bold',
    },

    '&:hover' : {
      filter: 'brightness(0.8)'
    }
})


export default function Home() {
  return (
    <div>
      <Button>
        <span>Teste</span>
        Enviar
      </Button>
    </div>
  )
}


// file-system Routing
//Roteamento baseando em arquivos fisicos