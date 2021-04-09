import axios from "axios";

function postUser({ user }) {
    let username = false;
    let mail = false;

    axios
        .get("http://localhost:3001/api/validateuser", {
            params: {
                action: "username",
                username: user.username,
            },
        })
        .then(function(response) {
            console.log(response);
            if (response.data == "Ok!") {
                username = true;
                console.log(username);
            } else {
                username = false;
                console.log(username);
            }
        })
        .then(
            axios
            .get("http://localhost:3001/api/validateuser", {
                params: {
                    action: "mail",
                    mail: user.mail,
                },
            })
            .then(function(response) {
                console.log(response);
                if (response.data == "Ok!") {
                    mail = true;
                    console.log(mail);
                } else {
                    mail = false;
                    console.log(mail);
                }
            })
        )
        .then(() => {
            if (mail && username) {
                //   Send user to server and db
                axios
                    .post("http://localhost:3001/api/createuser", user)
                    .then(function(res) {
                        console.log(res);
                        document.getElementById("information").innerHTML =
                            "<p>Account created</p>";
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            } else {
                let message = "";
                if (!mail) {
                    message += "<p>Invalid mail</p>";
                }
                if (!username) {
                    message += "<p>Invalid username</p>";
                }
                document.getElementById("information").innerHTML = message;
                console.log("ERROR when creating new user");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export default postUser();