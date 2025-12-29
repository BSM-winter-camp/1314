import styles from './MessagePrintOut.module.css';
import {useEffect, useRef, useState} from 'react'

export default function MessagePrintOut({setMessage}) {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        if (!inputRef.current) {

            const handleEvent = (e) => {
                if (e.code === 'Enter') {
                    handleSendClick();
                }
            }

            inputRef.current.addEventListener('keydown', []);
        }
    },[])



    const handleSendClick = () => {
        setMessage(prev => {
            return [
                ...prev,
                {
                    id: prev.length + 1,
                    text: inputValue,
                    createdAt: Date.now(),
                },
            ];
        });
        setInputValue('');
    }

    return (
        <div className={styles.container}>
            <input className={styles.input}
                   ref={inputRef}
                   value={inputValue}
                   onChange={(e)=>
                       setInputValue(e.target.value)} />
            <button
                className={styles.btn}
                onClick={handleSendClick}
            >
                전송
            </button>


        </div>
    )
}