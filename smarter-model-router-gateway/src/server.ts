import Fastify from "fastify"




export const createServer = ( ) => {
    
    const app = Fastify({ logger: true })
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
    }, async ( request, reply ) => {
        try {
            const { question } = request.body as { question: string }
            return reply.send('hello world')
        } catch (error) {
            console.error( 'Handling error chat', error )
            return reply.code(500)
        }
    })
    return app
}