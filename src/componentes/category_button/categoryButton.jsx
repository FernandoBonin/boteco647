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
                className='bg-cinza text-text_color w-full flex items-center gap-2 pl-4 py-3 outline-none focus:border-0'>
                <FaAngleUp className={clsx(
                    'text-azul text-3xl duration-300',
                    isOpen ? 'rotate-180' : null
                )} />
                {categoria}
            </Disclosure.Button>
            <Transition
                show={isOpen}
                enter="transition duration-300 ease-out"
                enterFrom="origin-bottom scale-y-0 opacity-0"
                enterTo="origin-top scale-y-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="origin-bottom scale-y-100 opacity-100"
                leaveTo="origin-top scale-y-0 opacity-0"
            >
                <Disclosure.Panel static className='flex flex-col'>
                    {children}
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    )
}