import { useState } from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
// import AuthService from "../../Components/Services/AuthService";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration, Link } from "react-router-dom";
import "./register.css";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(firstName, lastName, email, password);
      // Redirect to homepage or dashboard after registration
      navigate("/");
    } catch (error) {
      console.error("Failed to register", error);
      // Handle registration error
    }
  };

  return (
    <>
      <PageHeader pageName={"Register Page"} />
      <section className="login_register section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-xs-12">
              <div className="register">
                <h4 className="login_register_title">Create a new account:</h4>
                <form onSubmit={handleRegister}>
                  <InputFiled
                    label={"First Name"}
                    name={"firstName"}
                    type={"text"}
                    placeholder={"Enter your first name"}
                    required={true}
                    action={(e) => setFirstName(e.target.value)}
                  />
                  <InputFiled
                    label={"Last Name"}
                    name={"lastName"}
                    type={"text"}
                    placeholder={"Enter your last name"}
                    required={true}
                    action={(e) => setLastName(e.target.value)}
                  />
                  <InputFiled
                    label={"Email Address"}
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
                      Register Now
                    </button>
                  </div>
                  <div className="form-group col-lg-12">
                    <p>
                      Already have an account?{" "}
                      <Link className="login-here" to="/login">
                        Login here
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

export default Register;
