import {useEffect, useState } from 'react'

const Message = () => {
  const [messages, setMessages] = useState ([])

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
        console.log("websockets connectedddd")
        ws.send(JSON.stringify({"command": "subscribe", "identifier": `{"channel": "LiveFeedChannel"}`}))
      }

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
    <div>
      <h3>Messages</h3>
      <form onSubmit={handleSubmit}>
        <input name="content" placeholder="Talk shit here..." cols="100" rows="100" />
        <button type="submit">Send 🧌 </button>
      </form>
      {
        messages.map((message) => {
          return(
            <div>
              <p>{message.message}</p>
            </div>
          )
        })
      }
    </div>
  )


}

export default Message