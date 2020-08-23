import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class CandidatesBoard extends Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAllCandidates());
    }

    render() {
        const { user } = this.props

        return (
            <div className="col-md-6 col-md-offset-3">
                {user.loading && <em>Loading candidates...</em>}
                {user.error && <span className="text-danger">ERRR: {user.error}</span>}
                {user.items &&
                    <ul>
                        {user.items.map((user, index) =>
                            <li key={user.id}>
                                {user.name + ' ' + user.surname}
                            </li>
                        )}
                    </ul>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

const connectedCandidatesBoard = connect(mapStateToProps)(CandidatesBoard)
export { connectedCandidatesBoard as CandidatesBoard };
