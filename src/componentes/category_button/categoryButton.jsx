import { FaAngleUp } from 'react-icons/fa'
import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'

export const CategoryButton = ({ categoria, children, isOpen, onClick }) => {    

    return (
        <Disclosure
            className='gap-0' as={'div'}
        >
            <Disclosure.Button
                onClick={onClick}
                className='bg-cinza text-text_color w-full flex items-center gap-2 pl-4 py-3'>
                <FaAngleUp className={clsx(
                    'text-azul text-3xl duration-300',
                    isOpen ? 'rotate-180' : null
                )} />
                {categoria}
            </Disclosure.Button>
            <Transition
                show={isOpen}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Disclosure.Panel static className='flex flex-col'>
                    {children}
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    )
}