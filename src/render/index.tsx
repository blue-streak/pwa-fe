import {h} from 'preact';
import {render as renderHtml} from 'preact-render-to-string';
import {Shell} from '../ts/Shell';
import {createEpicStore} from 'create-epic-store';
import "rxjs/add/operator/catch";
import {Provider} from 'preact-redux';

export function render() {
    const store = createEpicStore({
        main: (prev = {}) => prev
    }, [], {});
    return renderHtml((
        <Provider store={store}>
            <Shell title="Server Side Rendered" />
        </Provider>
    ));
}
