import "./style.css"
import Link from "next/link"

export default function Signup(){
    return(
        <main className='main'>
            <p className='text'>Crie sua conta!</p>
            <section className='inputSection'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="checkEmail">Confirme seu email</label>
                <input type="text" name="checkEmail" id="checkEmail" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </section>
            <p className='redirect'>Já possui conta? <Link className='link' href="/login">Conecte-se agora!</Link></p>
            <button className='btn'>Cadastrar</button>
        </main>
    )
}