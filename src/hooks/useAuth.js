import { useEffect } from "react";
import { signIn, signUp } from "../api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants";
export const useAuth = () => {
  const initialStatus = { userId: "", password: "" };
  const location = useLocation();
  console.log(location);
  const redirectURL = new URLSearchParams(location.search).get("redirectKey");
  console.log(redirectURL);

  const navigate = useNavigate();
  const redirect = () => {
    const usertype = localStorage.getItem(USER_TYPES);
    const token = localStorage.getItem(TOKEN);
    console.log(usertype);
    console.log(token);
    // const usertype = localStorage.getItem("userTypes");
    // const token = localStorage.getItem("token");
    
    if (!usertype || !token) {
      return;
    }
    if (redirectURL) {
      navigate(redirectURL);
    } else if (usertype === userTypes.ADMIN) {
      navigate("/admin");
    } else if (usertype === userTypes.CUSTOMER) {
      navigate("/customer");
    } else if (usertype === userTypes.CLIENT) {
      navigate("/client");
    }
  };

  useEffect(() => {
    redirect();
  }, []);

  const onlogin = async (values, { setSubmitting }) => {
    const userDetails = { userId: values.userId, password: values.password };
    // console.log(userDetails);
    const loginResponse = await signIn(userDetails);
    // console.log(loginResponse)
    setSubmitting(false);
    redirect();
  };

  return { initialStatus, onlogin };
};

export const useSignUp = () => {
  useEffect(() => {
    redirect();
  }, []);
  const initialStatus = {
    userId: "",
    password: "",
    userTypes: "",
    email: "",
    name: "",
  };

  const navigate = useNavigate();

  const redirect = () => {
    const usertype = localStorage.getItem(USER_TYPES);
    const token = localStorage.getItem(TOKEN);
    console.log(usertype);
    console.log(token);
    if (!usertype || !token) {
      return;
    }
    if (usertype === userTypes.ADMIN) {
      navigate("/admin");
    } else if (usertype === userTypes.CLIENT) {
      navigate("/client");
    } else {
      navigate("/login");
    }
  };
  const onSignUp = async (values) => {
    const userDetails = {
      name: values.name,
      email: values.email,
      userId: values.userId,
      password: values.password,
      userTypes: values.userTypes,
    };
    const signUpResponse = await signUp(userDetails);
    if (signUpResponse.status === 201) {
      navigate("/login");
    }
  };
  return { initialStatus, onSignUp };
};
