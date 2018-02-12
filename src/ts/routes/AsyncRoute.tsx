import {h, Component} from 'preact';
import {LoadingSvg} from "../components/icons/Svg";
const classnames = require('classnames');

import {AsyncRouteNS} from "../route-register";

export class AsyncRoute extends Component<any, any> {
    state = {
        loading: true,
        transition: false,
        component: null,
        error: false,
    };
    store: any;
    loadingId?: any;
    constructor(props, {store}) {
        super(props);
        this.store = store;
    }
    async componentDidMount() {
        try {
            const c = await this.props.getComponent();
            if (c.register) {
                const {asyncRoutes} = this.store.getState();
                if (asyncRoutes.modules.indexOf(c.name) === -1) {
                    this.store.register(c.register(this.store, this.props));
                    this.store.dispatch(AsyncRouteNS.registered(c.name));
                }
                this.setState({transition: true, error: false});
                this.loadingId = setTimeout(() => {
                    this.setState({
                        loading: false,
                        transition: false,
                        component: c.Component
                    });
                }, 300);
            }
        } catch (e) {
            this.setState({error: true});
        }
    }
    componentWillUnmount() {
        if (this.loadingId) {
            clearTimeout(this.loadingId);
        }
    }
    render() {
        const {loading, error, transition} = this.state;
        const classes = classnames({
            'async-route': true,
            'async-route--idle': !loading && !error && !transition,
            'async-route--loading': loading,
            'async-route--transition': transition,
            'async-route--error': error,
        })
        return (
            <div class={classes}>
                {this.state.loading && (
                    <LoadingSvg className="async-route__loader" />
                )}
                {!this.state.transition && this.state.component && (
                    this.state.component()
                )}
                {this.state.error && (
                    <p>Oops, Route {this.props.path} failed to load</p>
                )}
            </div>
        )
    }
}
