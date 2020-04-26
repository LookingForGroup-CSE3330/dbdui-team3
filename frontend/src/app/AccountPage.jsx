import React from "react";
import {Link} from 'react-router-dom';
import {AccountRepository} from './../api/accountRepository';
import { QuestionRepository } from "../api/questionRepository";
import { AnswerRepository } from "../api/answerRepository";

export class AccountPage extends React.Component {
  accountRepository = new AccountRepository();
  questionRepository = new QuestionRepository();
  answerRepository = new AnswerRepository();

  state = {
    account: [],
    posts: [],
    editEmail: false,
    editAbout: false,
    newEmail: "",
    newAbout: ""
  };

  handleEmailCheck = this.handleEmailCheck.bind(this);
  handleAboutCheck = this.handleAboutCheck.bind(this);

componentDidMount(){

  let username = this.props.match.params.username;
  if(username){
    this.accountRepository.getAccount(username)
    .then(result => {
      this.setState({account: result});
    });
    
    this.questionRepository.getPost(username)
    .then(res =>{
      //console.log(res);
      this.setState({posts: res});
    })
  }

}

handleEmailCheck(){
  this.setState({editEmail: !this.state.editEmail});
}

handleAboutCheck(){
  this.setState({editAbout: !this.state.editAbout});
}


onEditEmail(email){
  console.log("Email Change Below")
  console.log(email);
  if(email.length >= 5){
    console.log("I ran")
    let username = this.props.match.params.username;
    this.accountRepository.updateEmail(username, email)
  }
  else{
    alert("Not a valid Email!")
  }
}

onEditAbout(about_me){
  if(about_me.length >= 5){
    let username = this.props.match.params.username;
    this.accountRepository.updateAbout(username, about_me)
  }
  else{
    alert("About Me is too short!")
  }
}


  render() {
    const hiddenEmail = this.state.editEmail
    ? <div className="form-group" id="credBox">
         <label htmlFor="credInput1">New Email</label>
         <input 
             type="text"
             name="credInput1"
             id="credInput1"
             placeholder="email@mail.com"
             className="form-control"
             value={this.state.newEmail}
             onChange={e => this.setState({newEmail: e.target.value})}
         />
        <button
          type="button"
          className="btn btn-success btn-xs"
          title="Edit"
          onClick={() => this.onEditEmail(this.state.newEmail)}
        >
        Submit Email Change
        </button>
     </div> 
     : null;

     const hiddenAbout = this.state.editAbout
     ? <div className="form-group" id="credBox">
          <label htmlFor="credInput2">New About</label>
          <input 
              type="text"
              name="credInput2"
              id="credInput2"
              placeholder=""
              className="form-control"
              value={this.state.newAbout}
              onChange={e => this.setState({newAbout: e.target.value})}
          />
          <button
            type="button"
            className="btn btn-success btn-xs"
            title="Edit"
            onClick={() => this.onEditAbout(this.state.newAbout)}
          >
          Submit About Change
          </button>
      </div> 
      : null;
    return (
      <>     
      {/*Profile Part */}
      {console.log("here")}
      {console.log(this.state.account)}
      <div className="container-fluid">
                <div
                  className="container"
                  style={{ width: "20vw", float: "left", paddingTop: "3em" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <p style={{ fontWeight: "bold" }}>My Profile</p>
                    </li>
                    {this.state.account.map(account => (
                    <li className="list-group-item" style={{ height: "80vh" }} key={account.usr_id}>
                      <div className="card-body">
                        <h5 className="card-title">{account.username}</h5>
                        <p className="card-text">
                          {account.about_me}
                        </p>
                        <div className="form-check">
                        <label htmlFor="editA" className="form-check-label">Edit About</label>&nbsp;
                        <input 
                            type="checkbox"
                            id="editA"
                            name="editA"
                            checked={this.state.editAbout}
                            onChange={this.handleAboutCheck}
                        />
                    </div>
                    {hiddenAbout}
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{account.email}</li>
                      </ul>
                      <div className="form-check">
                        <label htmlFor="editE" className="form-check-label">Edit Email</label>&nbsp;
                        <input 
                            type="checkbox"
                            id="editE"
                            name="editE"
                            checked={this.state.editEmail}
                            onChange={this.handleEmailCheck}
                        />
                    </div>
                    {hiddenEmail}
                    </li>
                    ))}
                  </ul>
                </div>
                {/*Comments*/}
                <div
                  className="container"
                  style={{ width: "80vw", paddingTop: "3em" }}
                >
                  <ul className="list-group">
                    <li className="list-group-item text-center">
                      <p style={{ fontWeight: "bold" }}>My Questions</p>
                    </li>
                    {this.state.posts.map(post => (
                    <li className="list-group-item" key={post.post_id}>
                      <div className="row">
                        <div className="col-xs-10 col-md-11">
                          <div>
                            <h4>
                              {post.question}
                            </h4>
                          </div>
                          <p>{post.creation_date}</p>
                          <Link className="btn btn-link"  to={'../answers/' + post.post_id}>View Answer(s)</Link>
                        </div>
                      </div>
                    </li>                
                    ))}
                  </ul>
                </div>
              </div>
      </>
    );
  }
}