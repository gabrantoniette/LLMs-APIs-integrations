import Fastify from "fastify"



export const createServer = ( ) => {
    
    const app = Fastify({ logger: false })
    app.post('/chat', {
        schema: {
            body: {
                type: 'object',
                required: ['question'],
                properties: {
                    question: { type: 'string', minLength: 1 } 
                }
            }
        }
    }, 
    async ( request, reply ) => {
        try {
            const { question } = request.body as { question: string }
            return reply.send('hello world')
        } catch (error) {
            request.log.error( error, 'Handling error chat' )
            return reply.code(500).send({ error: 'Internal server error' })
        }
    })
    return app
}