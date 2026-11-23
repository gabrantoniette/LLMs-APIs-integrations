# LLMs APIs Integrations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/gabrantoniette/gabrantoniette/main/assets/generated/languages/LLMs-APIs-integrations-dark.svg">
  <img src="https://raw.githubusercontent.com/gabrantoniette/gabrantoniette/main/assets/generated/languages/LLMs-APIs-integrations-light.svg" alt="Languages in LLMs-APIs-integrations, by share of code">
</picture>

Experiments and reference implementations for integrating LLM APIs into backend services.

Each project lives in its own folder with its own README, tests and `package.json`, and tackles one
concern of putting an LLM behind an HTTP API: choosing the model for each request, falling back when a
provider fails, sorting providers by price, latency or throughput, and validating what comes in and out.
They are written in TypeScript on Node.js with Fastify, and share the rule that **no API key is ever
committed** (see [SECURITY.md](./SECURITY.md)).

| Project | Description |
| --- | --- |
| [`smarter-model-router-gateway`](./smarter-model-router-gateway) | HTTP gateway that routes chat requests across several LLMs via OpenRouter |

## License

[MIT](./LICENSE)
