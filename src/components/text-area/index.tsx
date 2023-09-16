'use client'
import { useState } from 'react'
import './style.css'

declare global{
    interface Window{
        showOpenFilePicker(argument: any): any;
        showSaveFilePicker(arument: any): any;
    }
}

export default function Text(){
    const [text, saveText] = useState("");
    let fileHandle: any;
    const [fileName, saveFileName] = useState("");

    function handleChange(event: any){
        saveText(event.target.value);
    }

    let options = {
        suggestedName: fileName,
        types: [{
            description: 'Apenas arquivos txt',
            accept: {
                'text/*': ['.txt']
            }
        }],
        multiple: false
    }

    async function chooseFile(){
        try{
            [fileHandle] = await window.showOpenFilePicker(options);
        }catch{ return }       
        let fileData = await fileHandle.getFile();
        saveFileName(fileData.name);
        let textareaContent = await fileData.text();
        saveText(textareaContent);
    }

    async function saveFile(){
        let stream = await fileHandle.createWritable();
        await stream.write(text);
        await stream.close();
        alert("Arquivo Salvo!");
        fileHandle = "";
        saveText("");
    }   

    async function handleSave(){
        try{
            fileHandle = await window.showSaveFilePicker(options);
        }catch{ return }
        saveFile();
        saveFileName("");
    }

    return(
        <main className="main">
            <section className='top-section'>
                <button className='btn' onClick={chooseFile}>Editar arquivo existente</button>
            </section>
            <textarea onChange={handleChange} value={text} cols={30} rows={22} className="text-area" ></textarea>
            <section className='bottom-section'>
                <button className='btn' onClick={handleSave}>Salvar</button>
            </section>
        </main>
    )
}