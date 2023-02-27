import './App.css';
import { CardItem } from './componentes/card_item/card';
import logo from './assets/img/logo.png'

const cardapio = [
  {
    nome: 'batata frita',
    valor: 222.90,
    descricao: 'uma descrição qualquer',
    img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg'
  },
  {
    nome: 'torresmo',
    valor: 15.50,
    promocao: 11.90,
    img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg'
  },
  {
    nome: 'coca-cola',
    valor: 6,
    img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg'
  }
]

const map_comida = ['batata frita', 'torresmo']

const secoes = ['Promoção', 'Menu completo', 'Bebidas', 'BBQ', 'Comidas de boteco', 'Lanches', 'Vinhos', 'Feijoada', 'Sobremesas']


const cardapioFiltrado = cardapio.filter((comida) => {
  return map_comida.includes(comida.nome)
})


function App() {
  return (
    <div className='bg-[#131415] w-full min-h-screen'>
      <div className='w-full flex justify-center mb-10'>
        <img src={logo} />
      </div>
      <div className='container'>
        <div className='grid grid-cols-[repeat(10,_1fr)] scroll1 scroll2 scroll3 md:gap-5 gap-2 pb-8 mb-12 w-full border-b border-cinza overflow-x-auto'>
          {
            secoes.map((secao)=>{              
              return <button className='flex items-center justify-center text-text_color w-[100px] h-10 bg-cinza rounded text-xs px-2 uppercase'>{secao}</button>
            })
          }           
        </div>
        <div>
          {
            cardapioFiltrado.map((item) => {
              return (
                <CardItem key={item.nome} item={item} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;