import { createContext } from 'react';

interface ThemeContextType {
    theme: string;
    text: string;
}

const ThemeContext = createContext<ThemeContextType>({theme: 'light', text: 'black'});

export default ThemeContext;
