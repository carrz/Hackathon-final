import React, { Component } from 'react';

class Bracket extends Component {
    render() {

        if (this.props.type === 'b_yellow_one') {
            return <img src={window.location.origin + '/public/details/bracketA.png'} />
        } else if (this.props.type === 'b_yellow_two') {
            return <img src={window.location.origin + '/public/details/bracketA2.png'} />
        } else if (this.props.type === 'b_yellow_three') {
            return <img src={window.location.origin + '/public/details/bracketA3.png'} />
        } else if (this.props.type === 'b_pink_one') {
            return <img src={window.location.origin + '/public/details/bracketM.png'} />
        } else if (this.props.type === 'b_pink_two') {
            return <img src={window.location.origin + '/public/details/bracketM2.png'} />
        } else if (this.props.type === 'b_pink_three') {
            return <img src={window.location.origin + '/public/details/bracketM3.png'} />
        } else if (this.props.type === 'b_green_one') {
            return <img src={window.location.origin + '/public/details/bracketV.png'} />
        } else if (this.props.type === 'b_green_two') {
            return <img src={window.location.origin + '/public/details/bracketV2.png'} />
        } else if (this.props.type === 'b_green_three') {
            return <img src={window.location.origin + '/public/details/bracketV3.png'} />
        }
    }

}

export default Bracket;

