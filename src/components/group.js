import React from 'react';
import Students from './students'
import '../App.css'

class Group extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            showGroup: false,
            groupMembers: {}
         };
    }

    showMembers(members) {
        this.setState({ showGroup: !this.state.showGroup, groupMembers: members})
    }
    render () {
        return (
            <div
                className="card-body"
                key={ this.props.group.groupName }
            >
                <div
                    className="tittle row col-12"    
                >    
                    <h2
                        className="col-9"
                    >
                        { this.props.group.groupName }
                    </h2>
                    <button
                        className=" col-3 btn btn-primary btn-sm"
                        onClick={()=>this.showMembers(this.props.group.memers)}
                    >
                        Show Members
                    </button>
                </div>
                {this.state.showGroup && <Students info={this.state.groupMembers}/>}
            </div>

        )
    }
}

export default Group