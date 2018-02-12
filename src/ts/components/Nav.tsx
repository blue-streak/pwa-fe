import {h} from 'preact';
const classnames = require('classnames');
import {Github, Twitter} from "./icons/Svg";

export function Nav(props: {open: boolean}, {store}) {
    const classes = classnames({
        'site-nav': true,
        'active': props.open,
    })
    return (
        <nav data-component="Nav" class={classes}>
            <ul class="site-nav__list">
                <li class="site-nav__list__item"><a href="/" class="site-nav__list__link">Men's Outerwear</a></li>
                <li class="site-nav__list__item"><a href="/" class="site-nav__list__link">Ladies Outerwear</a></li>
                <li class="site-nav__list__item"><a href="/" class="site-nav__list__link">Men's T-Shirts</a></li>
                <li class="site-nav__list__item"><a href="/" class="site-nav__list__link">Ladies T-Shirts</a></li>
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
    )
}
