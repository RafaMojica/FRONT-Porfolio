import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Email() {
  return (
    <div className="email_circle">
      <Link>
        <IoMailOutline />
      </Link>
    </div>
  );
}

export default Email;
