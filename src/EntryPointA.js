import React, {Component} from 'react';
import ReactDOM from "react-dom"

class EntryPointA extends Component {

    domId = 'SOME-ID';
    domAttribute = 'SOME-ATTR';

    state = {
        hasError: false,
        errorData: {},
        profileId: null,
    };

    //--> FIRST RENDER
    constructor(props) {
        super(props);
        let self = this.state;
        if(!self.profileId){
            let el = document.getElementById(this.domId);
            self.profileId = el.getAttribute(this.domAttribute);
            if(!self.profileId){
                this.setError('Missing Parameters','Please check your embed code');
            }
            this.setState(self);
        }

    }

    //-------------> UPDATE LIFECYCLE~1: Use setState() here
    componentWillReceiveProps(newProps) {

    }

    //-------------> UPDATE LIFECYCLE~2: Skips render() if returns false
    shouldComponentUpdate(newProps, newState){
        return true;
    }

    //-------------> UPDATE LIFECYCLE~3: NO setState() here
    componentWillUpdate (newProps, newState){

    }

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
            return <ComponentName profileId={this.state.profileId}  />
        }

        return (
            <Loader/>
        );
    }



}
ReactDOM.render(<EntryPointA />, document.getElementById(this.domId));