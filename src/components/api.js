import axios from "axios";

export const getTrips = async () =>{
    try{
        const response = await axios.get("http://localhost:3001/trips");
        return response.data;
    } catch(error){
        console.log("couldnt get trips", error)
        return[];
    };
};  