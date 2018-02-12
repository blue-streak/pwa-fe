export interface RouteRegisterState {
    modules: string[]
}

const initialState: RouteRegisterState = {
    modules: []
};

function asyncRouteReducer(prev: RouteRegisterState = initialState, action): RouteRegisterState {
    switch (action.type) {
        case AsyncRouteNS.ActionNames.Registered: {
            return {
                ...prev,
                modules: prev.modules.concat(action.payload)
            }
        }
        default: return prev
    }
}

export namespace AsyncRouteNS {
    export enum ActionNames {
        Registered = 'AsyncRoute/Registered'
    }
    export function registered(name: string) {
        return {
            type: ActionNames.Registered,
            payload: name,
        }
    }
}

export function routeRegister() {
    return {
        reducers: [
            {
                name: 'asyncRoutes',
                fn: asyncRouteReducer
            }
        ]
    }
}
