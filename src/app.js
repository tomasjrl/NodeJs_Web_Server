//const { envs } = require("./config/env"); forma antigua
//const { startServer } = require("./server/server"); forma antigua

import { envs } from "./config/env.js"
import { startServer } from "./server/server.js"

const main = () => {
  startServer({
    port: envs.PORT,
    public_PATH: envs.PUBLIC_PATH,
  });
};

// función agnóstica auto-convocada asíncrona
// no tiene nombre, se ejecuta con el ultimo ()
(async () => {
  main();
})();
