
class Main {
    // tslint:disable-next-line:no-empty
    public constructor() {

    }

    // 对象处理
    public encode(data: any | string | object, name?: string): string {
        // tslint:disable-next-line:only-arrow-functions
        const stringifyPrimitive: (v: any) => string = function(v: any) {
            switch (typeof v) {
                case "string":
                    return v;
                case "boolean":
                    return v ? `true` : `false`;
                case "number":
                    return isFinite(v) ? v.toString() : ``;
                default:
                    return ``;
            }
        };

        const sep = `&`;
        const eq = `=`;

        if (typeof data === "object") {
            return Object.keys(data).map((k) => {
                const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

                if (Array.isArray(data[k])) {
                    return data[k].map((v: any) => {
                        return ks + encodeURIComponent(stringifyPrimitive(v));
                    });
                } else {
                    return ks + encodeURIComponent(stringifyPrimitive(data[k]));
                }

            }).join(sep);
        }

        if (!name) { return ``; }
        return encodeURIComponent(stringifyPrimitive(name)) + eq +
            encodeURIComponent(stringifyPrimitive(data));
    }

}

export { Main as encode };
