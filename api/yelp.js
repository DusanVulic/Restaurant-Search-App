import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Wkr319ykstvoY_ezrm0dn29paBCfOc7zdUnBy0K7A8cS-ZIYDRev-golfhpKM0INfBf5dwhcfNMFXmPzRqKAfLHmSiqMwSGcl70cgS72ClTaE0Mfdus3zFOyeM4oY3Yx",
    },
});