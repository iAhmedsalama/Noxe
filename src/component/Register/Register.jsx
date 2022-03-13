import React, { Component } from 'react'
import axios from 'axios'


export default class Register extends Component {

    user = {
        first_name: "",
        last_name: "",
        email: "",
        age: "",
        password: "",
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

        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup", this.user);

        console.log(data);

        // clear form after sending data
        if (data.message === "success") {
            e.target.reset();
        }
    }

    render() {


        return (


            <>

                <div className=" w-75 mx-auto mt-100">


                    <form onSubmit={this.sendData}>

                        <input onChange={this.getFormData} name="first_name" placeholder="First Name" className="form-control mt-3" />
                        <input onChange={this.getFormData} name="last_name" placeholder="Last Name" className="form-control mt-3" />
                        <input onChange={this.getFormData} name="email" type="email" placeholder="Email" className="form-control mt-3" />
                        <input onChange={this.getFormData} name="age" placeholder="Age" className="form-control mt-3" />
                        <input onChange={this.getFormData} name="password" type="password" placeholder="Password" className="form-control mt-3" />


                        <button type="submit" className="btn btn-primary mt-3 ">register</button>

                    </form>


                </div>

            </>

        )
    }
}
