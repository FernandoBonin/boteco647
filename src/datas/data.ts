type SecoesType =  'Promoção'| 'Menu completo' | 'Bebida' | 'B.B.Q' | 'Comida de boteco' | 'Lanche' | 'Vinho' | 'Feijoada' | 'Sobremesa'

type CategoriaType = 'Promoção' | 'B.B.Q' | 'Entrada' | 'Comida de boteco' | 'Hambúrguer na parrilha' | 'Feijoada' | 'Linguiça artesanal recheada' | 'Lanche' | 'Mini salgado' | 'Sobremesa' | 'Vinho' | 'Refrigerante' | 'Suco natural' | 'Caipirinha' | 'Gin' | 'Drinks classicos do boteco' | 'Cerveja' | 'Cachaça (dose)' | 'Whisky (dose)' | 'Vodka (dose)' | 'Licor (dose)' | 'Whisky (garrafa)' | 'Vodka (garrafa)' | 'Licor (garrafa)' | 'Tequila (garrafa)' | 'Cachaça (garrafa)'

interface Cardapio {
  nome: string,
  valor: number,
  promocao?: number,
  descricao?: string,
  img: string,
  categoria: CategoriaType[],
  secoes: SecoesType[]
}

type Secoes = {
  [key in SecoesType]: CategoriaType[]
}

export const cardapio: Cardapio[] = [
    {
      nome: 'batata frita',
      valor: 222.90,
      descricao: 'uma descrição qualquer',
      img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg',
      categoria: ['Comida de boteco'],
      secoes: ['Comida de boteco']
    },
    {
      nome: 'torresmo',
      valor: 15.50,
      promocao: 11.90,
      img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg',
      categoria: ['Promoção', 'B.B.Q', 'Comida de boteco'],
      secoes: ['Promoção', 'B.B.Q', 'Comida de boteco']
    },
    {
      nome: 'coca-cola',
      valor: 6,
      img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg',
      categoria: ['Refrigerante'],
      secoes: ['Bebida']
    },
    {
      nome: 'Polenta',
      valor: 35.90,
      img: 'https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-whistle-spaceman-illustration-design-image_1085246.jpg',
      categoria: ['Comida de boteco'],
      secoes: ['Comida de boteco']
    }
  ]

  export const secoes: Secoes = {
    'Promoção': ['Promoção'],
    'Menu completo': ['Promoção', 'B.B.Q', 'Entrada', 'Comida de boteco', 'Hambúrguer na parrilha', 'Feijoada', 'Linguiça artesanal recheada', 'Lanche', 'Mini salgado', 'Sobremesa', 'Vinho', 'Refrigerante', 'Suco natural', 'Caipirinha', 'Gin', 'Drinks classicos do boteco', 'Cerveja', 'Cachaça (dose)', 'Whisky (dose)', 'Vodka (dose)', 'Licor (dose)', 'Whisky (garrafa)', 'Vodka (garrafa)', 'Licor (garrafa)', 'Tequila (garrafa)', 'Cachaça (garrafa)'],
    'Bebida': ['Refrigerante', 'Suco natural', 'Caipirinha', 'Gin', 'Drinks classicos do boteco', 'Cerveja', 'Cachaça (dose)', 'Whisky (dose)', 'Vodka (dose)', 'Licor (dose)', 'Whisky (garrafa)', 'Vodka (garrafa)', 'Licor (garrafa)', 'Tequila (garrafa)', 'Cachaça (garrafa)'],
    'B.B.Q': ['B.B.Q'],
    'Comida de boteco': ['Entrada', 'Comida de boteco', 'Hambúrguer na parrilha', 'Linguiça artesanal recheada', 'Mini salgado'],
    'Lanche': ['Lanche', 'Hambúrguer na parrilha'],
    'Vinho': ['Vinho'],
    'Feijoada': ['Feijoada'],
    'Sobremesa': ['Sobremesa']
  }