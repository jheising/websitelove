import {APIEndpoint} from "apilove";
import {App} from "../App";
import {APIAuthUser} from "apilove/lib/APIAuthUtils";

export class DefaultRoutes {
    @APIEndpoint({
        path: "/"
    })
    public static async home(req, res) {
        return App.renderServerPage("HomePage", {}, req, res);
    }
}