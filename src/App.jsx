import styles from "./App.module.css";
import {useState} from "react";
import MessagePrintOut from "./assets/MessagePrintOut.jsx";
import Message from "./assets/components/Message.jsx";
import Modal from "./assets/Modal.jsx";


function App() {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [messages, setMessages] = useState([
        {
            id : 1,
            text : "Hello World",
            createdAt: new Date()},
        {
            id : 2,
            text : "Hello World",
            createdAt: new Date()
        },
    ]);

  return (
    <main className={styles.container}>
        <section className={styles.chatingSection}>
            <div className={styles.messageSection}>
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        id={message.id}
                        text={message.text}
                        setSelectedId={setSelectedId}
                        setShowModal={setShowModal}
                    />
                ))}
            </div>
        </section>
        <MessagePrintOut setMessage={setMessages} />

        {showModal && <Modal selectedId={selectedId} setSelectedId={setSelectedId} setMessages={setMessages} setShowModal={setShowModal} />}
    </main>
  )
}

export default App
