"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const websitelove_lib_1 = require("websitelove-lib");
class Page extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    redirectTo(url) {
        this.setState({
            redirectTo: url
        }, () => {
            this.setState({
                redirectTo: null
            });
        });
    }
    throwError(message, error) {
        this.setState({
            currentErrorMessage: message,
            currentError: error
        });
    }
    render() {
        if (this.state.redirectTo) {
            return react_1.default.createElement(react_router_dom_1.Redirect, { push: true, to: this.state.redirectTo });
        }
        return this.renderPageContent();
    }
}
exports.Page = Page;
Page.contextType = websitelove_lib_1.SiteRenderer.USER_CONTEXT;
//# sourceMappingURL=Page.js.map