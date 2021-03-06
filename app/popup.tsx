import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import App from "./pages/app";
import "./styles/style.less";

const proxyStore = new Store();

chrome.runtime.getBackgroundPage((bg) => {
    window.register = bg.register;
    window.getAccount = bg.getAccount;
    window.sendTransaction = bg.sendTransaction;
    window.disconnectChannel = bg.disconnectChannel;
});

proxyStore.ready().then(() => {
    ReactDOM.render(
        <Provider store={proxyStore}>
            <App />
        </Provider>,
        document.querySelector("#root")
    );
});
