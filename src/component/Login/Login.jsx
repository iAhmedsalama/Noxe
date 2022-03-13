import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    user = {
       
        email: "",
        password: "",
    }

    state={
        errorMessage:""
    }

    getFormData = (e) => {

        // this.user.first_name = e.target.value
        this.user[e.target.name] = e.target.value
        // console.log(this.user);
    }

    sendData = async (e) => {
        e.preventDefault();
        // console.log("done");

        // let x = JSON.stringify(this.user);
        // console.log(x);

        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user);

        console.log(data);

        // clear form after sending data
        if (data.message === "success") {

            console.log(data);
            // store the access token
            localStorage.setItem("token", data.token)

            // if user found send him to home page
            // you are routing react by js code
            this.props.history.replace('/home');
        }

        else{
            this.setState({
                errorMessage: data.message
            })
        }
    }

    render() {
        return (

            <>
                <div className=" w-75 mx-auto mt-100">


                    <form onSubmit={this.sendData}>

                        <input onChange={this.getFormData} name="email" type="email" placeholder="Email" className="form-control mt-3" />
                        <input onChange={this.getFormData} name="password" type="password" placeholder="Password" className="form-control mt-3" />
                        
                        <div className="aler alert-danger text-center mb-0">
                        {this.state.errorMessage}
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 ">Login</button>

                    </form>


                </div>


            </>
        )
    }
}
