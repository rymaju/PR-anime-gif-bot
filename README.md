# pr-anime-gif-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) to react with wholesome anime gifs when a PR is merged on Github.

## Example

https://files.slack.com/files-pri/T016K6GE7FC-F01S1HFV15L/image.png

## Project Structure

Gifs are randomly selected from the array exported in `src/gifs.ts`. If you find anything good feel free to add to the list!

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t pr-gif-react .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> pr-gif-react
```

## Contributing

If you have suggestions for how this could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Ryan Jung <ryan.matthew.jung@gmail.com>
