import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import Signin from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";

class App extends React.Component {
  constructor() {
   super();
​   this.state = {
​      isLogin: false,
​      workSpace: null,
​      usernfo: {},
​    };
  }

  render() {
​    const { isLogin, workSpace } = this.state;
​    return isLogin && workSpace ? (
      <div> Main.js </div>
​    ) : (
      <div className="App">
​        최상위 컴포넌트
​        <Link to="/signin">로그인</Link>
​        <Link to="/signup">회원가입</Link>
​        <Link to="/workspace">워크스페이스</Link>
​        <Switch>
​          <Route exact path="/" />
​          <Route path="/signin" render={() => <Signin isLogin={isLogin}/>} />
​          <Route path="/signup" render={() => <SignUp />} />
​          <Route path="/workspace" />
​        </Switch>
​      </div>
​    );
  }
}

export default App;