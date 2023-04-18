import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2ZGU5NGIyLWQ4NDItNDY1YS05MjU5LWQzMWYzNjE5MjMzOCIsImlhdCI6MTY4MTgzMDI5MSwiZXhwIjoxNjgxODQ0NjkxfQ.wC6WCK6Qan0278-QgzmfcdbnwwRdAbOXsLcp0KJlwV8"
    }
});

export default api;