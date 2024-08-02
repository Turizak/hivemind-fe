import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {SessionProvider} from "./context/SessionProvider.tsx"
import { ErrorProvider } from "./context/ErrorContext.tsx";
import { RenderProvider } from "./context/RenderProvider.tsx";
import validateToken from "./utils/validateToken.ts";
import getExpiry from "./utils/getExpiry.ts";
import getCurrentTime from "./utils/getCurrentTime.ts";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();
const expiry = getExpiry();
const currentTime = getCurrentTime();
const delay = ( expiry - currentTime) * 1000

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RenderProvider onTrigger={validateToken} delay={delay}>
    <SessionProvider>
    <ErrorProvider>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
    </ErrorProvider>
    </SessionProvider>
    </RenderProvider>
  </React.StrictMode>,
);
