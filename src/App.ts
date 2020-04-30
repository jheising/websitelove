import {SiteRenderer} from "websitelove-lib";
/*
!!!!!!!!! IMPORTANT !!!!!!!!!
Do not import anything with private, secure data here. This will be included in client-side scripts
 */

export class App {

    static async pageLoader(pageName:string)
    {
        return (await import(`./ui/pages/${pageName}`))[pageName];
    }

    static async renderServerPage(pageName: string, pageProps: object, req, res) {
        await SiteRenderer.renderServerPage(pageName, App.pageLoader, pageProps, req, res);
    }
}

SiteRenderer.registerClientPageLoaderCallback(App.pageLoader);