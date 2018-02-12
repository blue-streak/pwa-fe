import {h, Component} from 'preact';
const name = 'cart'
function Cart() {
    return (
        <p>Cart</p>
    )
}

function register(store, props) {
    return {
        reducers: [
            {
                name,
                fn: (prev = {}) => prev
            }
        ]
    }
}

export {
    Cart,
    Cart as Component,
    register,
    name,
};
