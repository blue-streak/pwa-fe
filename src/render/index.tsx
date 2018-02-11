import {h} from 'preact';
import {render as renderHtml} from 'preact-render-to-string';
import {Shell} from '../ts/Shell';
import {Provider} from 'preact-redux';
import {configureStore} from "../ts/configureStore";
import {of} from "rxjs/observable/of";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            animateTransform: any
        }
    }
}

export function render() {
    const store = configureStore({}, [], {
        document$: of({})
    });
    return renderHtml((
        <Provider store={store}>
            <Shell title="Server Side Rendered" />
        </Provider>
    ));
}
