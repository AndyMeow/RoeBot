function postToDiscord(message) {
  //const channel = PropertiesService.getScriptProperties().getProperty("DISCORD_CHANNEL_ID")
  //DISCORD_URL = "https://discord.com/api/channels/" + channel + "/messages"
  const url = PropertiesService.getScriptProperties().getProperty("WEBHOOK_URL")
  let payload = {
    content : message
  }
  const params = { 
    method: 'post', contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };
  const response = UrlFetchApp.fetch(url, params);
  return response;
}

function send(){
  ike = "<@371793985292861441>"
  joe = "<@380172947110756364>"
  for(let i =0; i<100; i++){
    postToDiscord(ike)
  }
}

function setup(){
  const prop = PropertiesService.getScriptProperties();
  prop.setProperty("DISCORD_CHANNEL_ID", "1284636294843994323")
  prop.setProperty("WEBHOOK_URL", "https://discord.com/api/webhooks/1415727802174410802/ek9ZNJ9_8H_a0lZ2u049W0M0OFwDQbyxUbRGsNmTpbbZ1cPf2RiNg_w1RXJVULY9olu_")
}
