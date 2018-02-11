import {h} from 'preact';
import {Github, Twitter} from "./icons/Svg";

export function Footer() {
    return (
        <footer data-component="Footer" class="wrapper site-footer">
            <div className="container site-footer__container">
                <div class="site-footer__contact">
                    <a class="site-footer__contact-link" href="Mailto:hello@wearejh.com">hello@wearejh.com</a>
                    <a class="site-footer__contact-link" href="Tel:+44(0)115 933 8790">+44(0)115 933 8790</a>

                    <div class="site-social">
                        <a class="site-social__link" href="https://twitter.com/wearejh/"><Twitter /></a>
                        <a class="site-social__link" href="https://github.com/wearejh/"><Github /></a>
                    </div>
                </div>
            </div>
            <section class="wrapper copyright">
                <div class="container">
                    <p>© 2018 JH</p>
                </div>
            </section>
        </footer>
    );
}
