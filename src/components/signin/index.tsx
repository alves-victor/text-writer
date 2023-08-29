import './style.css';

export default function Signin(){
    return(
        <main className='main'>
            <p className='text'>Entre com sua conta!</p>
            <div className='inputSection'>
                <label htmlFor="text">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </div>
            <button className='btn'>Login</button>
        </main>
    )
}