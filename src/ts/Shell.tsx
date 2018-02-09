import {h} from 'preact';
import {Router} from 'preact-router';
import {Home} from "./routes/Home";
import {NotFound} from "./routes/NotFound";
import {Header} from "./components/Header";

export function Shell(props: {title: string}) {
    return (
        <div>
            <p>{props.title}</p>
            <Header />
            <Router>
                <Home path="/"/>
                <NotFound default/>
            </Router>
        </div>
    );
}