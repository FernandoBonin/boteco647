import './App.css'
import logo from './assets/img/logo.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CategoryButton } from './componentes/category_button/categoryButton'
import { CardItem } from './componentes/card_item/card'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { cardapio, secoes } from './datas/data'


function App() {

  const [section, setSection] = useState('Promoção')

  const cardapioFiltrado = section == 'Menu completo' ? cardapio : cardapio.filter((comida) => {    
    return comida.secoes.includes(section) 
  })

  const cardapioPorCartegoria = cardapioFiltrado.reduce((acc, current) => {
    current.categoria.forEach((categoria) => {
      if (!secoes[section].includes(categoria)) {
        return acc
      }      
      if (!acc[categoria]) {
        acc[categoria] = []
      }
      acc[categoria].push(current)
    })
    return acc
  }, {})

  return (
    <div className='bg-[#131415] w-full min-h-screen'>
      <div className='w-full flex justify-center mb-10'>
        <img src={logo} alt='Logo do Boteco 647' />
      </div>
      <div className='container'>
        <div className='grid grid-cols-[repeat(10,_1fr)] scroll1 scroll2 scroll3 md:gap-5 gap-2 pb-8 mb-12 w-full border-b border-cinza overflow-x-auto'>
          {
            Object.keys(secoes).map((secao) => {
              return (
                <button
                  onClick={() => setSection(secao)}
                  key={secao}
                  className={clsx(
                    section === secao ? 'border-2 border-vermelho' : null,
                    'flex items-center justify-center text-text_color w-[100px] h-10 bg-cinza rounded text-xs px-2 uppercase',
                  )}
                >
                  {secao}
                </button>
              )
            })
          }
        </div>

        <Render cardapio={cardapioPorCartegoria} section={section}/>

        <footer className='flex flex-col items-center py-20'>
          <div className='flex gap-5 text-vermelho text-xl'>
            <a href='https://www.facebook.com/boteco647' target="_blank">
              <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/boteco647' target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className='text-white font-bold mt-10'>
            <p>Av. Guilherme Giorgi, 261 - Vila Carrão</p>
            <a className='flex justify-center gap-1 items-center mt-1' href='https://wa.me/5511975931647' target="_blank">
              <FaWhatsapp />
              <p>: 9 7593-1647</p>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

const Render = ({ cardapio, section }) => {

  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setSelectedCategory('Promoção')
    },300)
  },[])
  
  return (
    <div className='flex flex-col gap-4'>
      {
        Object.keys(cardapio).map((categoryName) => {
          return (
            <CategoryButton
              key={categoryName}
              categoria={categoryName}
              isOpen={categoryName == selectedCategory}
              onClick={()=>{setSelectedCategory(categoryName == selectedCategory ? '' : categoryName)}}
            >
              {
                cardapio[categoryName].map((item) => {                  
                  if (section != 'Promoção') item.promocao = null
                  return <CardItem key={item.nome} item={item} section={section}/>
                })
              }
            </CategoryButton>
          )
        })
      }
    </div>
  )
}