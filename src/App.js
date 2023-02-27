import './App.css';

const cardapio = [
  {
    nome: 'batata frita',
    valor: 22
  },
  {
    nome: 'torresmo',
    valor: 15
  },
  {
    nome: 'coca-cola',
    valor: 6
  }
]

const map_comida = ['batata frita', 'torresmo']

const comidaPrint = []

cardapio.filter((comida) => {
  map_comida.map((mapComida) => {
    if (comida.nome == mapComida) {
      return (
        comidaPrint.push(
        <div className='flex flex-col gap-4 py-7 ml-7 text-white'>
          <p>{comida.nome}</p>
          <p>{comida.valor}</p>
        </div>
        )
      )
    }
  })          
})   


function App() {
  return (
    <div className='bg-indigo-900 w-full h-screen'>
      {        
        comidaPrint    
      }      
    </div>
  );
}

export default App;
