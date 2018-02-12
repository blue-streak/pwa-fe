export namespace Global {
    export enum ActionNames {
        ToggleMenu = 'Global/ToggleMenu'
    }
    export function toggleMenu() {
        return {
            type: ActionNames.ToggleMenu
        }
    }
}

export interface GlobalState {
    menu: {
        open: boolean
    }
}

const initialState: GlobalState = {
    menu: { open: false }
};

export function globalReducer(prev: GlobalState = initialState, action): GlobalState {
    switch(action.type) {
        case Global.ActionNames.ToggleMenu: {
            return {
                ...prev,
                menu: {
                    ...prev.menu,
                    open: !prev.menu.open
                }
            }
        }
        default: return prev;
    }
}

export function registerGlobal() {
    return {
        reducers: [
            {
                name: 'global',
                fn: globalReducer
            }
        ]
    }
}
