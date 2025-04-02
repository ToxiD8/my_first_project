import {Routes, Route} from 'react-router-dom'

import GenerateUser from './components/GenerateUser.js'

function App() {
    return (
        <div>
            <header>
                <h1>Random User Generator</h1>
            </header>
            <main>
                <div className="frame card_offset">
                    <div className="card">
                        <Routes>
                            <Route path="/" element={ <GenerateUser /> }>
                            </Route>
                        </Routes>
                    </div>
                </div> 
            </main>
        </div>
        );
}

export default App;
