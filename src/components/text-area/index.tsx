import './style.css'

export default function Text(){
    return(
        <main className="main">
            <section className='top-section'>
                <button className='btn'>salvar</button>
            </section>
            <textarea name="content" className="text-area" cols={30} rows={25}></textarea>
        </main>
    )
}