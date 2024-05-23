import styles from "../src/styles/Quetao.module.css";

import QuestaoModel from "../model/questao";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./temporizador";

const letra = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoPraResposta?: number;
  respostaFornecida: (indice: number) => void;
  tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;
  function renderizarResposta() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letra[i].valor}
          corLetra={letra[i].cor}
          respostaFornecida={props.respostaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        duracao={props.tempoPraResposta ?? 10}
        tempoEsgotador={props.tempoEsgotado}
      />
      {renderizarResposta()}
    </div>
  );
}
