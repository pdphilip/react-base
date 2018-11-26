import React, {Component} from 'react';
import ReactDOM from "react-dom"

class EntryPointB extends Component {

    state = {
        hasError: false,
        errorData: {},
        profileId: null,
    };


    componentDidMount() {
        let self = this.state;
        if(!self.profileId){
            let el = document.getElementById("WF-BOOKING-FORM");
            self.profileId = el.getAttribute("WFP");
            if(!self.profileId){
            	this.setError('Missing Parameters','Please check your embed code');
            }
            this.setState(self);
        }

    };

    //State setters
    setError = (title,detail) => {
        let self = this.state;
        self.hasError = true;
        self.errorData.title = title;
        self.errorData.detail = detail;
        this.setState(self);
    };


    //RENDER
    render() {

        if(this.state.hasError){
            return <Error title={this.state.errorData.title} detail={this.state.errorData.detail}  />;
        }
        if(this.state.profileId){
            return <Booking profileId={this.state.profileId} externalSource={true}  />
        }

        return (
            <Loader/>
        );
    }



}
ReactDOM.render(<EntryPointA />, document.getElementById("WF-BOOKING-FORM"));