import axios from "axios";

export default (city) => {
    const {TOKEN} = process.env
    if(!TOKEN){
        console.log("Token is required");
        return;
    }
    const params = {
        access_key: TOKEN,
        query: city
    }

    axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
            const apiResponse = response.data;
            console.log(`Current temperature in ${apiResponse?.location?.name} is ${apiResponse.current?.temperature}°C`);
        }).catch(error => {
        console.log(error);
    });
}
