if (!process.env.OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not set in .env variable')
}

export type configModel = {
    apiKey: string; 
    httpReferer: string;
    xTitle: string;
    port: number;
    model: string;
    tempature: number;
    maxTokens: number;
    systemPrompt: string;
    provider: {
        sort: {
            by: string,
            partition: string
        }
    };

}

export const config: configModel = {
    apiKey: process.env.OPENROUTER_API_KEY!,
    httpReferer: 'http://test-model.com',
    xTitle: 'SmartModelRouterGateway',
    port: 3000,
    model: 'x',
    tempature: 0.2,
    maxTokens: 50,
    systemPrompt: 'You are an assistant',
    provider: {
        sort: {
            by: 'price',
            partition: 'none'
        }
    }
}