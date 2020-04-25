import React from 'react';

export class SignUp extends React.Component{
    state = {
        username: '',
        password_p: '',
        email: '',
        about_me: '',
        credentials: ''
    }


    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        Create Your Account
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign Up</h5>
                        <form>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="userNameInput" >Username</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="userNameInput"
                                        name="userNameInput"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={e => this.setState({username: e.target.value})}   
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="passwordInput">Password</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        name="passwordInput"
                                        placeholder="Password"
                                        value={this.state.password_p}
                                        onChange={e => this.setState({password_p: e.target.value})}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="emailInput"
                                    placeholder="someone@example.com"
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="aboutInput">About Me</label>
                                <textarea 
                                    name="aboutInput" id="aboutInput" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                    <div className="form-check">
                                        <label htmlFor="isDoctor" className="form-check-label">Are you a doctor? </label>&nbsp;
                                        <input 
                                            type="checkbox"
                                            id="isDoctor"
                                            name="isDoctor"
                                        />
                                        
                                    </div>
                                    <div className="col-md" id="credBox" style={{display: 'none'}}>
                                        <label htmlFor="credInput"></label>
                                        <input 
                                            type="text"
                                            name="credInput"
                                            id="credInput"
                                            placeholder="M.D. University of School"
                                            value={this.state.credentials}
                                            onChange={e => this.setState({credentials: e.target.value})}
                                        />
                                    </div>
                                </div>
                            <hr/>
                            <div className="form-group row">
                                <div className="col">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block"
                                        id="signUpButton"
                                        name="signUpButton"
                                    >
                                        Sign Up
                                    </button>
                                </div>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}