import UrlParser from "url-parse";
import {ParsedUrl} from "./types";
import {tenant} from "./Constants";

export const parseUrl = (url: string = window.location.href): ParsedUrl => {
  const parsedUrl = UrlParser(url, {});

  return {
    tenant,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
    protocol: parsedUrl.protocol,
    rawUrl: url,
    quiqHost: `https://${tenant}.goquiq.com`,
    sdkUrl: `https://${tenant}.goquiq.com/app/ui-extensions/sdk.js`
  };
};
