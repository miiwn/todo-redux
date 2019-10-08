import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router'
import { Link } from 'react-router-dom'
import history from 'src/configs/router.config'
import TodoPage from 'src/containers/todo/TodoPage'
import LoginPage from 'src/containers/login/LoginPage'
// import NotFoundPage from './containers/not-found/NotFoundPage'
import HistoryPage from './containers/history/HistoryPage';
import ProfilePage from './containers/profile/ProfilePage';
import Authenticate from 'src/containers/Authenticate'


class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Link to="/">Login</Link>
                    <Link to="/list">List</Link>
                    <Link to="/history">History</Link>

                    <Switch>
                        <Route exact path="/" component={TodoPage} />
                        <Route path="/list" 
                            render={() => (
                                <Authenticate>
                                    <TodoPage />
                                </Authenticate>
                            )}
                        />
                        <Route path="/history" render={ProfilePage} />
                        {/* <Route component={NotFoundPage} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

