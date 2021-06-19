import axios from "axios";
const ENDPOINT = "http://localhost:80/";

function makeUri(target) {
    return ENDPOINT + target;
}

async function sendCode(id, content) {
    return axios.post(makeUri("codes"), {
        id,
        ...content
    }, {
        responseType: "json",
        withCredentials: true,
    }).then(response => {
        return response.data;
    });
}

async function updateCode(id, content) {
    return axios.patch(makeUri("codes"), {
        id,
        ...content
    }, {
        responseType: "json",
        withCredentials: true,
    }).then(response => {
        return response.data;
    });
}

async function deleteCode(id) {
    return axios.delete(makeUri("codes/" + id), {
        responseType: "json",
        withCredentials: true,
    }).then(response => {
        return response.data;
    });
}

async function getCodes(page) {
    return axios.get(makeUri("codes/" + page), {
        responseType: "json",
        withCredentials: true,
    }).then(response => {
        return response.data;
    });
}

export default {
    deleteCode,
    updateCode,
    sendCode
}