import {fetchHeros} from "./effects/fetchHeroes.effect";

export namespace HerosNS {
    export enum ActionNames {
        FetchSuccess = 'HerosNS/FetchSuccess'
    }
    export function fetchSuccess(resp: {data: {heroes: IHerosItem[]}}) {
        return {
            type: ActionNames.FetchSuccess,
            payload: resp.data
        }
    }
}

export interface HerosState {
    loading: boolean,
    data: IHerosItem[]
}

const initial: HerosState = {
    loading: true,
    data: []
};

export function register() {
    return {
        epics: [
            fetchHeros
        ],
        reducers: [
            {
                name: 'heros',
                fn: (prev: HerosState = initial, action): HerosState => {
                    switch (action.type) {
                        case HerosNS.ActionNames.FetchSuccess: {
                            return {
                                ...prev,
                                loading: false,
                                data: action.payload.heros
                            }
                        }
                        default: return prev;
                    }
                }
            }
        ]
    }
}

export interface IHerosItem {
    id: string;
    link: ILink;
    image: IImage;
}
export interface ILink {
    label: string;
    url: string;
}
export interface IImage {
    large: ILarge;
}
export interface ILarge {
    url: string;
    height: number;
    width: number;
}
