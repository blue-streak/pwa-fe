import {h} from 'preact';
import {Store} from "../components/Store";
import {Header} from "../components/Header";

export function Home(props, {store}) {
    return (
        <div data-component="Home">
            <Store
                selector={x => x.main}
                render={(main) => {
                    return (
                        <div>
                            <figure class="hero" style={{paddingBottom: '64%', marginBottom: 0}}>
                                <img src="http://ce.demo.wearejh.com/media/wysiwyg/new/new-performance.jpg" alt=""/>
                                <a href="/" class="button hero__link">Shop Now</a>
                            </figure>
                            <figure class="hero" style={{paddingBottom: '64%', marginBottom: 0}}>
                                <img src="http://ce.demo.wearejh.com/media/wysiwyg/new/new-eco.jpg" alt=""/>
                                <a href="/" class="button hero__link">Shop Now</a>
                            </figure>
                        </div>
                    );
                }}
            />
        </div>
    )
}
