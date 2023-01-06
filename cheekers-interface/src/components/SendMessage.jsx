import { useState, useEffect } from "react"

const SendMessage = (currentPlayer) => {
  console.log(currentPlayer)
  const playerName = currentPlayer.name
  const request = async () => {
    let req = await fetch("http://localhost:3000/messages", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: e.target.content.value,
        player_id: currentPlayer?.id,
        name: playerName
      })
    })
    let res = await req.json()
    if (req.ok) {
      console.log('response is', res)
    } else {
      alert('Somting weent veerty wong')
    }
    request()

  }

}

export default SendMessage