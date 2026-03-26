import { Link } from "react-router-dom";

function Home() {
  const personagens = [
    "Mayzon",
    "Philip",
    "Uzy",
    "Arthemy",
    "Dylan"
  ];

  return (
    <div className="container">
      <h1>Escolha seu personagem</h1>

      <div className="lista">
        {personagens.map((p) => (
          <Link key={p} to={`/personagem/${p}`} className="botao">
            {p.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;