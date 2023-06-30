// favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';  
import { AppThunk } from './store';
import { IPersonagem } from './types';

export const carregarFavoritos = (): AppThunk => async (dispatch) => {
  const favoritosArmazenados = JSON.parse(localStorage.getItem('favoritos') || "[]") as IPersonagem[];
  if (favoritosArmazenados) {
    favoritosArmazenados.forEach(personagem => {
      dispatch(adicionarFavorito(personagem));
    });
  }
};

export const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as IPersonagem[],
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<IPersonagem>) => {
      if (!state.some(fav => fav.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem('favoritos', JSON.stringify(state));
      }
    },
    removerFavorito: (state, action: PayloadAction<IPersonagem>) => {
      const index = state.findIndex(fav => fav.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(state));
      }
    },
    limparFavoritos: (state) => {
      state.length = 0;
      localStorage.removeItem('favoritos');
    },
  },
});

export const { adicionarFavorito, removerFavorito, limparFavoritos } = favoritosSlice.actions;
export default favoritosSlice.reducer;