import {Global} from "../global";

export function toggleMenu(action$, store, deps) {
    return action$.ofType(Global.ActionNames.ToggleMenu)
        .withLatestFrom(deps.document$)
        .do(([, document]) => {
            document.body.classList.toggle('nav-open');
        })
        .ignoreElements()
}
