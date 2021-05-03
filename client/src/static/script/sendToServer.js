import axios from "axios";

// This file sends request to server to delete drills and training sessions

function sendToServer(id, db, obj, action, img = null) {
    console.log(id);

    if (db == "drill" && action == "del") {
        delDrill(id, obj);
    }
    if (db == "drill" && action == "create") {
        postDrill(id, obj, img);
    }

    if (db == "drill" && action == "update") {
        updateDrill(id, obj);
    }

    if (db == "session" && action == "update") {
        postSession(id, obj);
    }

    if (db == "session" && action == "del") {
        deleteSession(id);
    }
}

function delDrill(id, user) {
    axios.post("http://localhost:3001/api/deletedrill", { id: id })
        .then(window.location.replace("http://localhost:3000/user/" + sessionStorage.getItem("User")));
}

function postDrill(drill, user, img) {
    axios.post("http://localhost:3001/api/newdrill", {
        drill: drill,
    }).then((result) => {
        window.location.replace("http://localhost:3000/drill/" + result.data);
    });
}

function updateDrill(id, obj) {
    axios.post("http://localhost:3001/api/updatedrill", {
        id: id,
        drill: obj
    }).then((result) => {
        window.location.replace("http://localhost:3000/drill/" + result.data)
    })
}

function postSession(id, obj) {
    axios.post("http://localhost:3001/api/updatesession", {
        id: id,
        session: obj
    }).then((result) => {
        window.location.replace("http://localhost:3000/session/" + result.data);
    })
}

function deleteSession(id) {
    axios.post("http://localhost:3001/api/deletesession", {
        id: id
    }).then(window.location.replace("http://localhost:3000/user/" + sessionStorage.getItem("User")))
}


export default sendToServer;