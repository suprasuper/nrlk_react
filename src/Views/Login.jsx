import React from "react";
import GoogleButton from "../components/GoogleButton/GoogleButton";
import MicrosoftButton from "../components/MicrosoftButton/MicrosoftButton";
import { msalConfig } from "../auth/msalConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);



const Login = () => {

    return (
        <div className="bg-gradient-primary" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Se connecter</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Entrez votre adresse e-mail..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Mot de passe" />
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block">Se connecter</button>
                                                <hr></hr>
                                                <div className="d-flex justify-content-center">
                                                    <GoogleButton />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <MsalProvider instance={msalInstance}>
                                                        <MicrosoftButton />
                                                    </MsalProvider>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login