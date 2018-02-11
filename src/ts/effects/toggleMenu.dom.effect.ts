export function toggleMenu(action$, store, deps) {
    return action$.ofType('Global/toggleMenu')
        .withLatestFrom(deps.document$)
        .do(([, document]) => {
            document.body.classList.toggle('nav-open');
        })
        .ignoreElements()
}
