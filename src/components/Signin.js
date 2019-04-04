import React from 'react';
//import console = require('console');
import axios from 'axios';


class Signin extends React.Component{


    state={
        id:'',
        email: '',
        password: ''
    };

    onFormSubmit=(event)=>{
        console.log(this.state);
        event.preventDefault();
        axios.post('http://localhost:3000/signin',{
            id:this.state.id,
            email:this.state.email,
            password:this.state.password
        })
        .then(resp=>{
            this.props.mainRoute('main');
        })
        .catch(err=>{
            alert('Invalid email password');
        })
    }

    onEmailChange=(event)=>{
        this.setState({email: event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({password: event.target.value});
    }

    onIdChange=(event)=>{
        this.setState({id:event.target.value});
    }



    render()
    {
        return(
            <div >
                <main class="pa4 black-80 ui">
                            <form class="measure center" onSubmit={this.onFormSubmit}>
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                                <legend style={{color:'#bdc3c7'}} class="f4 fw6 ph0 mh0">Sign In</legend>
                                <div class="mt3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6">ID</label>
                                    <input value={this.state.id} onChange={this.onIdChange}  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"/>
                                </div>
                                <div class="mt3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6" for="email-address">Email</label>
                                    <input value={this.state.email} onChange={this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                                </div>
                                <div class="mv3">
                                    <label style={{color:'#bdc3c7'}} class="db fw6 lh-copy f6" for="password">Password</label>
                                    <input value={this.state.password} onChange={this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                                </div>
                                <label style={{color:'#bdc3c7'}} class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                            </fieldset>
                            <div class="">
                                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                            </div>
                            <div class="lh-copy mt3">
                                <div style={{color:'#bdc3c7'}} onClick={()=>this.props.onRouteChange('register')} href="#0" class="f6 link dim black db" style={{cursor: 'pointer'}}>Sign up</div>
                            </div>
                            </form>
                        </main>
            </div>
        );
    }
}

export default Signin;