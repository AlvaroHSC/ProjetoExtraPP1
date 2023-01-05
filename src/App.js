import React from "react";
import Rotas from "./Route/Route";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}
