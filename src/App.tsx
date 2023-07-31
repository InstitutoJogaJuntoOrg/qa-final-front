import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes/Router";
import { ProductsProvider } from "./context/products";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsProvider>
    </ThemeProvider>
  );
}
