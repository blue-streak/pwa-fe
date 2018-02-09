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
                            <button
                                type="button"
                                onClick={() => store.dispatch({type: 'load', payload: 'oops!'})}
                            >
                                Load data
                            </button>
                            {main.product && (
                                <pre><code>{JSON.stringify(main.product, null, 2)}</code></pre>
                            )}
                        </div>
                    );
                }}
            />
        </div>
    )
}