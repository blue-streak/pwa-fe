import {fetchHeros} from "./effects/fetchHeroes.effect";

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
