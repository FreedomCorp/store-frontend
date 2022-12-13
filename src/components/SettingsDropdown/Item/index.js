import React from "react";
import { Link } from "react-router-dom";

function SettingsDropdownItem({ icon, text, link }) {
    return(
        <Link to={link}>
          <li className="text-[#9195AB] hover:bg-[#1d1e25] flex p-2 rounded-md cursor-pointer transition-all">
              <div className="flex flex-row items-center">
                {icon} <p>{text}</p>
              </div>
          </li>
        </Link>
    );
}

export default SettingsDropdownItem;