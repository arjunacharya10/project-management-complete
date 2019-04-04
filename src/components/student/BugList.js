import React from 'react';
import axios from 'axios';
import './BugList.css';

class BugList extends React.Component{
    
    state={
        bugl:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3000/get-bugs')
        .then(resp=>{
            this.setState({bugl:resp.data});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    
    render()
    {
        const bugs = this.props.bugl.map(bug=>{
            return(<tr style={{background: '#ecf0f1'}}>
                <td style={{color:'#2c3e50'}}>{bug.bugtitle}</td>
                <td style={{color:'#2c3e50'}}>{bug.bugtext}</td>
                <td style={{color:'#2c3e50'}}>{bug.bugstatus}</td>
            </tr>)
        });
        return(
            <table className="table" style={{background:'#2c3e50'}}>
                <tr>
                    <th style={{color:'white'}}>Title</th>
                    <th style={{color:'white'}}>Description</th>
                    <th style={{color:'white'}}>Status</th>
                </tr>
                {bugs}
            </table>
        );
    }
}

export default BugList;