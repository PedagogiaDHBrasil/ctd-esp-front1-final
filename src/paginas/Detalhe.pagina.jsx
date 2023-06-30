import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPersonagemDetalhe, fetchEpisodiosPorPersonagem } from '../redux/detalheSlice';
import { adicionarFavorito, removerFavorito } from '../redux/favoritosSlice';
import BotaoFavorito from '../componentes/botoes/botao-favorito.componente';
import CardEpisodio from '../componentes/episodios/card-episodio.componente';
import './Detalhe.css';

const PaginaDetalhe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { personagemDetalhe, episodios, status, error } = useSelector(state => state.detalhe);
  const favoritos = useSelector(state => state.favoritos);
  const isFavorito = favoritos.some(fav => fav.id === personagemDetalhe?.id);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPersonagemDetalhe(id));
    }
  }, [status, dispatch, id]);

  useEffect(() => {
    if (personagemDetalhe && personagemDetalhe.episode) {
      dispatch(fetchEpisodiosPorPersonagem(personagemDetalhe.episode));
    }
  }, [dispatch, personagemDetalhe]);

  const toggleFavorito = () => {
    if (isFavorito) {
      dispatch(removerFavorito(personagemDetalhe.id));
    } else {
      dispatch(adicionarFavorito(personagemDetalhe));
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h3>{personagemDetalhe.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={personagemDetalhe.image}
            alt={personagemDetalhe.name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{personagemDetalhe.name}</p>
            <p>Planeta: {personagemDetalhe.origin.name}</p>
            <p>Genero: {personagemDetalhe.gender}</p>
          </div>
          <BotaoFavorito isFavorito={isFavorito} toggleFavorito={toggleFavorito} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        {episodios.map(episodio => <CardEpisodio key={episodio.id} episodio={episodio} />)}
      </div>
    </div>
  );
};

export default PaginaDetalhe;
