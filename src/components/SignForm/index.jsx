import { Component } from "react";
import style from "./SignForm.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
  name: "",
  passwordConfirm: "",
};

class SignForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_VALUES,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  signUp = (e) => {
    const { passwordConfirm, password } = this.state;
    e.preventDefault();
    if (password && passwordConfirm === password) {
      this.setState({ ...INITIAL_VALUES });
    }
  };

  render() {
    const { name, password, email, passwordConfirm } = this.state;
    const isMatch = passwordConfirm !== "" && passwordConfirm === password;
    return (
      <form className={style.signUpForm}>
        <label className={style.label}>
          <span className={style.inputName}>FULL NAME: </span>
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="your name"
            autoFocus
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={style.label}>
          <span className={style.inputName}>EMAIL: </span>
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="your email"
            autoFocus
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.label}>
          <span className={style.inputName}>PASSWORD: </span>
          <input
            className={style.input}
            type="password"
            name="password"
            placeholder="your password"
            autoFocus
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.label}>
          <span className={style.inputName}>CONFIRM PASSWORD: </span>
          <input
            className={`${style.input} ${isMatch ? style.confirm : style.notConfirm}`}
            type="password"
            name="passwordConfirmation"
            placeholder="Confirmation password"
            autoFocus
            onChange={this.handleChange}
          />
        </label>
        <button className={style.signBtn} onClick={this.signUp}>SignUp</button>
      </form>
    );
  }
}

export default SignForm;
