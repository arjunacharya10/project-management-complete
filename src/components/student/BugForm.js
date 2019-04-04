import React from 'react';
import axios from 'axios';

class BugForm extends React.Component{

    state={
        title:'',
        desc:'',
        taskid: 0,
        status:''
    }

    

    onTitleChange=(event)=>{
        this.setState({title:event.target.value});
    }
    onDescChange=(event)=>{
        this.setState({desc:event.target.value});
    }

    dropChanged=(event)=>{
        this.setState({taskid:event.target.value});
    }

    onStatusChange=(event)=>{
        this.setState({status:event.target.value})
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/bug-create',{
            bugtitle: this.state.title,
            bugtext: this.state.desc,
            bugstatus: this.state.status
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render()
    {
        const tl = ['t1','t2','t3','t4'];
        const toptions = tl.map(task=>{
            return(<option key={task} value={task}>{task}</option>)
        });
        return(
            
            <form className="ui form" style={{background:'white',padding:'20px'}} onSubmit={this.onFormSubmit}>
                <h3>Create Bug:</h3>
                <div className="field">
                    <label>Title</label>
                    <input value={this.state.value} onChange={this.onTitleChange} type="text" name="first-name" placeholder="Subject"/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea value={this.state.value} onChange={this.onDescChange} rows="2"></textarea>
                </div>
                <div>
                    <label>Tasks:</label>
                    <select onChange={this.dropChanged} className="ui search dropdown">
                        {toptions}
                    </select>
                </div><br/>
                <div>
                    <label>Bug Status:</label>
                    <select onChange={this.onStatusChange} className="ui search dropdown">
                        <option value="done">Done</option>
                        <option value="not done">Not done</option>
                    </select>
                </div><br/>
            <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default BugForm;