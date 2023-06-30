import { AppThunk } from './store';
import { fetchPersonagensSuccess, setPage } from './personagensSlice';

export const fetchPersonagens = (pagina: number): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await response.json();
    dispatch(fetchPersonagensSuccess(data.results)); // Use a action do slice
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export const setPagina = (pagina: number): AppThunk => dispatch => {
  dispatch(setPage(pagina)); // Use a action do slice
};
