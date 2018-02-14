import {Nav} from "../../nav";
import {HerosNS} from "../heros.register";

export function fetchHeros(action$, store, {ajax}) {
    return action$.ofType(Nav.ActionNames.Change)
        .switchMap(() => {
            return ajax({
                url: '/stubs/home-heros.json',
                method: 'GET',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // body: {
                //     "query": "{product {id sku name}}",
                //     "variables":null,
                //     "operationName":null
                // }
            })
                .map((resp) => HerosNS.fetchSuccess(resp.response))
        })
}
