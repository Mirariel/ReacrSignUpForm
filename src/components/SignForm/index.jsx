import { Component } from "react";

const INITIAL_VALUES = {
  email: "",
  password: "",
  name: "",
  passwordConfirm: false,
};

class SignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: INITIAL_VALUES.name,
      password: INITIAL_VALUES.password,
      email: INITIAL_VALUES.email,
      passwordConfirm: INITIAL_VALUES.passwordConfirm,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };
  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ password: value });
  };
  handleEmailChange = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  signUp = (e) => {
    const { passwordConfirm } = this.state;
    e.preventDefault();
    if (passwordConfirm) {
      this.setState({ INITIAL_VALUES });
    }
  };

  confirmationPassword = ({ target: { value } }) => {
    const { password } = this.state;
    this.setState({ passwordConfirm: value === password });
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <div>
        <h1>Sign-Up Form</h1>
        <form>
          <label>
            <span>Name: </span>
            <input
              type="text"
              name="name"
              placeholder="your name"
              autoFocus
              value={name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <span>Email: </span>
            <input
              type="email"
              name="email"
              placeholder="your email"
              autoFocus
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            <span>Password: </span>
            <input
              type="password"
              name="password"
              placeholder="your password"
              autoFocus
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <label>
            <span>Password confirmation: </span>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirmation password"
              autoFocus
              onChange={this.confirmationPassword}
            />
          </label>
          <button onClick={this.signUp}>SignUp</button>
        </form>
      </div>
    );
  }
}

export default SignForm;
