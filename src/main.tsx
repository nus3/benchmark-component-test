import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { bootstrap } from "safetest/react";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(document.getElementById("root")!);

bootstrap({
  element: (
    <StrictMode>
      <App />
    </StrictMode>
  ),
  importGlob: import.meta.glob("./**/*.safetest.{j,t}s{,x}"),
  render: (element) => root.render(element),
});
