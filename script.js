const params = new URLSearchParams(window.location.search);

const itemID = params.get("id");

fetch("data.json")

.then(response => response.json())

.then(data => {

    const item = data.find(
        x => x["Material Number"] === itemID
    );

    if(item){

        document.getElementById("materialNumber").innerText =
            item["Material Number"];

        document.getElementById("materialDescription").innerText =
            item["Material Description"];

        document.getElementById("plant").innerText =
            item["Plant"];

        document.getElementById("storageLocation").innerText =
            item["Storage Location"];

        document.getElementById("baseUnit").innerText =
            item["Base Unit of Measure"];

        document.getElementById("valueRM").innerText =
            "RM " + item["Value (RM)"];

        document.getElementById("machine").innerText =
            item["Machine"] || "-";

        document.getElementById("comments").innerText =
            item["Comments"] || "-";

        document.getElementById("photo").src =
            item["Photo"];

    }

    else{

        document.body.innerHTML =
            "<h1>Material Not Found</h1>";

    }

});
