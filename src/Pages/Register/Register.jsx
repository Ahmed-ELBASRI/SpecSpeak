import React from "react";
import "./register.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <>
      <PageHeader pageName={"Register Page"} />
      <section className="login_register section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-xs-12">
              <div className="register">
                <h4 className="login_register_title">Create a new account:</h4>
                <InputFiled
                  label={"Username"}
                  name={"userName"}
                  type={"text"}
                  placeholder={""}
                  required={true}
                />
                <InputFiled label={"Full Name"} name={"name"} type={"text"} />
                <InputFiled
                  label={"Email Address"}
                  name={"email"}
                  type={"email"}
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
                    sign up now
                  </button>
                </div>
                <div className="form-group col-lg-12">
                  <p>
                  Already have an account? <Link className="login-here" to="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default Register;
