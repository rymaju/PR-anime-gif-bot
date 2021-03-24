import { Probot } from "probot";
import GIFS from './gifs'
export = (app: Probot) => {
  app.on("pull_request.closed", async (context) => {
    const randomNum = Math.floor(Math.random() * GIFS.length)
    const issueComment = context.issue({
      body: `<img src="${GIFS[randomNum]}" width="600"/>`,
    });    
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
