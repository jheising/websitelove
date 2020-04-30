import {APILove} from "apilove";
import {SiteRenderer, SiteConfig} from "websitelove-lib";
import {Config} from "./Config";

if (Config.USE_LOCAL_CDN) {
    const express = require("express");
    APILove.app.use("/cdn", express.static("./cdn"));
}

const CURRENT_CDN_BASE_URL = `${Config.CDN_BASE_URL}/${Config.APP_VERSION}`;

SiteConfig.cdnBaseURL = CURRENT_CDN_BASE_URL;
// SiteConfig.apiBaseURL = ""; /* Set this to your API URL  */

SiteRenderer.APPLICATION_SCRIPT_PATH = `${CURRENT_CDN_BASE_URL}/app.js`;

// This is the only part that is required.
module.exports.handler = APILove.start({
    apis: [
        {
            require: "./src/site/DefaultRoutes"
        }
    ]
});