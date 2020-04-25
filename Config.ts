import {EnvVarSync} from "apilove";

export class Config {
    @EnvVarSync
    static CDN_BASE_URL = "http://localhost:3000/cdn";

    @EnvVarSync
    static USE_LOCAL_CDN = true;

    static APP_VERSION = require("./package.json").version;
}