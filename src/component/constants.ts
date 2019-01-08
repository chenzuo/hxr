import { Events, Methods } from "./index.d";

export const METHODS: Methods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    // tslint:disable-next-line:object-literal-sort-keys
    DELETE: "DELETE",
    PATCH: "PATCH",
    OPTIONS: "OPTIONS",
    HEAD: "HEAD",
};

export const EVENTS: Events = {
    READY_STATE_CHANGE: "readystatechange",
    // tslint:disable-next-line:object-literal-sort-keys
    LOAD_START: "loadstart",
    PROGRESS: "progress",
    ABORT: "abort",
    ERROR: "error",
    LOAD: "load",
    TIMEOUT: "timeout",
    LOAD_END: "loadend",
};
