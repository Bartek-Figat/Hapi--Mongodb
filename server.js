const Hapi = require("@hapi/hapi");
const hapiAlive = require("hapi-alive");
const laabr = require("laabr");
const {
  getAllUsers,
  createUser,
  getPagination,
} = require("./routes/index.router");
const { config } = require("./config/config");

const options = {
  formats: { onPostStart: ":time :start :level :message" },
  tokens: { start: () => "[start]" },
  indent: 0,
};

const { port, host, origin } = config;

const server = Hapi.server({
  port,
  host,
  routes: {
    cors: {
      origin,
      credentials: true,
    },
  },
});

const provision = async () => {
  try {
    await server.register([
      {
        plugin: laabr,
        options,
      },
      {
        plugin: hapiAlive,
        options: {
          path: "/routes/index.router", //Health route path
          tags: ["health", "monitor"],
          responses: {
            healthy: {
              message: "I'm healthy!!!",
            },
            unhealthy: {
              statusCode: 400,
            },
            healthCheck: async function (_server) {
              return await true;
            },
            auth: false,
          },
        },
      },
    ]);
    await server.start();

    getAllUsers(server);
    createUser(server);
    getPagination(server);

    console.log("Server running at:", server.info.uri);
  } catch (error) {
    console.log(error);
  }
};

provision();
