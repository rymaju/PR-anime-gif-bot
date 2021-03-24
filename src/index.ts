import { Probot } from "probot";
import GIFS from './gifs'
export = (app: Probot) => {
  app.on("pull_request.closed", async (context) => {
    const randomNum = Math.floor(Math.random() * GIFS.length)
    console.log(randomNum)
    const issueComment = context.issue({
      body: `<img src="${GIFS[randomNum]}" width="600"/>`,
    });
    console.log('creating a comment...')
    
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
