export const CardItem = ({ item }) => {

    const {img, nome, descricao, valor, promocao} = item
    const valorFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
    const valorPromocaoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(promocao)

    return (
        <div className='flex gap-5 py-5 px-4 text-text_color border-b border-vermelho bg-cinza'>
            <div>
                <img
                    src={img}
                    className='h-40 w-auto rounded-tr-[35px] rounded-bl-[35px]'
                />
            </div>
            <div className='flex flex-col'>
                <p className='text-lg'>{nome}</p>
                {descricao && <p className='text-sm'>{descricao}</p>}
                {
                    promocao &&
                    <div className='flex gap-3 mt-2 text-vermelho'>
                        <span className='text-xs self-start'>R$</span>
                        <span className='text-2xl line-through'>{valorFormatado}</span>
                    </div>
                }
                <div className='flex gap-3 mt-2'>
                    <span className='text-xs self-start'>R$</span>
                    <span className='text-4xl'>{promocao ? valorPromocaoFormatado : valorFormatado}</span>
                </div>
            </div>
        </div>
    )
}