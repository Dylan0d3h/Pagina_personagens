import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const personagens = ["Mayzon", "Philip", "Uzy", "Arthemy", "Dylan"];

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(dados);
  }, []);

  function adicionarFavorito(nome) {
    if (!favoritos.includes(nome)) {
      const novos = [...favoritos, nome];
      setFavoritos(novos);
      localStorage.setItem("favoritos", JSON.stringify(novos));
    }
  }

  function removerFavorito(nome) {
    const novos = favoritos.filter((p) => p !== nome);
    setFavoritos(novos);
    localStorage.setItem("favoritos", JSON.stringify(novos));
  }

  return (
    <div className="container">
      <h1>Escolha seu personagem</h1>

      <div className="lista">
        {personagens.map((p) => (
          <div key={p} className="card">
            <Link to={`/personagem/${p}`} className="botao">
              {p}
            </Link>

            {favoritos.includes(p) ? (
              <button
                className="favorito ativo"
                onClick={() => removerFavorito(p)}
              >
                 Remover
              </button>
            ) : (
              <button
                className="favorito"
                onClick={() => adicionarFavorito(p)}
              >
                Favoritar
              </button>
            )}
          </div>
        ))}
      </div>

      <h2>Favoritos</h2>

      <div className="lista">
        {favoritos.length > 0 ? (
          favoritos.map((p) => (
            <div key={p} className="card">
              <span>{p}</span>

              <button
                className="favorito ativo"
                onClick={() => removerFavorito(p)}
              >
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum favorito ainda</p>
        )}
      </div>
    </div>
  );
}

export default Home;