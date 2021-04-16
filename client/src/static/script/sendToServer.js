import axios from "axios";

// This file sends request to server to delete drills and training sessions

function sendToServer(id, db, user, action) {
    console.log(id);

    if (db == "drill" && action == "del") {
        delDrill(id, user);
    }
    if (db == "drill" && action == "create") {
        postDrill(id, user);
    }
}

function delDrill(id, user) {
    axios.post("http://localhost:3001/api/deletedrill", { id: id })
        .then(window.location.replace("http://localhost:3000/user/" + user));
}

function postDrill(drill, user) {
    axios.post("http://localhost:3001/api/newdrill", [
        drill,
        sessionStorage.getItem("User"),
    ]).then(window.location.replace("http://localhost:3000/user/" + user));
}


export default sendToServer;