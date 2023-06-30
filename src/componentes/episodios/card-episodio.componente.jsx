// src/componentes/episodios/card-episodio.componente.jsx
import "./card-episodio.css";

const CardEpisodio = ({ episodio }) => {
  return (
    <div className="card-episodio">
      <h4>{episodio.nome}</h4>
      <div>
        <span>{episodio.codigo}</span>
        <span>Lançado em: {episodio.dataLancamento}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
