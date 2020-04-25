import {APIEndpoint} from "apilove";
import {App} from "../App";

export class DefaultRoutes {
    @APIEndpoint({
        path: "/"
    })
    public static async home(req, res)
    {
        return App.renderServerPage("HomePage", {}, req, res);
    }
}