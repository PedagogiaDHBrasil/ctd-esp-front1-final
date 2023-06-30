import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPersonagem } from './types';

interface PersonagensState {
  lista: IPersonagem[]; // Renomeie para 'lista' para refletir que isto é um array de personagens
  paginaAtual: number;
}

const initialState: PersonagensState = {
  lista: [], // Renomeie para 'lista'
  paginaAtual: 1,
};

export const personagensSlice = createSlice({
  name: 'personagens',
  initialState,
  reducers: {
    fetchPersonagensSuccess: (state, action: PayloadAction<IPersonagem[]>) => {
      state.lista = action.payload; // Renomeie para 'lista'
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.paginaAtual = action.payload;
    },
  },
});

export const { fetchPersonagensSuccess, setPage } = personagensSlice.actions;
export default personagensSlice.reducer;
