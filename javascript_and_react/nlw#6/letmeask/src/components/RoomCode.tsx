import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

type roomCode = {
  code: string;
}

export function  RoomCode(props: roomCode){

  function copy(){
    navigator.clipboard.writeText(props.code)
  }

  return(
    <button className="room-code" onClick={copy}>
      <div>
        <img src={copyImg} alt="Copy room code"/>
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}