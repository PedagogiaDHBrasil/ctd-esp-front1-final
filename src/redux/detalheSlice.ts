import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Ação para buscar detalhes do personagem
export const fetchPersonagemDetalhe = createAsyncThunk(
  'detalhe/fetchPersonagemDetalhe',
  async (idPersonagem) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`);
    return response.json();
  }
);

// Ação para buscar episódios do personagem
export const fetchEpisodiosPorPersonagem = createAsyncThunk(
  'detalhe/fetchEpisodiosPorPersonagem',
  async (urlsEpisodios) => {
    const promises = urlsEpisodios.map(url => fetch(url).then(res => res.json()));
    const episodios = await Promise.all(promises);
    return episodios;
  }
);

export const detalheSlice = createSlice({
  name: 'detalhe',
  initialState: { personagemDetalhe: null, episodios: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPersonagemDetalhe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPersonagemDetalhe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.personagemDetalhe = action.payload;
      })
      .addCase(fetchPersonagemDetalhe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchEpisodiosPorPersonagem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodiosPorPersonagem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.episodios = action.payload;
      })
      .addCase(fetchEpisodiosPorPersonagem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default detalheSlice.reducer;
