import {h, render} from "preact";
import {configureStore} from './configureStore';
import {Provider} from "preact-redux";
import {Shell} from "./Shell";
import {of} from "rxjs/observable/of";
import {routeRegister} from "./route-register";
import {registerGlobal} from "./global";

const store = configureStore({}, [], {
    document$: of(document)
});

store.register(routeRegister());
store.register(registerGlobal());

render((
    <Provider store={store}>
        <Shell title="JS Rendered" />
    </Provider>
), document.querySelector('#app'), (document.querySelector('#app') as any).firstChild);
