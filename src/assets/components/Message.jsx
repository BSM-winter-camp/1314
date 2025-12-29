import React from "react";
import styles from "./Message.module.css";

export default function Message({id, text, setMessage, setSelectedId, setShowModal}) {

    const handleDeleteClick = () => {
        setSelectedId(id);
        setShowModal(true);
    }



    return (
        <div className={styles.container}>
            {text}
            <button onClick={handleDeleteClick}> 삭제 </button>
        </div>
    )
}