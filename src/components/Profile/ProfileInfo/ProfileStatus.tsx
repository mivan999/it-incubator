import React, { ChangeEvent } from 'react';
// import s from './Profile.module.css'

type ProfilePropsType = {
    status:string
    updateStatus:(status:string)=>void

}
type StateType = {
    editMode: boolean
    status: string

}
class ProfileStatus extends React.Component<ProfilePropsType, StateType> {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode=()=> {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        });
    this.props.updateStatus(this.state.status)

    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status:e.currentTarget.value
        })

    }
componentDidUpdate(prevProps:ProfilePropsType,prevState:StateType){

        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
}
    render() {

        return (
            <>

                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>Статус:{this.props.status|| "-----"}</span></div>}
                {this.state.editMode &&
                <div><span>Статус: </span><input onBlur={this.deactivateEditMode}
                          onChange={this.onStatusChange}  value={this.state.status } type="text"/></div>
                }
            </>
        );
    }
}

export default ProfileStatus;