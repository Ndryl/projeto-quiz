import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = +req.query.id;
  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );
  if (unicaQuestaoOuNada.length === 1) {
    const questoesSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questoesSelecionada.converteparaObjeto());
  } else {
    res.status(204).send("No Content");
  }
};
