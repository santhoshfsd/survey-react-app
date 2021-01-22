import React from "react";

import { BrowserRouter, Route } from "react-router-dom";


const Header = () => <h2> Header </h2>

const Dashboard = () => <h2> Dashboard </h2>

const Landing = () => <h2> Landing </h2>

const Survey = () => <h2> Survey </h2>

const SurveyNew = () => <h2> Survey New </h2>


const App = () => {
    return (<div>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
            </div>
        </BrowserRouter>
    </div>);
}

export default App;