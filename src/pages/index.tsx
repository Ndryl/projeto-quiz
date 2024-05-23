import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../../model/questao";
import Questionario from "../../components/Questionario";
import { useRouter } from "next/router";

const BASE_URL = "https://projeto-quiz-six.vercel.app/api"; //alteração de HTTP

export default function Home() {
  const router = useRouter();
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    console.log(idsDasQuestoes);
    setIdsDasQuestoes(idsDasQuestoes);
  }
  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }
  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
    console.log(respostasCertas + (acertou ? 1 : 0));
  }
  function idProximaPergunta() {
    if (questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximoIndice];
    }
  }
  function irPraProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irProximaQuestao(proximoId) : finalizar();
  }
  function irProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }
  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  }

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
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
