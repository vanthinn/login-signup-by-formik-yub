import "./App.css";
import SignUp from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <div className="flex justify-evenly items-center bg-slate-200 min-h-[713px] ">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
