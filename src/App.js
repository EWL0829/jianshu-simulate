import React, { Component } from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

// Provider的作用实际上就是把store里的数据全部提供给了自己内部包裹的子组件
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail" component={Detail} />
              <Route path="/sign_in" component={SignIn} />
              <Route path="/sign_up" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;