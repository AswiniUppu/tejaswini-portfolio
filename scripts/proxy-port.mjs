import net from "net";
const listenPort = Number(process.argv[2] || 43127);
const targetPort = Number(process.argv[3] || 3000);
const server = net.createServer((client) => {
  const upstream = net.connect({ host: "127.0.0.1", port: targetPort }, () => {
    client.pipe(upstream);
    upstream.pipe(client);
  });
  upstream.on("error", () => client.destroy());
  client.on("error", () => upstream.destroy());
});
server.listen(listenPort, "0.0.0.0", () => {
  console.log(`proxy 0.0.0.0:${listenPort} -> 127.0.0.1:${targetPort}`);
});
