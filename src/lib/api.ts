import { SetStateAction } from "react"
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2ZGU5NGIyLWQ4NDItNDY1YS05MjU5LWQzMWYzNjE5MjMzOCIsImlhdCI6MTY4MTkxMjAzNCwiZXhwIjoxNjgxOTI2NDM0fQ.3RlmLA6xpKp8cThzQ37C7V5W1SI08Nl75shUEUP9zQY"
    }
});

export default api;