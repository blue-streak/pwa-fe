import {h, render} from "preact";
import {createEpicStore} from 'create-epic-store';
import {Provider} from 'preact-redux';
import {App_Connected} from './components/App';

const store = createEpicStore({
        main: (prev = {init: true}) => prev,
    },
    [],
    {}
);

render((
    <div>
        <Provider store={store}>
            <App_Connected />
        </Provider>
    </div>
), document.querySelector('#app'));