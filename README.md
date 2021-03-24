# PR Anime Gif Bot

> A GitHub App built with [Probot](https://github.com/probot/probot) to react with wholesome anime gifs when a PR is merged on Github.

This app is deployed on [glitch.me](https://glitch.me). You can see the code live on the project page [here](https://glitch.com/~pr-anime-gif-bot).

## Example

![image](https://user-images.githubusercontent.com/23691775/112256340-07b18b80-8c3a-11eb-8551-89d05b2cae22.png)

[Link to PR](https://github.com/Code-4-Community/lucys-love-bus-frontend/pull/76#issuecomment-805476425)

## Project Structure

Gifs are randomly selected from the array exported in `src/gifs.ts`. If you find anything good feel free to add to the list! Of course, don't try to sneak in anything unsavory, we only take wholesome happy content here.

Of course you can pretty easily fork or simply start from the Probot starter code and create your own gif bot if you want to customize the app for your own projects.

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
