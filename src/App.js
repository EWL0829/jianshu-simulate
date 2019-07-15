import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Provider的作用实际上就是把store里的数据全部提供给了自己内部包裹的子组件
class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Switch>
                            <Route exact path="/" component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/home');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                            <Route path="/detail/:id" exact component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/detail');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                            <Route path="/sign_in" component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/signIn');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                            <Route path="/write" component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/write');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                            <Route path="/sign_up" component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/signIn');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                            <Route path="/option" component={
                                Loadable({
                                    loader: () => {
                                        return import('./pages/fitter');
                                    },
                                    loading () {
                                        return <div>正在加载……</div>
                                    },
                                })
                            }/>
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
