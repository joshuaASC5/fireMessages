const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
const allMessages=document.getElementById("allMessages")

button.addEventListener("click",updateDB);

const database= firebase.database().ref();
//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const row= {
        NAME: username,
        MESSAGE: message
    }
    database.push(row);
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);
function addMessageToBoard(rawDataRef){
    const blow = rawDataRef.val();
    constname = blow.NAME;
    const message = blow.MESSAGE;

    const paragraph = document.createElement("p");
    paragraph.innerText = name +":" + message;
    allMessages.appendChild(paragraph);
}