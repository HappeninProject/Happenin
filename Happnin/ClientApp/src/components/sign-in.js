import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class signIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : {
                userName: '',
                firstName : 'getUser',
                lastName : 'getUser',
                locationId : 1,
                password: '',
                email: 'get@signon.com',
            }

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleInputChange = (event) => {
        event.preventDefault()
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log('hello world');
        this.setState({
            user : { 
                ...this.state.user,
                [name] : value
            } 
        });
        console.log(this.state);
    }

    async handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state.user))
        await fetch('user/SignOn', {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: { 'Content-Type' : 'application/json'}
        }).then(res => res.json())
        .then(response => console.log('Success: ', JSON.stringify(response)))
        .then(error => console.error('error:',error));
    }
   
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
              <div>
                <label class = 'header'>SIGN IN:</label>

                <div>
                    <label class = 'subHeader'>user name:</label>
                    <input name="userName" type = 'text' value = {this.state.userName} onChange = {this.handleInputChange}></input>
                </div>
                <div>
                    <label class = 'subHeader'>password:</label>
                    <input name="password" type = 'password' value = {this.state.password} onChange = {this.handleInputChange}></input>
                </div>

                <div>
                        <button>Submit</button>
                </div>
                <div>
                    <Link to="forgotPassword">forgot password?</Link>
                </div>
            </div>
        </form>
        );
    }

}