import Image from 'next/image';
import categoryImages from '../../public/categoryImages.png';
import { Karma } from 'next/font/google';

const karma = Karma({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['devanagari'],

})


export default function SecondSegment() {
    return (
        <div className={`${karma.className} font-bold w-full flex items-center flex-wrap`}>
            <Image src={categoryImages}  alt='categories' />
            <div className='flex justify-center items-center w-full md:w-2/6'>
                <h1 className='text-[#00074F] text-lg flex items-center justify-center md:text-2xl'>DISCUTA SOBRE SEUS LIVROS, FILMES E JOGOS PREFERIDOS</h1>
            </div>
        </div>
    )
}