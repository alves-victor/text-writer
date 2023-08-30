import './style.css';
import Link from 'next/link';

export default function Signin(){
    return(
        <main className='main'>
            <p className='text'>Entre com sua conta!</p>
            <section className='inputSection'>
                <label htmlFor="text">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </section>
            <p className='redirect'>Não possui conta? <Link className='link' href="/register">Crie uma agora!</Link></p>
            <button className='btn'>Login</button>
        </main>
    )
}