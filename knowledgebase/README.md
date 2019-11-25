## Zendesk Knowledgebase Extension Example

This extension is an example of how you can incorporate a CRM knowledgebase to give agents suggested responses based on end-user text.

## Running The Example

### Prerequisites

- [npm](https://nodejs.org/en/) or [yarn](https://yarnpkg.com/en/)

### Additional Steps

1. Populate the `app/Constants.tsx` file with your appropriate data.
2. Run `npm install` or `yarn` to install dependencies.
3. `npm run start` or `yarn start` to start the development server
4. Open Chrome, allowing mixed content (This example is served over http, not https)
   - From MacOS `open /Applications/Google\ Chrome.app --args --allow-running-insecure-content`
   - From Windows `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-running-insecure-content`
5. Navigate to your Quiq _Staging_ site `https://yourTenatn.goquiq.com/app/admin/agent-ui/ui-extensions`
6. `Add Section`
7. Type `Extension`
8. Click `Extension` and give the extension a name. This is what is displayed to agents
9. Click `ID` and give it a unique ID, it can be anything
10. Click URL and point it at `http://localhost:3000`, and Save
11. Go to the agent interface and send in a conversation. You should see your new extension appear on the right hand side!

## Deploying

1. To build the application, run `npm run build` or `yarn build`
2. The `dist` folder will have the static assets you need to host for this extension to live.
