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
            <h1 className='text-[#00074F] text-lg md:text-2xl md:w-2/6'>DISCUTA SOBRE SEUS LIVROS, FILMES E JOGOS PREFERIDOS</h1>
        </div>
    )
}