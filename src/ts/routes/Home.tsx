import {h} from 'preact';
import {Store} from "../components/Store";
import {Header} from "../components/Header";
import {Heros} from "../Heros/Heros.component";

export function Home(props, {store}) {
    return (
        <div data-component="Home" class="route-home">
            <h1 class="visuallyhidden">JH Store</h1>
            <Heros />
        </div>
    )
}
