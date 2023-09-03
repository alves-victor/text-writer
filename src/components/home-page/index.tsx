import './style.css';
import Image from 'next/image';
import img from '../../../public/images/stack-of-books.png';
import Link from 'next/link';

export default function HomePage(){
    return(
        <main className="main">
            <section className='topSection'>
                <Image
                    className='img'
                    src={img}
                    alt='pilha de livros'
                    height={150}
                    width={170}
                />
                <h1 className='title'>Book Writer</h1>
            </section>
            <section className='description'>
                <p className='text'>Este é um pequeno app feito para <br/>
                    desenvolver e armazenar histórias.
                </p>
                <Link className='btn beginBtn' href="/content">Comece a escrever!</Link>
            </section>
        </main>
    )
}