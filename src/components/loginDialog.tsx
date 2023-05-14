import  * as Dialog from '@radix-ui/react-dialog';
import { Karma } from 'next/font/google';

const karma = Karma({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['devanagari'],

})


export default function LoginDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>login</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='w-screen h-screen bg-black/70 fixed inset-0' />
                <Dialog.Content className='fixed w-full max-w-sm rounded-b-md rounded-t-xl bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className={`${karma.className} w-full h-full text-lg flex flex-col items-center justify-center`}>
                        <div className='w-full bg-main-blue text-white rounded-t-md'>
                            <h1 className='text-3xl px-9 py-3'>LOGIN</h1>
                        </div>
                        <form action="" className='flex flex-col py-10'>
                            <label htmlFor="">email: </label>
                            <input type="text" placeholder='escreva seu email...' className='border pl-2 border-gray-500 rounded-md shadow-gray-400 shadow-inner' />
                            <label htmlFor="">senha: </label>
                            <input type="password" placeholder='escreva sua senha...' className='border pl-2 border-gray-500 rounded-md shadow-gray-400 shadow-inner' />
                            <button className='bg-main-blue text-white my-3 p-1 rounded-md hover:bg-main-blue-lighter'>Login</button>
                        </form>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}