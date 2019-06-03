import React from 'react';
import Group from './group'

class Groups extends React.PureComponent {
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
            <div className="container">
                {
                    this.props.info.map( group => 
                        <div className="card">
                            <Group
                                group={group}    
                            />   
                        </div>
                    )
                }
            </div>

        )
    }
}

export default Groups