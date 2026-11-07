if (!process.env.OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not set in .env variable')
}

export type configModel = {
    apiKey: string; 
    httpReferer: string;
    xTitle: string;
    port: number;
    models: string[];
    temperature: number;
    maxTokens: number;
    systemPrompt: string;
    provider: {
        sort: {
            by: string,
            partition: string,
        }
    }

}

export const config: configModel = {
    apiKey: process.env.OPENROUTER_API_KEY!,
    httpReferer: 'http://test-model.com',
    xTitle: 'SmartModelRouterGateway',
    port: 3000,
    models: [

        'google/gemma-4-26b-a4b-it:free',
        'nvidia/nemotron-3.5-super-vl:free',
        // 'google/gemma-4-26b-a4b-it:free'

    ],
    temperature: 0.2,
    maxTokens: 1000,
    systemPrompt: 'You are an assistant',
    provider: {
        sort: {
            // by: 'price',
            // by: 'latency',
            by: 'throughput',
            partition: 'none'
        }
    }
}