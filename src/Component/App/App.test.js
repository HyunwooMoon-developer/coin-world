import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CoinContextProvider } from "../../Context/CoinContext";
import App from "./App";

describe(`App component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
