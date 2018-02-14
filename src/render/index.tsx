import {h} from 'preact';
import {render as renderHtml} from 'preact-render-to-string';
import {Shell} from '../ts/Shell';
import {Provider} from 'preact-redux';
import {configureStore} from "../ts/configureStore";
import {of} from "rxjs/observable/of";
import {routeRegister} from "../ts/route-register";
import {registerGlobal} from "../ts/global";
import {registerNav} from "../ts/nav";
import {async} from "rxjs/scheduler/async";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            animateTransform: any
        }
    }
}

export function render() {
    const store = configureStore({}, [], {
        document$: of({}),
        ajax: () => of({}).subscribeOn(async)
    });

    store.register(routeRegister());
    store.register(registerNav());
    store.register(registerGlobal());

    return renderHtml((
        <Provider store={store}>
            <Shell title="Server Side Rendered" />
        </Provider>
    ));
}
