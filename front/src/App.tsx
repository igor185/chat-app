import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import 'semantic-ui-css/semantic.min.css'

const App: React.FC = () => {

    return (
        <div className="App">
            <Chat />
        </div>
    );
};

export default App;