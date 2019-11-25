declare var DEVELOPMENT: string;
declare var Quiq: any;

import {hot} from "react-hot-loader/root";
import * as React from "react";
import DevelopmentHeader from "./DevelopmentHeader";
import Knowledge from "./Knowledge";
import {Global, css} from "@emotion/core";
import {parseUrl} from "../utils";

const App = () => {
  const [conversation, setConversation] = React.useState();
  const urlData = parseUrl();

  React.useEffect(() => {
    if (!conversation) {
      const sdkScript = document.createElement("script");
      sdkScript.src = urlData.sdkUrl;
      sdkScript.onload = () => {
        Quiq.on("init", data => setConversation(data.conversation));
        Quiq.init(urlData.quiqHost);
      };

      sdkScript.type = "text/javascript";
      document.body.appendChild(sdkScript);
    }
  }, []);

  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            font-family: Roboto, Lato, tahoma;
          }
        `}
      />
      {DEVELOPMENT && <DevelopmentHeader />}
      {conversation && <Knowledge conversation={conversation} />}
    </React.Fragment>
  );
};

export default hot(App);
