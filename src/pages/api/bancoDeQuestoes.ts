import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(200, "Baixo possui quantas cordas?", [
    RespostaModel.errada("5"),
    RespostaModel.errada("6"),
    RespostaModel.errada("7"),
    RespostaModel.certa("4"),
  ]),
  new QuestaoModel(201, "Qual foi a primeira animação em 3D", [
    RespostaModel.errada("Procurando o Nemo"),
    RespostaModel.errada("Sherek"),
    RespostaModel.errada("Os incríveis"),
    RespostaModel.certa("Toy Story"),
  ]),
  new QuestaoModel(202, "De qual banda é a música No surprise?", [
    RespostaModel.errada("Red Hot Chili peppers"),
    RespostaModel.errada("Pink Floyd"),
    RespostaModel.errada("Green Day"),
    RespostaModel.certa("Radiohead"),
  ]),
  new QuestaoModel(
    203,
    "Qual a linguagem de programação original do jogo Tetris?",
    [
      RespostaModel.errada("C"),
      RespostaModel.errada("Assembly"),
      RespostaModel.errada("Java"),
      RespostaModel.certa("PASCAL"),
    ]
  ),
  new QuestaoModel(204, "Qual aparelho mede pressão?", [
    RespostaModel.errada("Termômetro"),
    RespostaModel.errada("Estetoscópio"),
    RespostaModel.errada("otoscópio"),
    RespostaModel.certa("Esfigmomanômetro"),
  ]),
];
export default questoes;
