import { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location } = this.props;
        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        );
    }
}

export default User;