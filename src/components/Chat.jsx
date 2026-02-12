import { useState } from "react"
import { messages as mockMessages } from "../services/mockApi.js";

const Chat = () => {

  const [messages, setMessages] = useState(mockMessages)
  const [text, setText] = useState("")

  const hadleChange = (event) => {
    console.log(event.target.value)
    setText(event.target.value)
  }

const downkey = (event) => {
  if (event.key === "Enter") {
    clickSubmit()
  }}

  const clickSubmit = (event) => {

    if (text.length === 0) {
      return}
      
    console.log("Hiciste click")
    const ahora = new Date()
    const hour = ahora.getHours()
    const minutes = ahora.getMinutes()
    const newchat = {
      id: messages.length + 1,
      author: "Robin",
      text: text,
      time: `${hour}:${minutes}`

    }
    console.log(newchat)
    setMessages ( [...messages , newchat] )
    setText("")
 
 
  }
 
  return (
    <section className="chat">
      <header>
        <h2>Bruce Wayne</h2>
        <p>Ultima conexión hace 1 minuto</p>
      </header>
      <div className="chat-container">
        {
          messages.map((message) =>
            <div className={`message ${message.author === "Robin" ? "me" : "received"}`}>
              <p> <b>{message.author}: </b>
                {message.text}
              </p>
              <p className="timeStamp">{message.time}</p>

            </div>
          )
        }
      </div>
      <div className="chat-input">
        <input className= "input" onChange={hadleChange} onKeyDown={downkey} type="text" placeholder="Escribe un mensaje..." value={text}/>
        <button onClick={clickSubmit}>Enviar</button>
      </div>
    </section>
  )
}

export { Chat }