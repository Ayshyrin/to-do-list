import React from 'react';
import '/src/App.css';
import { useState } from 'react';

export const App = ()=> {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const onKeyUp = (i)=> {
        setInput(i.target.value)
    };
    const Click = ()=> {
        setItems([... items, input])
        setInput('')
    };
    const Enter = (i)=> {
        if(i.keyCode == 13){
            Click()
        };
    };
    return (
        <>
            <h1>TO DO LIST</h1>
            <input type="text" value={input} onChange={onKeyUp} onKeyUp={Enter}/>
            <button onClick={Click}>add</button>
            <ul>
                {
                    items.map((i,index)=>{
                        return(
                            <li key={index}>
                                {i}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};