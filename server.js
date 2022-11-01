import ws from "websocket";
globalThis.WebSocket = ws.w3cwebsocket;
import { connect ,JSONCodec} from "nats.ws";
console.log("🔥 🔥 🔥 🔥 🔥 ") 
// to create a connection to a nats-server:
const servers =  "ws://localhost:9223"
const nc = await connect(
  {
    servers,
  },
);
console.log("🔥 🔥 🔥 🔥 🔥 Server connected on ",nc.getServer()) 


// create a codec
const jc = JSONCodec();
// create a simple subscriber and iterate over messages
// matching the subscription
const sub = nc.subscribe("hellos");
(async () => {
  for await (const m of sub) {
    console.log(`[${sub.getProcessed()}]: ${jc.decode(m.data).id}`);
  }
  console.log("subscription closed");
})();


// await nc.drain();