import {h} from 'preact';
import {Global} from "../global";
import {Icon} from "./icons/Svg";

export function HeaderBrand(props, {store}) {
    return (
        <div data-component="HeaderBrand" class="site-header__brand">
            <button
                type="button"
                onClick={() => {
                    store.dispatch(Global.toggleMenu());
                }}
                class="site-header__menu button"
                aria-label="Open menu"
            >
                <Icon name="menu" />
            </button>
            <a href="/" class="site-header__logo">
                <Icon name="logo" className="site-header__logo__svg" />
                <span class="site-header__logo__label">Store</span>
            </a>
            <a href="/cart" class="site-header__cart">
                <Icon name="cart" className="site-header__cart__svg" />
                <span class="site-header__cart__label">0</span>
            </a>
        </div>
    )
}
