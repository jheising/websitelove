"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const websitelove_lib_1 = require("websitelove-lib");
/*
!!!!!!!!! IMPORTANT !!!!!!!!!
Do not import anything with private, secure data here. This will be included in client-side scripts
 */
class App {
    static async pageLoader(pageName) {
        return (await Promise.resolve().then(() => __importStar(require(`./ui/pages/${pageName}`))))[pageName];
    }
    static async renderServerPage(pageName, pageProps, req, res) {
        await websitelove_lib_1.SiteRenderer.renderServerPage("HomePage", App.pageLoader, pageProps, req, res, {});
    }
}
exports.App = App;
websitelove_lib_1.SiteRenderer.registerClientPageLoaderCallback(App.pageLoader);
//# sourceMappingURL=App.js.map