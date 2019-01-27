import React, { PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Sign extends PureComponent {
    constructor (props) {
        super(props);
    }

    render() {
        const { isLogIn } = this.props;

        if (!isLogIn) {
            return <Redirect to='/sign_in' />
        }
        return (
            <div>write</div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogIn: state.getIn(['signIn', 'isLogIn']),
});

// const mapDispatchToProps = (dispatch) => ({
//     logIn (accountEle, passwordEle) {
//         const action = actionCreators.getLogIn(accountEle.value, passwordEle.value);
//         dispatch(action);
//     }
// });

export default connect(mapStateToProps, null)(withRouter(Sign));