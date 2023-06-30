import React, { FC } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IBotaoFavoritoProps {
  isFavorito: boolean;
  toggleFavorito: () => void;
}

const BotaoFavorito: FC<IBotaoFavoritoProps> = ({ isFavorito, toggleFavorito }) => {
  return (
    <div className="botao-favorito" onClick={toggleFavorito}>
      {isFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </div>
  );
};

export default BotaoFavorito;
