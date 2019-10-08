import React, { Component } from 'react'

class LoginInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    clearText = () => {
        this.setState({
            username: '',
            password: ''
        })
    }
    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    handleChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                <div className="ui input">
                    <input type="text" placeholder='username' onChange={this.handleChangeUsername} value={username}></input>
                    <input type="password" placeholder='password' onChange={this.handleChangePassword} value={password}></input>
                </div>
            </div>
        )
    }
}

export default LoginInput