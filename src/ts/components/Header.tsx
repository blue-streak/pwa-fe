import {h, Component} from 'preact';
import {Github, Menu, Twitter} from "./icons/LinkedIn";

export class Header extends Component<any, any> {
    state = {navOpen: false};
    store: any;
    constructor(props, {store}) {
        super(props);
        this.store = store;
    }
    render() {
        return (
            <header class="site-header">
                <div class="container site-header__container">
                    <div class="site-header__brand">
                        <button
                            type="button"
                            onClick={() => {
                                this.setState(prev => ({navOpen: !prev.navOpen}));
                                this.store.dispatch({type: 'Global/toggleMenu'});
                            }}
                            class="site-header__menu button button--icon">
                            <Menu />
                        </button>
                        <a href="/" class="site-header__logo">
                            <svg id="svg-logo" class="svg-icon site-header__logo__svg" viewBox="0 0 960.9 1000.6" width="100%" height="100%">
                                <path d="M954.5 339.4c-7.7-16.5-21.1-28.5-36.8-34.8L94.2 4.7 91 3.6C84 1.2 76.7 0 69.1 0c-4 0-8 .4-12 1.1-37.6 6.6-62.7 42.5-56 80.1L153 943.4c3.1 17.4 12.8 33.7 28.4 44.7 12 8.4 25.9 12.5 39.5 12.5 16.2 0 32.2-5.7 44.9-16.4l.1-.1.2-.2L934.6 423l.5-.4 2.8-2.4c22.2-19.9 29.7-52.4 16.6-80.8zM297 643.7c0 54-23.3 81-70 81-8 0-12.4-.2-16.8-.8-2.5-.4-4.5-2.4-5-4.9l-6.7-37.3c-.4-2.5 1.8-4.6 4.3-4.3 5 .7 9.9 1.1 14.8 1.1 9.3 0 16.1-2.3 20.3-7 4.3-4.7 6.5-12.4 6.5-23.3V347.7c0-2.1 1.7-3.7 3.8-3.7h45.1c2.1 0 3.7 1.7 3.7 3.7v296zm-26.2-358.4c-20 0-36.2-16.2-36.2-36.2s16.2-36.2 36.2-36.2 36.2 16.2 36.2 36.2-16.2 36.2-36.2 36.2zM597 591.9c0 2.1-1.6 3.8-3.7 3.8h-45.1c-2.1 0-3.8-1.7-3.8-3.8V441.6c0-39.7-18-59.6-54.1-59.6h-.5c-22.5 0-45 8.5-58 25.2-13.1 16.7-15 31-15 68.1v116.5c0 2.1-1.7 3.8-3.8 3.8h-45.1c-2.1 0-3.8-1.7-3.8-3.8V202.9c0-2.6 2.6-4.4 5-3.5l45.2 16.4c1.5.5 2.5 1.9 2.5 3.5v135.8s4.1-3.2 4.8-3.6c1.7-1.2 3.4-2.4 5.1-3.5 3.5-2.2 7.1-4.2 10.8-6.1 7.4-3.6 15.1-6.4 23.1-8.4 16.1-4 33-4.6 49.4-2.1 17.9 2.7 35.2 8.5 50.5 19.1 13.4 9.2 23 23 28.8 38.1 5.8 15.2 7.8 31.7 7.8 47.9l-.1 155.4z"/>
                            </svg>
                            <span class="site-header__logo__label">Store</span>
                        </a>
                        <a href="/" class="site-header__cart button button--icon">
                            <svg class="svg-icon site-header__cart__svg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                            <span class="site-header__cart__label">2</span>
                        </a>
                    </div>
                    <nav class={`site-nav ${this.state.navOpen ? 'active' : ''}`}>
                        <ul class="site-nav__list">
                            <li class=""><a href="/">Men's Outerwear</a></li>
                            <li class=""><a href="/">Ladies Outerwear</a></li>
                            <li class=""><a href="/">Men's T-Shirts</a></li>
                            <li class=""><a href="/">Ladies T-Shirts</a></li>
                        </ul>
                        <div class="site-social">
                            <a class="site-social__link site-social__link--twitter" href="https://twitter.com/wearejh/">
                                <Twitter />
                            </a>
                            <a class="site-social__link site-social__link--github" href="https://github.com/wearejh/">
                                <Github />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
