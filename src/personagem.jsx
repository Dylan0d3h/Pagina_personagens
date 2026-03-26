import { useParams, Link } from "react-router-dom";

import mayzonImg from "./assets/Mayzon.png";
import philipImg from "./assets/Philip.png";
import uzyImg from "./assets/remaster_uzy_g_normal.png";
import arthemyImg from "./assets/Arthemy.png";
import dylanImg from "./assets/dylan andarilho.png";

function Personagem() {
  const { nome } = useParams();

  const personagens = {
    Mayzon: {
      descricao:
        "Mayzon é um guerreiro demihumano que faz parte de uma rebelião contra um ditador tirano.",
      imagem: mayzonImg
    },
    Philip: {
      descricao:
        "Philip é um adolescente humano de 16 anos que possui o poder de controlar plantas.",
      imagem: philipImg
    },
    Uzy: {
      descricao:
        "Uzy é uma robô de serviço que fugiu de sua programação para buscar vingança.",
      imagem: uzyImg
    },
    Arthemy: {
      descricao:
        "Arthemy é um jovem médico alquimista de 24 anos.",
      imagem: arthemyImg
    },
    Dylan: {
      descricao:
        "Dylan é um mago poderoso que fundou uma rebelião contra um império ditatorial.",
      imagem: dylanImg
    }
  };

  const personagem = personagens[nome];

  return (
    <div className="container">
      {personagem ? (
        <>
          <h1>{nome}</h1>

          <img
            src={personagem.imagem}
            alt={nome}
            className="imagem-personagem"
          />

          <p>{personagem.descricao}</p>
        </>
      ) : (
        <p>Personagem desconhecido</p>
      )}

      <Link to="/" className="botao voltar">
        Voltar
      </Link>
    </div>
  );
}

export default Personagem;