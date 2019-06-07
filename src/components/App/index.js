import React, {Suspense, lazy} from 'react';
import './index.css';
import {Provider} from "urql";
import client from "../../client"
import Loading from '../Loading'

const UsersList = lazy(() => import("../UsersList"));

function App() {
    return (
        <Provider value={client}>
            <Suspense fallback={<Loading/>}>
                <UsersList/>
            </Suspense>
        </Provider>
    );
}

export default App;
