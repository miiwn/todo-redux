import React, { Component } from 'react'

class ProfileCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            disabled: false
        }
    }

    alert = () => {
        alert("ProfileCard")
    }

    render() {
        const {renderTitle, children} = this.props
        const {disabled} = this.state;

        return (
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                    <div class="header">{renderTitle(disabled)}</div>
                    <div class="meta">Friend</div>
                        {children}
                    </div>
                </div>
            </div>

        )
    }
}
export default ProfileCard