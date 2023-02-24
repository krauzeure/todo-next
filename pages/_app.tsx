import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { GlobalListProvider } from '@/context/ListContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalListProvider>
      <Component {...pageProps} />
    </GlobalListProvider>
  );
}
