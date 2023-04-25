import { Karma } from 'next/font/google';
import { CaretCircleRight, FolderPlus } from 'phosphor-react';

const karma = Karma({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['devanagari'],

})

export default function FirstSegment() {
    return (
        <div className={`${karma.className} w-full py-44 flex items-center flex-wrap bg-first-segment bg-no-repeat bg-cover p-4`}>
            <div className="flex flex-col flex-wrap font-medium text-white w-1/2 ml-10 md:ml-44 md:gap-3">
                <h1 className='text-lg md:text-3xl'>
                    TENHA ACESSO AS MAIS DIVERSAS REVIEWS PESSOAIS DE QUALQUER OBRA E COMPARTILHE SUAS
                    OPINIÕES SOBRE AS MESMAS
                </h1>
                <div className='flex flex-wrap items-center gap-8'>
                    <button className='flex items-center gap-3 w-48 p-4 font-semibold bg-main-blue rounded-lg hover:bg-main-blue-lighter'><FolderPlus size={18} /> Nova Review</button>
                    <form action="" className='md:w-1/2 flex'>
                        <input type="text" placeholder='pesquisar obra...' className='w-full p-1 text-black rounded-md' />
                        <button className='bg-main-blue rounded-r-lg hover:bg-main-blue-lighter p-1'><CaretCircleRight size={22} /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}