import React from 'react';
import ProfileCard from 'src/components/ProfileCard'

const ProfileCardTitle = (props) => {
    return (
        <div>
            Card Title
            <div>disabled: {props.disabled ? "Disabled" : "Active"}</div>
        </div>
    );
}

const Profile = () => {
    let ProfileCardComponet = undefined
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <ProfileCard 
                renderTitle={(disabled) => <ProfileCardTitle ref disabled={disabled} />} 
                ref={c => ProfileCardComponet = c}>
                <div>Content</div>
                </ProfileCard>

                <button onClick={() => ProfileCardComponet.alert()} >AlertButton</button>
            </div>
        
        </div>
    );
}

export default Profile;