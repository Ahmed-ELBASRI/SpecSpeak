import  { useState } from "react";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
// import AuthService from "../../Components/Services/AuthService";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../Context/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <>
      <PageHeader pageName={"Login Page"} />
      <section className="login_register section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-xs-12">
              <div className="login">
                <h4 className="login_register_title">Already a member? Sign in:</h4>
                <form onSubmit={handleLogin}>
                  <InputFiled
                    label={"Email address"}
                    name={"email"}
                    type={"email"}
                    placeholder={"Enter your email address"}
                    required={true}
                    action={(e) => setEmail(e.target.value)}
                  />
                  <InputFiled
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    placeholder={"Enter your password"}
                    required={true}
                    action={(e) => setPassword(e.target.value)}
                  />
                  <div className="form-group col-lg-12">
                    <button className="home_one" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="form-group col-lg-12">
                    <p>
                      {"Don't have an account?"}{" "}
                      <Link className="register-here" to="/register">
                        Register here
                      </Link>
                    </p>
                  </div>
                </form>
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
