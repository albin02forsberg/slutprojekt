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

    if (db == "session" && action == "update") {
        postSession(id, obj)
    }
}

function delDrill(id, user) {
    axios.post("http://localhost:3001/api/deletedrill", { id: id })
        .then(window.location.replace("http://localhost:3000/user/" + user));
}

function postDrill(drill, user, img) {
    axios.post("http://localhost:3001/api/newdrill", {
        drill: drill,
    }).then((result) => {
        axios.post("http://localhost:3001/api/postdrillimg", img);
    });
}

function postSession(id, obj) {
    axios.post("http://localhost:3001/api/updatesession", {
        id: id,
        session: obj
    }).then((result) => {
        window.location.replace("http://localhost:3000/session/" + result.data);
    })
}


export default sendToServer;