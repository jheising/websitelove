import {APILove} from "apilove";
import express from "express";
import {SiteRenderer} from "websitelove-lib";
import {Config} from "./Config";

if (Config.USE_LOCAL_CDN) {
    APILove.app.use("/cdn", express.static("./cdn"));
}

SiteRenderer.APPLICATION_SCRIPT_PATH =  `${Config.CDN_BASE_URL}/${Config.APP_VERSION}/app.js`;

// This is the only part that is required.
module.exports.handler = APILove.start({
    apis: [
        {
            require: "./src/site/DefaultRoutes"
        }
    ]
});