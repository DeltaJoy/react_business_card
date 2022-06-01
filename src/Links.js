import React from "react";
import {default as gitHubIcon} from "./images/githubIcon.svg"
import {default as linkedInIcon} from  "./images/linkedInIcon.svg"
import {default as emailIcon} from "./images/email.svg"


// learned to import svg using default 

function InfoLinks() {
    return (
        <div className="lonks">
            <a className="linkedIn" href="https://www.linkedin.com/in/jeff-komorowski-74953aaa/">
                <img className="linkedIcon" src = {linkedInIcon} />

            </a>
            <a className="gitHub" href="https://github.com/DeltaJoy">
                <img className="gitIcon" src = {gitHubIcon} />
            </a>
            <a className="email" href="#">
                <img className="emailIcon" src = {emailIcon} />
            </a>
         
       

        </div>
    )
}

export default InfoLinks