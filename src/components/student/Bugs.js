import React from 'react';
import BugForm from './BugForm';
import BugList from './BugList';
import axios from 'axios';

class Bugs extends React.Component{

    state={
        currentRoute:'buglist',
        clicked:false,
        bugl:[]
    }

    onRouteChange=(route)=>{
        this.setState({clicked:!this.state.clicked,currentRoute:route});
    }

    onFromSubmit=(event)=>{
        console.log(event)
    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/get-bugs')
        .then(resp=>{
            console.log(resp.data);
            this.setState({bugl:resp.data});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:3000/get-bugs')
        .then(resp=>{
            console.log(resp.data);
            this.setState({bugl:resp.data});
        })
        .catch(err=>{
            console.log(err);
        })
    }


    render()
    {return(
        <div>
            <h1 className="ui header" style={{marginLeft:'30px',marginTop:'30px',color:'white'}}>BUGS</h1>
            <h2 className="ui button" style={{marginLeft:'30px',marginTop:'30px'}} onClick={()=>{
                if(!this.state.clicked)
                    this.onRouteChange('create')
                else
                    this.onRouteChange('buglist')
                
                }} style={{curson:'pointer'}}>{this.state.clicked?'x':'+'}</h2>
            <div className="ui container">
                {
                    this.state.currentRoute==='create'?
                    <BugForm onFromSubmit={this.onFromSubmit}/>:
                    <div></div>
                }
                <div style={{marginTop:'20px'}}>
                    {
                        this.state.bugl.length?
                        <BugList bugl={this.state.bugl}/>:
                        <div></div>
                    }
                </div>
            </div>
        </div>
    );}
}

export default Bugs;