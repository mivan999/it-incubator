import React from 'react';
import {UserPropsType} from './UsersContainer';
import s from './Users.module.css'
import styles from './Users.module.css'
import axios from 'axios';
import ava from './../../assets/ava.jpeg'
import {UserType} from "../../redux/users-reducer";

type responseType = {
    items: UserType[]
    //     [
    //     id: number,
    //     name: string,
    //     photos: {
    //         small?: string,
    //         large?: string
    //     },
    //     followed: boolean,
    //     status?: string
    // ],
    totalCount: number,
    error: string,
}

class Users extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data.items)
        })

    }
    onPageChanges=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            console.log(response.data.items)
        })

    }
    render() {
        const setFollow = (id: string, f: boolean) => {
            if (!f) this.props.follow(id)
            if (f) this.props.unfollow(id)
        }
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= pageCount; i++) {
            page.push(i)
        }
        console.log('page=',this.props)
        return (
            <div className={s.wrap}>
                <div>
                   
                    {
                        page.map(p => (
                            <span className={this.props.currentPage===p ? styles.selectedPage:""} onClick={()=>{this.onPageChanges(p)}}>{p}</span>
                        )
                    )
                    }
                </div>
                {this.props.users.map((u: UserType) => (
                    <div>
                        <div className={s.name}>{u.name}</div>
                        <div>
                            <img className={s.imgAva} src={u.photos.small != null ? u.photos.small : ava} alt="img"/>
                        </div>
                        <div>{u.status}
                        </div>
                        <div>
                            <button onClick={() => {
                                setFollow(u.id, u.followed)
                            }}>
                                {u.followed ? "follow" : "unfollow"}
                            </button>
                        </div>
                    </div>))}
            </div>
        );
    }
}

export default Users;