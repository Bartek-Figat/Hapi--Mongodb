const Hapi = require("@hapi/hapi");
const { getAllUsers, createUser } = require("./routes/index.router");
const { config } = require("./config/config");

const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
  });

  getAllUsers(server);
  createUser(server);
  await server.start();
  console.log(`Server running on: ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
