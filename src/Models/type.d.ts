//redux
export interface IAnime {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rated: string;
}

export type ReduxAction = {
  type: string;
  payload: {};
};

// type ArticleAction = {
//   type: string;
//   article: IArticle;
// };

// type DispatchType = (args: ArticleAction) => ArticleAction;
