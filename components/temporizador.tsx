import { CountdownCircleTimer } from "react-countdown-circle-timer";
import style from "../src/styles/Temporizador.module.css";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotador: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={style.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={80}
        isPlaying
        onComplete={props.tempoEsgotador}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
