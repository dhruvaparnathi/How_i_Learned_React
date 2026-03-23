import React from "react";

const Card = ({ job }) => {
    return (
        <div class="card">
            <div class='upper'>
                <div className="top">
                    <img src={job.logo} alt="" />
                <button className="save">Save</button>
                </div>
                <h2>{job.company}</h2>
                <h4>{job.role}</h4>
                <div className="tags"><span>{job.type}</span><span>{job.level}</span></div>
                <p>{job.posted}</p>
            </div>
            <div class='lower'>
                <h3>{job.salary}</h3>
                <p>{job.location}</p>
                <button className="apply">Apply Now</button>
            </div>
        </div>
    )
};

export default Card;