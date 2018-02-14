import {createEpicStore} from 'create-epic-store';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/ignoreElements";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/subscribeOn";
import "rxjs/add/observable/of";
import {register} from "./Heros/heros.register";
import {toggleMenu} from "./effects/toggleMenu.dom.effect";

export function configureStore(reducerTree = {}, epics = [], deps = {}) {
    const store = createEpicStore({
            main: (prev = {init: true, product: null}, action) => {
                switch (action.type) {
                    default: return prev;
                }
            },
            ...reducerTree
        },
        [
            toggleMenu,
            ...epics
        ],
        {
            ...deps
        }
    ) as any;
    store.register(register());
    return store;
}
