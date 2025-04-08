import { Dispatch, createContext } from "react";
import { ArticleStateType } from "src/constants/articleProps";

type ArticleActionType = { type: 'setArticleState'; payload: ArticleStateType };

export type ArticleStateContextType = {
	articleState: ArticleStateType;
	dispatchArticleState: Dispatch<ArticleActionType>;
};

export const ArticleStateContext = createContext<ArticleStateContextType | null>(null);