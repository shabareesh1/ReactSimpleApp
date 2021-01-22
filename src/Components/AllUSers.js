import React, {Component} from 'react';
import Users from "./User";
import axios from "axios";

class AllUSers extends Component {

state= {
users:[],
    loading: false,
    Clickeduser:[],
    userClicked: false
}
    componentDidMount() {
        const currentpageurl = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(`${currentpageurl}`).then(response => {
            if(response.status===200 ) {
                this.setState({
                    users: response.data,
                    loading: true
                })
            }
        }
        ).catch(error =>{
            console.log(error)
        })


    }
    handleUserClick =(item) =>{
    console.log(item)
        const user = [];
    user.push(item)
   this.setState({...this.state, Clickeduser: user , userClicked: true} ,()=>{

   })

    }
    handleClose=()=>{
    window.location.reload();
    }



    render() {
        return (
            <div className={`${this.state.Clickeduser.length > 0? 'bg': null} `}>
                <h1 style={{ marginLeft:'20px'}}>Simple React Application</h1>
                {this.state.loading ? <Users user={this.state.users} Clickeduser={this.handleUserClick} userClicked={this.state.userClicked} /> : (<div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}
                {this.state.Clickeduser.length ? (<div className="popup">
                    {this.state.Clickeduser.map((user ,i) =>{
                        return <div  className={"userheader"} key={i}>

                           Title: {user.title}
                            <button className={"button"} style={{fontSize:'20px'}} onClick={this.handleClose}>&times;</button>
            <div>
                <div  className={"userbody"}> Body:{user.body} </div>
            </div>
                        </div>
                        })}

                </div>) : null }



            </div>
        );
    }
}

export default AllUSers;