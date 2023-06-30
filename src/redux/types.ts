// src/redux/types.ts

export interface IPersonagem {
    id: number;
    name: string;
    image: string;
    // adicione mais campos conforme necessário
  }
  
  export interface IFavorito {
    id: number;
    personagem: IPersonagem;
  }
  
  export interface IFavoritosState {
    favoritos: IFavorito[];
  }
  
  export enum FavoritoActionTypes {
    ADICIONAR_FAVORITO = 'ADICIONAR_FAVORITO',
    REMOVER_FAVORITO = 'REMOVER_FAVORITO',
  }
  
  interface IAdicionarFavoritoAction {
    type: FavoritoActionTypes.ADICIONAR_FAVORITO;
    payload: IPersonagem;
  }
  
  interface IRemoverFavoritoAction {
    type: FavoritoActionTypes.REMOVER_FAVORITO;
    meta: {
      id: number;
    };
  }
  
  export type FavoritoActions = IAdicionarFavoritoAction | IRemoverFavoritoAction;
  