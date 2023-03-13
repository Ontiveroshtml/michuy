import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './../App.css'

export default function Whatsapp() {

  return (
      <FloatingWhatsApp  
        phoneNumber="6183564435"
        accountName="Mi chuy"
        allowEsc
        allowClickAway
        notification
        notificationSound 
        statusMessage="Responde en una hora"
        chatMessage="Hola, tacos y hamburguesas mi chuy lo atiende"
        avatar="./logo.png"/>
  )
}