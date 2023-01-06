import {useEffect, useState } from 'react'
import SendMessage from './SendMessage'

const Message = ({players, currentPlayer}) => {
  const [messages, setMessages] = useState ([])
  // const thisPlayer = {
  //   id: currentPlayer.id,
  //   name: currentPlayer.name,
  //   number: currentPlayer.number
  // }

  // const playerName = currentPlayer.name


  useEffect (() => {
    let ws;
    const getMessages = async () => {
      let req = await fetch("http://localhost:3000/messages")
      let res = await req.json()
      setMessages(res)
    }
    
    const connect = async () => {
      
      ws = new WebSocket("ws://localhost:3000/cable")
      
      ws.onopen = () => {
        //when websocket opens, connect to the Live Feed channel
        console.log("websockets connectedddd")
        ws.send(JSON.stringify({"command": "subscribe", "identifier": `{"channel": "LiveMessageChannel"}`}))
      }

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (data.type === "ping" || data.type === "welcome" || data.type === "confirm_subscription") return;
        console.log ('data', data)
        let newMessage = data.message.post
        setMessages((prevState) => {
          return [...prevState, newMessage]
        })
      }
    }
    getMessages()
    connect ()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const playerName = currentPlayer.name
    let req = await fetch ("http://localhost:3000/messages", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        message: e.target.content.value,
        player_id: currentPlayer?.id,
        name: playerName
      })
    })
    let res = await req.json()
    if (req.ok) {
      // console.log('response is', res)
    } else {
      alert('Somting weent veerty wong')
    }
  }

  return(
    <div className = "message-box">
      <div className="top-msg-box">
        <h3>Messages</h3>
      </div>
      <div className="chats">
        {
          messages.map((message) => {
            return(
              <div >
                <p className = "messages">{message.name}: {message.message}</p>
              </div>
            )
          })
        }
      </div>
      <div className="messege-sender" >
      <form  onSubmit={handleSubmit}>
        <input className="input" name="content" placeholder="Talk shit here..." cols="100" rows="100" />
        <button className="send-btn" type="submit">Send 🧌 </button>
      </form>
      </div>
    </div>
  )


}

export default Message