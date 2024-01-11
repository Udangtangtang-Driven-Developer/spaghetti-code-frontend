import { handlers } from "@udtt/mocks/handlers";
import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") {
    (async () => {
      const server = setupServer(...handlers);

      server.listen();
    })();
  } else {
    (async () => {
      const worker = setupWorker(...handlers);

      // const { worker } = await import("../mocks/browser");
      worker.start();
    })();
  }

  return <Component {...pageProps} />;
}
