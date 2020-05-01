import * as readline from "readline";
import trim from "lodash/trim";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class ScriptUtils {

    static DEFAULT_PROMPT_SUFFIX = " : ";

    static question = async (question: string): Promise<string> => {
        return new Promise((resolve) => {
            rl.question(question + ScriptUtils.DEFAULT_PROMPT_SUFFIX, resolve);
        });
    };

    static confirm = async (message: string, defaultResponse?: boolean): Promise<boolean> => {
        const answer = trim(await ScriptUtils.question(message)).toLowerCase();

        if (!answer || answer === "") {
            if (defaultResponse === undefined || defaultResponse === null) {
                return ScriptUtils.confirm(message, defaultResponse);
            } else {
                return defaultResponse;
            }
        }

        return answer.substr(0, 1) === "y" || answer === "true" || answer === "1";
    };

    static async start(startFunction: () => Promise<any>, loop: boolean = false) {
        do {
            await startFunction();

            if (loop) {
                loop = await ScriptUtils.confirm("\n\nDo you want to do this again?", false);
            }
        }
        while (loop);
        ScriptUtils.end();
    }

    static end() {
        rl.close();
        process.exit(1);
    }
}