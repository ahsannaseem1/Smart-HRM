const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const SignUp=require('./Routes/SignUp');
const AddHR=require('./Routes/AddHR');
const Login=require('./Routes/Login');
const AddEmployee=require('./Routes/AddEmployee');
const AddApplicant=require('./Routes/AddApplicant');
const GetApplicants=require('./Routes/GetApplicants');
const GetTopApplicants=require('./Routes/GetTopApplicants');
const RequestLeave=require('./Routes/Leave/RequestLeave');
const AcceptOrRejectLeave=require('./Routes/Leave/AcceptOrRejectLeave');
const GetLeavesData=require('./Routes/Leave/GetLeavesData');

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


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
