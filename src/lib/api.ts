import { SetStateAction } from "react"
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2ZGU5NGIyLWQ4NDItNDY1YS05MjU5LWQzMWYzNjE5MjMzOCIsImlhdCI6MTY4MjExMzI2NCwiZXhwIjoxNjgyMTI3NjY0fQ.TilG35Ehu3p3AwUidEyx_k9gYeKR151AokLJqp_b1IY"
    }
});

export default api;