import React from 'react';
import './App.css';
import EyeOnLeft from "./Components/eyeOnLeft";
import EyeOnRight from "./Components/eyeOnRight";
import Eyes from "./Components/eyes";

function App() {
    return (
        <div className="App">
                <EyeOnLeft/>
                <EyeOnRight/>
                {/*<Eyes/>*/}
            <img src={'纪李/JiLi0.jpg'} alt={'Unable to load Ji Li'}/>
        </div>
    );
}

export default App;
