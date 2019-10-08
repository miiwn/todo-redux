import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from 'src/actions/login'
import { Link } from 'react-router-dom'
import history from 'src/configs/router.config'


class LoginButton extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.profile.key !== undefined) {
            history.push('/history')
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { profile: state.profile }
}
export default connect(mapStateToProps, { login })(LoginButton)