"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apilove_1 = require("apilove");
const express_1 = __importDefault(require("express"));
const websitelove_lib_1 = require("websitelove-lib");
const Config_1 = require("./Config");
if (Config_1.Config.USE_LOCAL_CDN) {
    apilove_1.APILove.app.use("/cdn", express_1.default.static("./cdn"));
}
websitelove_lib_1.SiteRenderer.APPLICATION_SCRIPT_PATH = `${Config_1.Config.CDN_BASE_URL}/${Config_1.Config.APP_VERSION}/app.js`;
// This is the only part that is required.
module.exports.handler = apilove_1.APILove.start({
    apis: [
        {
            require: "./src/site/DefaultRoutes"
        }
    ]
});
//# sourceMappingURL=WebHandler.js.map