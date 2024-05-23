import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(200, "Quem descobriu o Brasil?", [
    RespostaModel.errada("D. Pedro I"),
    RespostaModel.errada("nabucodonosor"),
    RespostaModel.errada("Papai Noel"),
    RespostaModel.certa("Hendryl"),
  ]),
  new QuestaoModel(201, "Quem deu origem a eletricidade", [
    RespostaModel.errada("Tales de Mileto"),
    RespostaModel.errada("Nicolas Tesla"),
    RespostaModel.errada("Ratinho"),
    RespostaModel.certa("Hendryl"),
  ]),
  new QuestaoModel(202, "Qual o singular de gatos?", [
    RespostaModel.errada("Gato"),
    RespostaModel.errada("Matilha"),
    RespostaModel.errada("Gatinho"),
    RespostaModel.certa("Hendryl"),
  ]),
  new QuestaoModel(203, "Quem é melhor?", [
    RespostaModel.errada("Messi"),
    RespostaModel.errada("CR7"),
    RespostaModel.errada("Pelé"),
    RespostaModel.certa("Hendryl"),
  ]),
];
export default questoes;
