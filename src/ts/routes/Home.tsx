import {h} from 'preact';
import {Store} from "../components/Store";
import {Header} from "../components/Header";
import {Heros} from "../Heros/Heros.component";

export function Home(props, {store}) {
    return (
        <div data-component="Home">
            <Heros />
        </div>
    )
}
