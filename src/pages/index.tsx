import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";
import Questionario from "../../components/Questionario";

const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.errada("Preto"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.certa("Azul"),
]);
const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [questao, setQuestao] = useState<QuestaoModel>(questaoTeste);
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    console.log(idsDasQuestoes);
    setIdsDasQuestoes(idsDasQuestoes);
  }
  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    console.log(json.respostas);
  }
  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questao: QuestaoModel) {}
  function irPraProximoPasso() {}

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
