import { createContext } from 'react';

export type ClickContextType = {
	state: boolean;
	onClick: () => void;
};

export const ClickContext = createContext<ClickContextType | null>(null);
