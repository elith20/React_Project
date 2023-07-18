import React, {Component} from "react";
import './Navbar.css'


export default class Navbar extends Component{
    
    // state={
    //     showNewTaskModal: true,
    // }

    // handleShowNewTaskModal = ()=>{
    //     console.log(this.state.showNewTaskModal)
    //     if(this.state.showNewTaskModal=== true){
    //         // this.setState = {
    //         //     showNewTaskModal: !this.state.showNewTaskModal
    //         // }
    //         // console.log(!this.state.showNewTaskModal)

    //         return true
    //     }else{
    //         return false
    //     }
    // } 
    

    render(){
        return <>
        <div className="menu">
            <ul>
                <button > Home</button>
                {/* <button onClick={this.handleShowNewTaskModal}> 
                 
                Add task  */}
                {/* </button> */}
                
                <button>About Us</button>
            </ul>

        </div>
        </>
    }
}