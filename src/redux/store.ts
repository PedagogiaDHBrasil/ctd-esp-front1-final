// src/redux/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritosReducer from './favoritosSlice';
import detalheReducer from './detalheSlice';
import personagensReducer from './personagensSlice'; // Importe o novo reducer

const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    detalhe: detalheReducer,
    personagens: personagensReducer, // Adicione o novo reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
