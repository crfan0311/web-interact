import axios from "./config";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios, {
    delayResponse: 300,
    onNoMatch: 'passthrough',
});

export default mock;