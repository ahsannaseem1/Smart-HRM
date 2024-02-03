const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const SignUp=require('./Routes/Authentication/SignUp');
const AddHR=require('./Routes/AddUser/AddHR');
const Login=require('./Routes/Authentication/Login');
const AddEmployee=require('./Routes/AddUser/AddEmployee');
const AddApplicant=require('./Routes/Applicant/AddApplicant');
const GetApplicants=require('./Routes/Applicant/GetApplicants');
const GetTopApplicants=require('./Routes/Applicant/GetTopApplicants');
const RequestLeave=require('./Routes/Leave/RequestLeave');
const AcceptOrRejectLeave=require('./Routes/Leave/AcceptOrRejectLeave');
const GetLeavesData=require('./Routes/Leave/GetLeavesData');
const AddAttendance=require('./Routes/Attendance/AddAttendance');

const app = express();

app.use(cors({credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/SignUp',SignUp);
app.use('/AddHR',AddHR);
app.use('/Login',Login);
app.use('/AddEmployee',AddEmployee);
app.use('/AddApplicant',AddApplicant);
app.use('/GetApplicants',GetApplicants)
app.use('/GetTopApplicants',GetTopApplicants);
app.use('/RequestLeave',RequestLeave);
app.use('/AcceptOrRejectLeave',AcceptOrRejectLeave);
app.use('/GetLeavesData',GetLeavesData);
app.use('/AddAttendance',AddAttendance);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
