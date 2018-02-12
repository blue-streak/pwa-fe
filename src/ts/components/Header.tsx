import {h, Component} from 'preact';
import {Github, Menu, Twitter} from "./icons/Svg";
import {Global, GlobalState} from "../global";
import {HeaderBrand} from "./HeaderBrand";
import {Nav} from "./Nav";
import {Store} from "./Store";

export class Header extends Component<any, any> {
    state = {navOpen: false};
    store: any;
    constructor(props, {store}) {
        super(props);
        this.store = store;
    }
    render() {
        return (
            <Store
                selector={x => x.global}
                render={(global: GlobalState) => {
                    return (
                        <header class="site-header">
                            <HeaderBrand />
                            <Nav open={global.menu.open} />
                        </header>
                    );
                }}
            />
        )
    }
}
