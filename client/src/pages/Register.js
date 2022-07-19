import {useState , useEffect} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector,} from 'react-redux';
import {toast} from "react-toastify";
// import {login} from "../redux/features/authSlice";

const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
};
const Register = () => {
    const [formValue,setFormValue] =useState(initialState);
    const {loading,error} = useSelector((state) => ({...state.auth}))
    const { email, password,firstName,lastName,confirmPassword } = formValue;
    const dispatch =useDispatch();
    const navigate =useNavigate();

    useEffect(() => {
        error && toast.error(error);
    },[error])
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (email && password) {
        //     dispatch(login({ formValue, navigate, toast }));
        // }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return(
        <div style={{ maxWidth:"450px",alignContent:"center",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} >
            <MDBCard alignment="center" >
                <MDBIcon fas icon ="user-circle" className="fa-3x mt-5"/>
                <h5>Sign Up</h5>
                <MDBCardBody>
                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                        <div className="col-md-6">
                            <MDBInput
                                label="FirstName"
                                type="text"
                                value={firstName}
                                name="firstName"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide your first name "
                            />
                        </div>
                        <div className="col-md-6">
                            <MDBInput
                                label="LastName"
                                type="text"
                                value={lastName}
                                name="lastName"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide your last name "
                            />
                        </div>
                        <div className="col-md-12">
                            <MDBInput
                                label="Password"
                                type="password"
                                value={password}
                                name="password"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide your password "
                            />
                        </div>
                        <div className="col-md-12">
                            <MDBInput
                                label="Password Confirm"
                                type="password"
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={onInputChange}
                                required
                                invalid
                                validation="Please provide your password "
                            />
                        </div>
                        <div className="col-12">
                            <MDBBtn style={{width: "100%"}} className="mt-2">
                                {loading &&(
                                    <MDBSpinner size="sm" role="status"
                                                tag ="span"
                                                className="me-2"
                                    />
                                )}
                                Register
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to ='/login'><p>Already have  an account ? Sign In</p></Link>
                </MDBCardFooter>
            </MDBCard>
        </div>
    )
}
export default Register;