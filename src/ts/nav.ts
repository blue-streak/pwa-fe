export namespace Nav {
    export enum ActionNames {
        Change = 'Nav/Change'
    }
    export function change(url: string, matches) {
        return {
            type: ActionNames.Change,
            payload: {url, matches}
        }
    }
}

export interface NavState {
    url: null | string
    matches: {[key: string]: any}
}

const initialState: NavState = {
    url: null,
    matches: {}
};

export function navReducer(prev: NavState = initialState, action): NavState {
    switch(action.type) {
        case Nav.ActionNames.Change: {
            return {
                ...prev,
                url: action.payload.url,
                matches: action.payload.matches,
            }
        }
        default: return prev;
    }
}

export function registerNav() {
    return {
        reducers: [
            {
                name: 'nav',
                fn: navReducer
            }
        ]
    }
}
