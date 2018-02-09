import {h} from 'preact';
import {connect} from 'preact-redux';

function App(props, {store}) {
    return (
        <div>
            <button
                type="button"
                onClick={() => store.dispatch({type: 'load', payload: 'oops!'})}
            >
                Load data
            </button>
            {props.product && (
                <pre><code>{JSON.stringify(props.product, null, 2)}</code></pre>
            )}
        </div>
    )
}

export const App_Connected = connect(x => x.main)(App);