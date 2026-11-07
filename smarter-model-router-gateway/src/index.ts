import { createServer } from "./server.ts";
import { OpenRouterService } from "./openrouterServices.ts";
import { config } from "./config.ts";

const routerService = new OpenRouterService(config)

const app = createServer(routerService)

await app.listen({ port: 3000, host: '0.0.0.0' })
console.log('server running at port: 3000')


app.inject({
    method: 'POST',
    url: '/chat',
    body: {question: "where jiu jitsu martial art come from?"}
}).then((response) => {
    console.log('response status:', response.statusCode)
    console.log('response body: ', response.body)
})