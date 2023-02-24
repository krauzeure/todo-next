import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { GlobalListProvider } from '@/Context/ListContext';
import { ThemeProvider } from '@/Context/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalListProvider>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </GlobalListProvider>
  );
}
