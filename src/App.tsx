import { QlikEmbed, QlikEmbedConfig } from "@qlik/embed-react";

const hostConfig = {
  host: "<Change This to QCS Tenant",
  clientId: "<Change to clientID>",
  redirectUri: "https://localhost:5173/oauth-callback.html",
  accessTokenStorage: "session",
  authType: "Oauth2",
};
const appId = "Set an App ID";
const sheetId = ""; // sheet id or empty string

export default () => (
  // @ts-expect-error There's som missing typery here
  <QlikEmbedConfig.Provider value={hostConfig}>
    <div className="container">
      <h1>Qlik Embed with React</h1>
      <div className="selections-bar">
        <QlikEmbed ui="selections" appId={appId} />
      </div>
      <div className="viz">
        <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
      </div>
    </div>
  </QlikEmbedConfig.Provider>
);
