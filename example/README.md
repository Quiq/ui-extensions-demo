## Basic Example

To use the example, you will need to run this through to your Messaging App. To do so, download and use ngrok(https://ngrok.com/) to expose this local webserver to the public with a command like "ngrok http 3000". After you've done that, go to your messaging app's admin area, go to `Conversation UI`, and add a new `Extension` section, with the `URL` being the https url ngrok gave you appended with /example (e.g. https://a78161bd.ngrok.io/exmaple). ID can be anything as long as it's unique.

Before running the code, go into index.js and swap out TENANT_NAME with the name of your Quiq tenant.
