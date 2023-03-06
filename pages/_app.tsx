// 
import '@esri/calcite-components/dist/calcite/calcite.css';
import type { AppProps } from 'next/app'
import "../utils/register-web-component.ts";

  import("@esri/calcite-components/dist/loader").then(loader => {
    loader.defineCustomElements(window, {resourcesUrl: location.href})
  });

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  return <Component {...pageProps} />

}
