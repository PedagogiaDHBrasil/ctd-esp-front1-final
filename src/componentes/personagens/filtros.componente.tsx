import React, { FC, ChangeEvent } from 'react';
import './filtros.css';

interface FiltrosProps {
  filtroAtual: string;
  onFilterChange: (newValue: string) => void;
  onFilterClear: () => void;
}

const Filtros: FC<FiltrosProps> = ({ filtroAtual, onFilterChange, onFilterClear }) => {
  return (
    <div className="filtros">
      <div className="filtro-container">
        <label htmlFor="nome">Filtrar por nome:</label>
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nome"
          value={filtroAtual}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onFilterChange(event.target.value)}
        />
        <button className="danger" onClick={onFilterClear}>Limpar filtros</button>
      </div>
    </div>
  );
};

export default Filtros;
