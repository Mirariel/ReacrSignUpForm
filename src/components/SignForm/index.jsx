import { Component } from "react";
import style from "./SignForm.module.css";
import classNames from "classnames";

const VALIDATORS = {
  name: /^[A-Z][a-z]{2,15}\s[A-Z][a-z]{2,15}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S{8,16}$/,
};

const INITIAL_VALUES = {
  email: "",
  password: "",
  name: "",
  passwordConfirm: "",
  checkboxValue: false,
};

class SignForm extends Component {
  state = {
    ...INITIAL_VALUES,
  };

  handleChange = ({ target: { name, value, type, checked } }) => {
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  isValid = (field) => {
    return VALIDATORS[field].test(this.state[field]);
  };

  getFieldClass = (field) => {
    return classNames(style.input, {
      [style.input]: true,
      [style.valid]: this.state[field] !== "" && this.isValid(field),
      [style.invalid]: this.state[field] !== "" && !this.isValid(field),
    });
  };

  signUp = (e) => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.setState({ ...INITIAL_VALUES });
    }
  };

  isFormValid = () => {
    const { password, passwordConfirm, checkboxValue } = this.state;
    return (
      this.isValid("name") &&
      this.isValid("password") &&
      this.isValid("email") &&
      password === passwordConfirm &&
      checkboxValue
    );
  };

  render() {
    const { name, password, email, passwordConfirm, checkboxValue } =
      this.state;
    const isMatch = passwordConfirm !== "" && passwordConfirm === password;
    const confirmClass = classNames({
      [style.input]: true,
      [style.confirm]: passwordConfirm !== "" && isMatch,
      [style.notConfirm]: passwordConfirm !== "" && !isMatch,
    });

    return (
      <form className={style.signUpForm}>
        <label className={style.label}>
          <span className={style.inputName}>FULL NAME: </span>
          <input
            className={this.getFieldClass("name")}
            type="text"
            name="name"
            placeholder="your name"
            autoFocus
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.label}>
          <span className={style.inputName}>EMAIL: </span>
          <input
            className={this.getFieldClass("email")}
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
            className={this.getFieldClass("password")}
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
            className={confirmClass}
            type="password"
            name="passwordConfirm"
            placeholder="Confirmation password"
            autoFocus
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="checkboxValue"
            checked={checkboxValue}
            onChange={this.handleChange}
          />
        </label>
        <button className={style.signBtn} onClick={this.signUp}>
          SignUp
        </button>
      </form>
    );
  }
}

export default SignForm;
