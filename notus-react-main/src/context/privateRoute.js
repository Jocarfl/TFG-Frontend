import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => (
                isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to='/auth' />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(PrivateRoute);