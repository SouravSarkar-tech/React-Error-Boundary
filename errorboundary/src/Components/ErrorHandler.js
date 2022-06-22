import React,{Component} from 'react'
import './ErrorHandler.css'

export default class ErrorHandler extends Component{
    state={
        hasError:false,
        error:"",
        errorInfo:""
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })

    }

    render(){    
       if(this.state.hasError){
        return(
            <div>
                <h5>Error Occured Or Not: <span><strong>{this.state.error.toString()}</strong></span></h5>
                <h5>Error Information: <span><strong>{this.state.errorInfo.componentStack}</strong></span></h5>
            </div>
        )
       }else{
           return this.props.children         
       }
        
    }
}