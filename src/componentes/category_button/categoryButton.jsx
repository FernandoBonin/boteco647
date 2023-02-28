import { FaRegWindowClose } from 'react-icons/fa'

export const CategoryButton = ({ categoria, children }) => {
    return (
        <div>
            <button className='bg-cinza text-text_color w-full flex items-center gap-2 pl-4 py-3'>
                <FaRegWindowClose />
                {categoria}
            </button>
            <div className='flex flex-col'>
                {children}
            </div>
        </div>
    )
}