import React from "react";
import {default as gitHubIcon} from "./images/githubIcon.svg"
import {default as linkedInIcon} from  "./images/linkedInIcon.svg"
// learned to import svg using default 

function InfoLinks() {
    return (
        <div className="lonks">
            <a className="linkedIn" href="#">
                <img className="linkedIcon" src = {linkedInIcon} />
            </a>
            <a className="gitHub" href="#">
                <img className="gitIcon" src = {gitHubIcon} />
            </a>
        </div>
    )
}

export default InfoLinks