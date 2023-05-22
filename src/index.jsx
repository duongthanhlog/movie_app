import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import router from "./router/router";
import store from "./store/store";
import { ThemeProvider } from "react-bootstrap";
import ContextProvider from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GlobalStyles>
      <ThemeProvider breakpoints={["xl", "md", "sm", "xs"]}>
        <ContextProvider>
          <RouterProvider router={router}/>
        </ContextProvider>
      </ThemeProvider>
    </GlobalStyles>
  </Provider>
);
