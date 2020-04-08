var tenant = "TENANT_NAME"; // E.G. If your company name is Quiq, your tenant name may be 'quiq'

// The initialization should be done right away.
Quiq.init(`https://${tenant}.goquiq.com`);

// Any calls to the Quiq SDK should happen after this event has fired.
// This is the signal that the SDK is ready to accept requests.
Quiq.on("init", function (conversation) {
  document.querySelector(".conversation").innerText = JSON.stringify(conversation, null, 2);
  document.querySelector(".conversationContainer").classList.remove("hidden");

  Quiq.prepareMessage("Successfully initialized Quiq UI Extension!");
  document.querySelector(".successText").classList.remove("hidden");
});
