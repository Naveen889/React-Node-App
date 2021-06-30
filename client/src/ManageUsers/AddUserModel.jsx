import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import "./manageusers.scss";

function AddUserModel(props) {

    //const { saveUser } = useContext(UserContext);
    const [open, setOpen] = useState(props.open == true ? true : false);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {

        console.log(data);
        //saveUser(data);
        /*SignupApi.signUp(data)
            .then(response => {
                if (response.data.statusCode === 200) {
                    //saveUser(response.data.data)
                }
            })
            .catch(error => {

            });
        */
    };

    return (
        <div className="AddUser-Model">
            <Dialog className="MuiDialog-paper-AddUserModel"
                open={props.open}
                onClose={props.onClose}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AccountCircleIcon style={{ fontSize: 40 }} />
                    <div className="form-fields">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Name"
                            type="text"
                            name="name"
                            {...register("name", { required: "User name is required" })}
                        />
                        <br />
                        {errors.name && <span className="Error-Message">{errors.name.message}</span>}
                        <br />
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Phono"
                            type="text"
                            name="phono"
                            {...register("phono", { required: "User phono is required" })}
                        />
                        <br />
                        {errors.phono && <span className="Error-Message">{errors.phono.message}</span>}
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        <br />
                        {errors.email && <span className="Error-Message">{errors.email.message}</span>}
                        <br />
                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                            <Select
                                native
                                label="Gender"
                                name="gender"
                                {...register("gender", { required: " Select Gender Type" })}
                            >
                                <option aria-label="None" value="" />
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </Select>
                        </FormControl>
                        <br />
                        {errors.gender && <span className="Error-Message">{errors.gender.message}</span>}
                        {/*<TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Password"
                            type="password"
                            name="password"
                            {...register("password", { required: "Password is required" })}
                        />
                        <br />
                        {errors.password && <span className="Error-Message">{errors.password.message}</span>}*/}
                    </div>
                    <br />
                    <div className="form-button">
                        <Button type="submit" variant="contained" className="addUserButton" color="primary">AddUser</Button>
                        <Button onClick={props.onClose} variant="contained" color="secondary">Cancel</Button>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default AddUserModel
