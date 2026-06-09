const params = new URLSearchParams(window.location.search);

const itemID = params.get("id");

console.log("QR ID:", itemID);

fetch("data.json")
.then(response => response.json())
.then(data => {

    console.log(data);

    const item = data.find(
        x => x.materialNumber == itemID
    );

    console.log(item);

    if(item){

        document.getElementById("materialNumber").innerText =
            item.materialNumber;

        document.getElementById("materialDescription").innerText =
            item.materialDescription;

        document.getElementById("plant").innerText =
            item.plant;

        document.getElementById("storageLocation").innerText =
            item.storageLocation;

        document.getElementById("baseUnit").innerText =
            item.baseUnit;

        document.getElementById("valueRM").innerText =
            "RM " + item.valueRM;

        document.getElementById("machine").innerText =
            item.machine || "-";

        document.getElementById("comments").innerText =
            item.comments || "-";

        document.getElementById("photo").src =
            item.photo;

    }
    else{

        document.body.innerHTML =
            "<h1>Material Not Found</h1>";

    }

})
.catch(error => {

    console.error(error);

    document.body.innerHTML =
        "<h1>Error Loading JSON</h1>";

});
