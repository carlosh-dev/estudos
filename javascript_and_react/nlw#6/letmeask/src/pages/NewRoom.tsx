import illustrationImg from "../assets/images/illustration.svg";
import logoIgm from "../assets/images/logo.svg";

import "../styles/auth.scss"
import { Button } from "../components/Button";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

export function NewRoom(){

  const [ newRoom, setNewRoom ] = useState(''); 
  const history = useHistory();
  const { user } = useAuth();

  async function handleCreateRoom(event:FormEvent){
    event.preventDefault();

    if(newRoom.trim() == ''){
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/room/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"></img>
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire a dúvida da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoIgm} alt="Letmeask"/>
          <h2>Criar uma nova sala</h2>
          
          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Nome da sala" onChange={event => setNewRoom(event.target.value)}/>
            <Button type="submit" >Criar sala</Button>
          </form>

          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}