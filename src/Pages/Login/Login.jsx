import React from "react";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <>
      <PageHeader pageName={"Login Page"} />
      <section className="login_register section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-xs-12">
              <div className="login">
                <h4 className="login_register_title">Already a member? Sign in:</h4>
                <InputFiled
                  label={"Username"}
                  name={"userName"}
                  type={"text"}
                  placeholder={""}
                  required={true}
                />
                <InputFiled
                  label={"Password"}
                  name={"password"}
                  type={"password"}
                  placeholder={""}
                  required={true}
                />

                <div className="form-group col-lg-12">
                  <button className="home_one" type="submit" name="submit">
                    Login
                  </button>
                </div>
                <div className="form-group col-lg-12">
                  <p>
                    Don't have an account? <Link className="register-here" to="/register">Register here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Login;
