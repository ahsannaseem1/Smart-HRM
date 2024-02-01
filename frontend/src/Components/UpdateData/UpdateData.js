import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../state";
import { useSelector } from "react-redux";
import axios from "axios";

const UpdateData=async()=>{
    console.log("update data called")
    const dispatch=useDispatch();
    const employeeData = useSelector((state) => state.employeeData);
    const data={
        email:employeeData.user.email,
        password:employeeData.user.password
    }
    console.log(data);
    try {
        const response = await axios.post(
          "http://localhost:5000/Login",
          data
        );
  
        if (response.data) {
            console.log(response);
          dispatch(setEmployeeData(response.data));
        }
      } catch (error) {
        console.error(error);
        return(error.response.data.error)
      }
    };

export default UpdateData;