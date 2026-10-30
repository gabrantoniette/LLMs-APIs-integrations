import { createServer } from "./server.ts";
import { OpenRouterService } from "./openrouterServices.ts";
import { config } from "./config.ts";

const routerService = new OpenRouterService(config)

const app = createServer()

await app.listen({ port: 3000, host: '0.0.0.0' })
// console.log('hello')