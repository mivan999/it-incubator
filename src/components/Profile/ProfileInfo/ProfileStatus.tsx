import React from 'react';
import s from './Profile.module.css'

type ProfilePropsType = {

}

class ProfileStatus extends React.Component<ProfilePropsType> {
    state = {
        EditMode: true
    }

    activateEditMode() {
        this.setState({
            EditMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            EditMode: false
        })

    }

    render() {

        return (
            <>
                {!this.state.EditMode &&
                <div onDoubleClick={this.activateEditMode.bind(this)}>
                    <span>yo</span></div>}
                {this.state.EditMode &&
                <div><input onBlur={this.deactivateEditMode.bind(this)}
                            value={'yo yo'} type="text"/></div>
                }
            </>
        );
    }
}

export default ProfileStatus;