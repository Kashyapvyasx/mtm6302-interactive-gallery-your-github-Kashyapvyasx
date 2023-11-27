let images =  [
    {
        url: "images/pexels-akash-a-g-12801272.jpg",
        description: "TVS Apache RTR 310"
    },
    {
        url: "images/pexels-ankit-sihag-6191490.jpg",
        description: "Bajaj Dominar 400"
    },
    {
        url: "images/pexels-javier-aguilera-2611654.jpg",
        description: " Harley-Davidson Street 750"
    },
    {
        url: "images/pexels-javier-aguilera-2611675.jpg",
        description: "Harley-Davidson Sportster Iron 883"
    },
    {
        url: "images/pexels-mali-maeder-112473.jpg",
        description: "Ducati 900 Supersport"
    },
    {
        url: "images/pexels-nikita-khandelwal-819805.jpg",
        description: "Triumph Bonneville"
    },
    {
        url: "images/pexels-norbert-norbi-5023257.jpg",
        description: "Harley-Davidson Custom Cruiser line"
    },
    {
        url: "images/pexels-oğuzhan-yavuz-14155432.jpg",
        description: "Honda CBR600RR"
    },
    {
        url: "images/pexels-pixabay-40904.jpg",
        description: "BMW K1300S"
    },
    {
        url: "images/pexels-pragyan-bezbaruah-1715193.jpg",
        description: "Triumph Thruxton"
    },
    {
        url: "images/pexels-valeria-boltneva-13336569.jpg",
        description: "Harley-Davidson V-Rod"
    },
    {
        url: "images/pexels-андрей-8194537.jpg",
        description: "Suzuki GSX-R1000"
    }
];

let gallery = document.getElementById("gallery");
let modal = document.getElementById("modal");
let ImageContainer = document.getElementById("image-container");
let modalImage = document.getElementById("modal-img");
let modalDescription = document.getElementById("modal-description");

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i].url;
    img.alt = images[i].description;
    gallery.appendChild(img);
}

gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImage.src = event.target.src;
        modalDescription.textContent = event.target.alt;
    }
});

let closeButton = document.getElementById("close");

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});