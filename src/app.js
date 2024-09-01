const { envs } = require("./config/env");
const { startServer } = require("./server/server");

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
