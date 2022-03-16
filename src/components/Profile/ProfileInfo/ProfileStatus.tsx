import React, { ChangeEvent } from 'react';
// import s from './Profile.module.css'

type ProfilePropsType = {
 status:string
    updateStatus:(status:string)=>void
}

class ProfileStatus extends React.Component<ProfilePropsType> {
    state = {
        EditMode: false,
        status:this.props.status
    }

    activateEditMode=()=> {
        this.setState({
            EditMode: true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            EditMode: false
        });
    this.props.updateStatus(this.state.status)

    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status:e.currentTarget.value
        })

    }

    render() {

        return (
            <>

                {!this.state.EditMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>Статус:{this.props.status}</span></div>}
                {this.state.EditMode &&
                <div><span>Статус: </span><input onBlur={this.deactivateEditMode}
                          onChange={this.onStatusChange}  value={this.state.status} type="text"/></div>
                }
            </>
        );
    }
}

export default ProfileStatus;