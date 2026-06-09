const params = new URLSearchParams(window.location.search);
const itemID = params.get("id");

fetch("data.json")
.then(response => response.json())
.then(data => {

    const item = data.find(x => x.id === itemID);

    if(item){

        document.getElementById("desc").innerText = item.description;
        document.getElementById("id").innerText = item.id;
        document.getElementById("plant").innerText = item.plant;
        document.getElementById("storage").innerText = item.storage;
        document.getElementById("qty").innerText =
            item.qty + " " + item.uom;

        document.getElementById("photo").src =
            item.photo;

    }
    else{

        document.body.innerHTML =
            "<h1>Item Not Found</h1>";
    }

});
