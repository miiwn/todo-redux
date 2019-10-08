import React from 'react';
import { connect } from 'react-redux'


// const requireAuthenticate = (ChildComponent) => {
    
//     const Authenticate = (props) => {
//         if (props.profile.key === undefined) {
//             return null;
//         } else {
//             return <ChildComponent {...props} />
//         }
//     }

//     const mapStateToProps = (state) => {
//         return { profile: state.profile }
//     }
    
//     return connect(mapStateToProps)(Authenticate)
// }

// export default requireAuthenticate;

const Authenticate = (props) => {
    if (props.profile.key === undefined) {
        return null;
    } else {
        return props.children
    }
}

const mapStateToProps = (state) => {
    return { profile: state.profile }
}

export default connect(mapStateToProps)(Authenticate)