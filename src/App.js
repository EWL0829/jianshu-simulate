import React, { Component, Fragment } from 'react';
// import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import Sign from './pages/signIn';
import Write from './pages/write';
// import SignUp from './pages/signUp';

// Provider的作用实际上就是把store里的数据全部提供给了自己内部包裹的子组件
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            {/*<Header />*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/sign_in" component={Sign} />
              <Route path="/write" component={Write} />
              <Route path="/sign_up" component={Sign} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;