"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const trim_1 = __importDefault(require("lodash/trim"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class ScriptUtils {
    static async start(startFunction, loop = false) {
        do {
            await startFunction();
            if (loop) {
                loop = await ScriptUtils.confirm("\n\nDo you want to do this again?", false);
            }
        } while (loop);
        ScriptUtils.end();
    }
    static end() {
        rl.close();
        process.exit(1);
    }
}
exports.ScriptUtils = ScriptUtils;
ScriptUtils.DEFAULT_PROMPT_SUFFIX = " : ";
ScriptUtils.question = async (question) => {
    return new Promise((resolve) => {
        rl.question(question + ScriptUtils.DEFAULT_PROMPT_SUFFIX, resolve);
    });
};
ScriptUtils.confirm = async (message, defaultResponse) => {
    const answer = trim_1.default(await ScriptUtils.question(message)).toLowerCase();
    if (!answer || answer === "") {
        if (defaultResponse === undefined || defaultResponse === null) {
            return ScriptUtils.confirm(message, defaultResponse);
        }
        else {
            return defaultResponse;
        }
    }
    return answer.substr(0, 1) === "y" || answer === "true" || answer === "1";
};
//# sourceMappingURL=ScriptUtils.js.map