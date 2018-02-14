import {h, render} from "preact";
import {configureStore} from './configureStore';
import {Provider} from "preact-redux";
import {Shell} from "./Shell";
import {of} from "rxjs/observable/of";
import {ajax} from "rxjs/observable/dom/ajax";
import {routeRegister} from "./route-register";
import {registerGlobal} from "./global";
import {registerNav} from "./nav";

const store = configureStore({}, [], {
    document$: of(document),
    ajax
});

store.register(routeRegister());
store.register(registerNav());
store.register(registerGlobal());

render((
    <Provider store={store}>
        <Shell title="JS Rendered" />
    </Provider>
), document.querySelector('#app'), (document.querySelector('#app') as any).firstChild);
