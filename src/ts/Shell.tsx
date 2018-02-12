import {h} from 'preact';
import {Router} from 'preact-router';
import {Home} from "./routes/Home";
import {NotFound} from "./routes/NotFound";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {AsyncRoute} from "./routes/AsyncRoute";
import {Nav} from "./nav";

export function Shell(props: {title: string}, {store}) {
    return (
        <div>
            <Header />
            <main class="wrapper site-main">
                <Router onChange={(props) => {
                    store.dispatch(Nav.change(props.url, props.current.attributes.matches))
                }}>
                    <Home path="/"/>
                    <AsyncRoute
                        path="/cart"
                        getComponent={() => import('./routes/Cart')}
                    />
                    <NotFound default/>
                </Router>
            </main>
            <Footer />
        </div>
    );
}
