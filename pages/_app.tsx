import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
