"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apilove_1 = require("apilove");
const websitelove_lib_1 = require("websitelove-lib");
const Config_1 = require("./Config");
if (Config_1.Config.USE_LOCAL_CDN) {
    const express = require("express");
    apilove_1.APILove.app.use("/cdn", express.static("./cdn"));
}
const CURRENT_CDN_BASE_URL = `${Config_1.Config.CDN_BASE_URL}/${Config_1.Config.APP_VERSION}`;
websitelove_lib_1.SiteConfig.cdnBaseURL = CURRENT_CDN_BASE_URL;
// SiteConfig.apiBaseURL = ""; /* Set this to your API URL  */
websitelove_lib_1.SiteRenderer.APPLICATION_SCRIPT_PATH = `${CURRENT_CDN_BASE_URL}/app.js`;
// This is the only part that is required.
module.exports.handler = apilove_1.APILove.start({
    apis: [
        {
            require: "./src/site/DefaultRoutes"
        }
    ]
});
//# sourceMappingURL=WebHandler.js.map