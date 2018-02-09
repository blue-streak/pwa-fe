import {h} from 'preact';
import {connect} from 'preact-redux';

function App(props) {
    return (
        <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    )
}

export const App_Connected = connect(x => x.main)(App);