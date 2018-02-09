import { connect } from 'preact-redux';
import dlv = require('dlv');

const WithStore = (props) => {
    if (props.render) {
        return props.render(props.state, props.dispatch);
    }
    return props.children[0].call(void 0, props.state, props.dispatch);
};

const defaultSelector = (state) => state; // pass the whole state by default

export const Store: any = connect(
    // the second parameter of this mapStateToProps is the component's props.
    // We are using this to pass custom selector as `mapStateToProps` directly!
    (state, { selector = defaultSelector, path }) => {
        if (typeof path === 'string') {
            const lookup = dlv(state, path);
            if (typeof lookup === 'undefined') {
                console.error(`Store Component: '${path}' not found on state tree`);
            }
            return {
                state: dlv(state, path),
            };
        }
        return {
            state: selector(state),
        };
    },
    (dispatch) => ({ dispatch }),
)(WithStore as any);

export function Dispatch(props, context) {
    if (props.render) {
        return props.render(props.state, props.dispatch);
    }
    return props.children[0].call(void 0, context.store.dispatch);
}
