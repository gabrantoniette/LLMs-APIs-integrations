# Smarter Model Router Gateway

> A small Fastify gateway that sends each chat request to the best available LLM through [OpenRouter](https://openrouter.ai), with automatic model fallback and provider sorting by price, latency or throughput.

![Node](https://img.shields.io/badge/node-%3E%3D24-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5-000000?logo=fastify&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

**Topics:** `llm` · `openrouter` · `fastify` · `model-router` · `api-gateway` · `typescript` · `nodejs` · `fallback` · `ai`

## How it works

```
client ── POST /chat ──▶ Fastify (schema validation)
                              │
                              ▼
                      OpenRouterService
                              │  models[] + provider.sort
                              ▼
                         OpenRouter API ──▶ best provider/model
```

1. The client posts a `question` to `/chat`.
2. The service forwards it to OpenRouter with an ordered list of candidate `models`.
3. OpenRouter falls back through the list and picks a provider according to `provider.sort` (`price`, `latency` or `throughput`).
4. The gateway returns the model that actually answered, plus its content.

## Requirements

- Node.js **24+** (runs TypeScript natively and uses `--env-file`)
- An [OpenRouter API key](https://openrouter.ai/keys)

## Getting started

```bash
cd smarter-model-router-gateway
npm install
cp .env.example .env   # then set OPENROUTER_API_KEY
npm run dev
```

The server listens on port `3000`. The app refuses to start if `OPENROUTER_API_KEY` is missing.

## API

### `POST /chat`

```bash
curl -X POST http://localhost:3000/chat \
  -H 'Content-Type: application/json' \
  -d '{"question": "What is rate limiting?"}'
```

`question` is required (string, minimum 5 characters). Response:

```json
{ "model": "google/gemma-4-26b-a4b-it:free", "content": "..." }
```

Failures return `500 {"error": "Internal server error"}`; invalid bodies return `400`.

## Configuration

Defaults live in [`src/config.ts`](./src/config.ts):

| Option | Description |
| --- | --- |
| `models` | Ordered fallback list of OpenRouter model IDs |
| `provider.sort.by` | `price`, `latency` or `throughput` |
| `temperature`, `maxTokens` | Generation parameters |
| `systemPrompt` | System message sent with every request |

`OpenRouterService` accepts a config override, which is how the tests switch the sort strategy.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start with file watching and the inspector |
| `npm run typecheck` | Type-check with `tsc` (also run in CI) |
| `npm test` | End-to-end tests against the real OpenRouter API |

> The tests call OpenRouter for real, so they need a valid key, consume quota and depend on live provider rankings. They are **not** run in CI.

## Contributing

`main` is protected: open a pull request and wait for the CI check to pass before merging.

## License

[MIT](../LICENSE)
