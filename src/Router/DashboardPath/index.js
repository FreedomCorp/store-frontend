import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";
import DashboardTheme from "../../pages/DashboardTheme";
import api from "../../services/api";

const DashboardPath = () => {
    const params = useParams();

    return (
        <DashboardTheme path={params.path}/>
    );
}

export default DashboardPath;