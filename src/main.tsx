import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {SessionProvider} from "./context/SessionProvider.tsx"
import { ErrorProvider } from "./context/ErrorContext.tsx";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionProvider>
    <ErrorProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </ErrorProvider>
    </SessionProvider>
  </React.StrictMode>,
);
