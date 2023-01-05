import {useEffect, useState } from 'react'

const Message = () => {
  const [messages, setMessages] = useState ([])
  const [player, setPlayer] = useState([])

  useEffect (() => {
    const getPlayers = async () => {
      let req = await fetch("http://localhost:3000/players")
      let res = await req.json()
      console.log(res)
      setPlayer(res)
    }
    getPlayers()
    
  },[])

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
      // Now we write a function every time you run ActionCable.server.broadcast in your Controller
      // Ideally
      // an if statement that handles if the event is a post being created
      // if 
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (data.type === "ping" || data.type === "welcome" || data.type === "confirm_subscription") return;
        console.log ('data', data)
        let newMessage = data.message.post
          setMessages((prevState) => {
            return [newMessage, ...prevState]
          })
      }
    }
    
    getMessages()
    connect ()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch ("http://localhost:3000/messages", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: e.target.content.value})
    })
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
                <p className = "messages">{message.message}</p>
              </div>
            )
          })
        }
      </div>
      <div className="messege-sender" >
      <form  onSubmit={handleSubmit}>
        <input name="content" placeholder="Talk shit here..." cols="100" rows="100" />
        <button type="submit">Send 🧌 </button>
      </form>
      </div>
    </div>
  )


}

export default Message