import React, { Component } from 'react';
import { userActions } from '../_actions';
import { connect } from 'react-redux';

class AddCandidate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            yearsOfExp: '',
            dateOfApp: '',
            position: '',
            avatar: '',
            submitted: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        var today = new Date();

        const newCandidate = {
            name: this.state.name,
            surname: this.state.surname,
            yearsOfExp: this.state.yearsOfExp,
            dateOfApp: today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate(),
            position: this.state.position,
            avatar: this.state.selectedFile.files.items(0).name
        };
        const { dispatch } = this.props;

        if (newCandidate) {
            dispatch(userActions.addCandidate(newCandidate))
        }
    }

    onFileChangeHandler = (e) => {
        e.preventDefault();

        this.setState({
            selectedFile: e.target.files[0]
        });

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        formData.append('candidateName', this.state.name)

        const { dispatch } = this.props;

        dispatch(userActions.addAvatar(formData))
    }

    render() {
        const { adding } = this.props;
        const { name, surname, yearsOfExp, position, avatar, submitted } = this.state
        return (
            <div className="col-lg-8 offset-lg-2">
                <h2>Add Candidate</h2>
                <form name="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="name" value={name} onChange={this.onChange} className={'form-control' + (submitted && !name ? ' is-invalid' : '')} />
                        {submitted && !name &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Surname</label>
                        <input type="text" name="surname" value={surname} onChange={this.onChange} className={'form-control' + (submitted && !surname ? ' is-invalid' : '')} />
                        {submitted && !surname &&
                            <div className="invalid-feedback">Surname is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Years Of Experience</label>
                        <input type="number" min="1" max="50" name="yearsOfExp" value={yearsOfExp} onChange={this.onChange} className={'form-control' + (submitted && !yearsOfExp ? ' is-invalid' : '')} />
                        {submitted && !yearsOfExp &&
                            <div className="invalid-feedback">Years of Experience is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" name="position" value={position} onChange={this.onChange} className={'form-control' + (submitted && !position ? ' is-invalid' : '')} />
                        {submitted && !position &&
                            <div className="invalid-feedback">Position is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Avatar</label>
                        <input type="file" accept="image/*" name="avatar" value={avatar} onChange={this.onFileChangeHandler} className={'form-control' + (submitted && !avatar ? ' is-invalid' : '')} />
                        {submitted && !avatar &&
                            <div className="invalid-feedback">Avatar is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {adding && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { adding } = state.user;
    return {
        adding
    };
}
const connectedAddCandidate = connect(mapStateToProps)(AddCandidate)
export { connectedAddCandidate as AddCandidate };
