
import styles from "./Modal.module.css";

export default function Modal({ selectedId, setSelectedId, setMessages, setShowModal }) {

    const handleDelete = () => {
        setMessages((prev) => {
            return prev.filter((message) => message.id !== selectedId);
        });
        setSelectedId(null);
        setShowModal(false);
    }



    return (
        <section className={styles.container}>
            <span className={styles.title}> 정말 삭제하시겠습니까? </span>
            <div className={styles.btndiv}>
                <button onClick={handleDelete}>yes</button>
                <button onClick={()=> setShowModal(false)}>no</button>
            </div>
        </section>
    )

}