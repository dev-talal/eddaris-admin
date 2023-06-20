import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApiThunk } from "../../store/Slices/AuthSlice";
import { Box } from "../../components/ui/Elements"
import { RequestLoader } from "../../components/helpers/globalComponents";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const { loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      setemailError("Email is required");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password) {
      formIsValid = false;
      setpasswordError("Password is required");
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    dispatch(loginApiThunk({ email, password }));
  };

  return (
    !loading?
      <Box className="container" style={{ marginTop: "5rem" }}>
        <Box className="row d-flex justify-content-center">
          <Box className="col-md-4">
            <h3 className="mb-4">Login Admin</h3>
            <form id="loginform" onSubmit={loginSubmit}>
              <Box className="form-group mb-4">
                <label className="mb-2">Email address</label>
                <input
                  style={{fontSize: "16px"}}
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </Box>
              <Box className="form-group mb-4">
                <label className="mb-2">Password</label>
                <input
                  style={{fontSize: "16px"}}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </Box>
              <button type="submit" disabled={ loading } className="btn btn-primary">
                Login
              </button>
            </form>
          </Box>
        </Box>
      </Box>
    :
    <RequestLoader />
  );
};

export default Login;
