import {h, render} from "preact";
import {createEpicStore} from 'create-epic-store';
import {Provider} from 'preact-redux';

import {ajax} from 'rxjs/observable/dom/ajax';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/ignoreElements";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {Shell} from "./Shell";

const store = createEpicStore({
        main: (prev = {init: true, product: null}, action) => {
            switch (action.type) {
                case 'fetch_success': {
                    return {
                        ...prev,
                        product: action.payload
                    }
                }
                default: return prev;
            }
        },
    },
    [
        (action$) => action$
            .ofType('load')
            .switchMap(() => {
                return ajax({
                    url: '/graphql',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        "query": "{product {id sku name}}",
                        "variables":null,
                        "operationName":null
                    }
                })
                    .map(res => {
                        return {
                            type: 'fetch_success',
                            payload: res.response,
                        }
                    })
            })
    ],
    {}
);


setTimeout(() => {
    render((
        <Provider store={store}>
            <Shell title="JS Rendered" />
        </Provider>
    ), document.querySelector('#app'), (document.querySelector('#app') as any).firstChild);
}, 3000);
