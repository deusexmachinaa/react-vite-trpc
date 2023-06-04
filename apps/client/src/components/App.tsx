import { Providers } from "./common";
import { Test } from "./test";
import { Home } from "./user";

export const App = () => (
  <Providers>
    <Home />
    <Test />
  </Providers>
);
