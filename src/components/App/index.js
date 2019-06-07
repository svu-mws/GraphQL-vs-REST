import React, {Suspense, lazy} from 'react';
import './index.css'
import Loading from '../Loading'

const UsersList = lazy(() => import("../UsersList"));

function App() {
    return (
        <Suspense fallback={<Loading/>}>
            <UsersList/>
        </Suspense>
    );
}

export default App;
