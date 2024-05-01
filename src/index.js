import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Buttons from './components/Buttons';

const App = () => {
    return <div>
        <h1>Hello, React!</h1>
        <Header />
        <Buttons />
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));

