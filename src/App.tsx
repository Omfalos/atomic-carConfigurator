import React from 'react';
import {Provider} from 'react-redux'
import {CarConfigurator} from './components/CarConfigurator/CarConfigurator';
import {store} from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <CarConfigurator/>
        </Provider>
    );
}

export default App;
