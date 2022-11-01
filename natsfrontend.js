import { connect ,JSONCodec} from './node_modules/nats.ws/esm/nats.js';


// to create a connection to a nats-server:
const nc = await connect({ servers: "ws://localhost:9223" });
// console.log("nnnnnnnnnTA")
// create a codec
const jc = JSONCodec();

setInterval(()=>{
    nc.publish("hellos", jc.encode({id:"feworld"}));
    nc.publish("hellos", jc.encode({id:"feagain"}));
    
},2000)

