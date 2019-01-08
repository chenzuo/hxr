import { component } from "./component/component";
class Main {
    public showMsg(s: string) {
        const fnXr: (s: string) => void = (text: string) => {
            const res = component.get("https://localhost:5001/api/values/1", { take: 5, pwd: text });
            // tslint:disable-next-line:no-console
            console.log(res);
        };

        fnXr(s);
    }
}

const main = new Main();
main.showMsg(`hello,typescript`);
