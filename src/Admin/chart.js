import { useState } from "react";
import { UserData } from "./services/Data";
import BarChart from "../components/BarChart";
import './style/chartjs.css'
import Sidebars from "../components/Sidebar";

function Grafis() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div>
            <Sidebars />
            <div className="head-title">
                <h1 className="fw-bold">Layouts Option</h1>
                <BarChart chartData={userData} />
            </div>
        </div>
    );
}

export default Grafis