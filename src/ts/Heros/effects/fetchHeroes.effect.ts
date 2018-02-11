import {ajax} from "rxjs/observable/dom/ajax";

export function fetchHeros(action$) {
    return action$.ofType('load')
        .switchMap(() => {
            return ajax({
                url: '/stubs/home-heros.json',
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
}
