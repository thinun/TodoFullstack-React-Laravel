import Navbar from "@/components/Navbar/Navbar.jsx";
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import HomeGrid from "@/components/HomeGrid/HomeGrid.jsx";
import axiosClient from "@/axios-client.js";
import { useState } from "react";

const Home = () => {
    const [error, setError] = useState("");


    // sending payload to the database
    const handleSendingData = (payload) => {
        axiosClient.post('tasks', payload).then((response) => {
            console.log(response);
        }).catch((error) => {
            if (error.response && error.response.status === 422) {
                setError(error.response.data.message);
                console.log(error.response.data.error);
            }
        });
    }

    return (
        <div>
            <Header/>
            <Hero/>
            {error  && alert(error.message)}
            <HomeGrid submit={handleSendingData}/>
            <Navbar/>
        </div>
    );
};

export default Home;
