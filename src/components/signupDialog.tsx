import  * as Dialog from '@radix-ui/react-dialog';


export default function SignupDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>cadastrar</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='w-screen h-screen bg-black/70 fixed inset-0' />
                <Dialog.Content className='fixed w-full max-w-sm rounded-md bg-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-12'>
                    <div className='w-full h-full text-lg flex flex-col items-center justify-center'>
                        <h1 className='text-3xl'>SIGNUP</h1>
                        <form action="" className='flex flex-col'>
                            <label htmlFor="">username: </label>
                            <input type="text" placeholder='escreva seu username...' className='border pl-2 border-gray-700 rounded-md' />
                            <label htmlFor="">email: </label>
                            <input type="text" placeholder='escreva seu email...' className='border pl-2 border-gray-700 rounded-md' />
                            <label htmlFor="">senha: </label>
                            <input type="password" placeholder='escreva sua senha...' className='border pl-2 border-gray-700 rounded-md' />
                            <button className='bg-main-blue text-white my-3 p-1 rounded-md hover:bg-main-blue-lighter'>SUBMIT</button>
                        </form>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}