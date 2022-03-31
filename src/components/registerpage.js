import React, { useEffect, useState } from "react";

function RegisterPage() {
    const [showData, setShowData] = useState(false);
    const [isDisabled, setIsDeisabled] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        setShowData(!showData)
    }
    const handleChange = (e) => {
        setUsername(e.target.value);
        setPassword(e.target.value)

        // switch (e.target.name) {
        //     case "userName":
        //         setUsername(e.target.value);
        //         break;
        //     case "password":
        //         setPassword(e.target.value);
        // }
        if (userName || password) {
            setIsDeisabled(false);
        }
        else {
            setIsDeisabled(true)
        }
        // setIsDeisabled(!isDisabled);

    }

    useEffect(() => {
        if (userName && password) {
            setIsDeisabled(false);
        }
        else {
            setIsDeisabled(true)
        }
    }, []);




    return (
        <section className="registration">
            <div className="forms">
                {showData &&
                    <form>
                        <header className="heading">Registration page</header>
                        <div className="label-div">
                            <label>First Name:</label></div>
                        <div className="input-div">
                            <input type="text" />
                        </div>
                        <div className="label-div">
                            <label>last Name:</label></div>
                        <div className="input-div">
                            <input type="text" />
                        </div>
                        <div className="label-div">
                            <label>DOB:</label></div>
                        <div className="input-div">
                            <input type="date" placeholder=""dateFormat="DD/MM/YYYY"/>
                        </div>
                        <div className="label-div">
                            <label>Email Id:</label></div>
                        <div className="input-div">
                            <input type="email" />
                        </div>
                        <div className="label-div">
                            <label>Phone No:</label></div>
                        <div className="input-div">
                            <input type="phone" />
                        </div>
                        <div className="gender">
                            <label className="label-gender">Gender:</label>
                            <input type="radio" name="gender" />
                            <label>male</label>
                            <input type="radio" name="gender" />
                            <label>female</label>
                        </div>
                        <div className="language">
                            <label>Language:</label>
                            <input type="checkbox" />
                            <label>English</label>
                            <input type="checkbox" />
                            <label>spanish</label>
                            <input type="checkbox" />
                            <label>German</label>
                            <input type="checkbox" />
                            <label>Arabic</label>
                        </div>
                        <div className="label-div">
                            <label>Qualification:</label></div>
                        <div className="input-div">
                            <select name="sub" id="sub">
                                <option value="M.tech">M.tech</option>
                                <option value="B.tech">B.tech</option>
                                <option value="Intermidiate">Intermidiate</option>
                                <option value="SSC">SSC</option>
                            </select>
                        </div>
                        {/* <div className="input-div">
                            <input type="phone" />
                        </div> */}
                        <div className="label-div">
                            <label>User Name:</label></div>
                        <div className="input-div">
                            <input type="text" />
                        </div>
                        <div className="label-div">
                            <label>Password:</label></div>
                        <div className="input-div">
                            <input type="password" />
                        </div>
                        <div className="buttons">
                            <button className="register">Register</button>
                            <button className="reset">Reset</button>
                            <button className="cancel">cancel</button>
                        </div>
                    </form>
                }
                {!showData &&
                    <div>
                        <form>
                            <header className="heading">Login Page</header>
                            <div className="user">
                                <label>User Name:</label>
                                <input type="text" name="userName" value={userName} onChange={handleChange} />
                            </div>
                            <div className="password">
                                <label>Password:</label>
                                <input type="password" name="password" value={password} onChange={handleChange} />
                            </div>
                            <div className="buttons">
                                <button className={isDisabled ? "" : "login-btn"} disabled={isDisabled}>Login</button>
                            </div>
                            <div>
                                <p className="newuser">New User?</p>
                                {/* <p className="register-btn" onClick={handleClick}>Register here</p> */}
                                <p className="register-btn" onClick={handleClick}>Register here</p>
                            </div>
                        </form>
                    </div>
                }

            </div>
        </section>
    )
}
export default RegisterPage;