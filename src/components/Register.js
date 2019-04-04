import React from 'react';
import axios from 'axios';

class Register extends React.Component{

    state={
        name:'',
        id:'',
        email:'',
        password:'',
        type: ''
    }

    onNameChange=(event)=>{
        this.setState({name:event.target.value});
    }

    onIdChange=(event)=>{
        this.setState({id:event.target.value});
    }

    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }

    dropChanged=(event)=>{
        this.setState({type:event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/register',{
            name: this.state.name,
            email: this.state.email,
            id: this.state.id,
            password: this.state.password,
            type: this.state.type
        })
        .then(resp=>{
            alert('Successfully Registered , please Login.');
            this.props.onRouteChange('signin');
        })
        .catch(err=>{
            alert('User exists! please signin..');
            console.log(err);
        })
    }

    render()
    {
        return(
            <div>
                <main class="pa4 black-80 ui">
                            <form class="measure center" onSubmit={this.onFormSubmit}>
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                                <legend style={{color:'#bdc3c7'}} class="f4 fw6 ph0 mh0">Register</legend>
                                <div class="mt3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6">Name</label>
                                    <input onChange={this.onNameChange}  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"/>
                                </div>
                                <div class="mt3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6">ID</label>
                                    <input onChange={this.onIdChange}  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"/>
                                </div>
                                <div class="mt3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6">Email</label>
                                    <input onChange={this.onEmailChange}  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"/>
                                </div>
                                <div class="mv3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6">Password</label>
                                    <input onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"/>
                                </div>
                                <div>
                                    <select onChange={this.dropChanged} class="ui search dropdown">
                                        <option value="">User</option>
                                        <option value="student">Student</option>
                                        <option value="mentor">Mentor</option>
                                    </select>
                                </div><br/>
                            </fieldset>
                            <div class="">
                                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
                            </div>
                            <div class="lh-copy mt3">
                                <div style={{color:'#bdc3c7'}} onClick={()=>this.props.onRouteChange('signin')} href="#0" class="f6 link dim black db" style={{cursor: 'pointer'}}>Already Registered? Sign In</div>
                            </div>
                            </form>>
                        </main>
            </div>
        );
    }
}

export default Register;