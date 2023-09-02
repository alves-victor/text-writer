import './style.css'

export default function Text(){
    return(
        <main className="main">
            <textarea name="content" className="text-area" cols={30} rows={10}></textarea>
        </main>
    )
}