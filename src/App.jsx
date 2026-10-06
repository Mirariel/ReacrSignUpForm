import SignForm from "./components/SignForm";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.formContainer}>
      <div className={style.iconCircle}>
        <i className={`fa-regular fa-pen-to-square ${style.icon}`}></i>
      </div>
      <h1 className={style.h1}>create your account</h1>
      <SignForm />
    </div>
  );
}

export default App;
