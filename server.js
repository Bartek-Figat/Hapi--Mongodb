const Hapi = require("@hapi/hapi");
const logger = require("morgan");
const laabr = require("laabr");
const { getAllUsers, createUser } = require("./routes/index.router");
const { config } = require("./config/config");

const options = {
  formats: { onPostStart: ":time :start :level :message" },
  tokens: { start: () => "[start]" },
  indent: 0,
};

const server = Hapi.server({
  port: config.port,
  host: config.host,
});

const provision = async () => {
  try {
    await server.register([
      {
        plugin: laabr,
        options,
      },
    ]);
    await server.start();

    getAllUsers(server);
    createUser(server);

    console.log("Server running at:", server.info.uri);
  } catch (error) {
    console.log(error);
  }
};

provision();
