import { OpenRouter } from '@openrouter/sdk'
import { config, type configModel } from './config.ts';




export class OpenRouterService {
    private client: OpenRouter
    private config: configModel

    constructor(configOverride: configModel) {
        this.config = configOverride ?? config

        this.client = new OpenRouter({
            apiKey: config.apiKey,
            httpReferer: config.httpReferer,
            xTitle: config.xTitle,
        })

    }

    async generate( prompt: string ) {
        // return this.client.chat.send()
    }

}