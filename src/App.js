import React, { Suspense, useEffect } from "react";
import "components/FontawsomeIcons";

import "./scss/App.scss";
import "./scss/dark.scss";

import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import PageNotFound from "pages/PageNotFound";
import Signup from "pages/Signup";

function App() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                            <Signup/>
                        </Route>
                        <Route>
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
