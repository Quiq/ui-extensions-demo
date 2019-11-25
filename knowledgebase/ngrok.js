const ngrok = require("ngrok");

(async () => {
  try {
    const ngrokUrl = await ngrok.connect({
      proto: "http",
      addr: 3000,
      subdomain: process.env.ngrokSubdomain,
      authtoken: process.env.ngrokAuthToken,
      region: "us"
    });
    console.log(`
    *****  Put the following as your stage tenant's "UI Extension URL" -- ${ngrokUrl}  *****
    *****  Put the following as your stage tenant's "UI Extension URL" -- ${ngrokUrl}  *****
    *****  Put the following as your stage tenant's "UI Extension URL" -- ${ngrokUrl}  *****
    *****  Put the following as your stage tenant's "UI Extension URL" -- ${ngrokUrl}  *****
    *****  Put the following as your stage tenant's "UI Extension URL" -- ${ngrokUrl}  *****
      `);
    process.stdin.resume();
  } catch (e) {
    console.log(e);
  }
})();
