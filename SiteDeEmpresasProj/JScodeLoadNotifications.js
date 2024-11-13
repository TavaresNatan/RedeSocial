// createnotifications("/Images/userimage.png", "James",
//     "Hey, are u up?", "12/04/24"
// );


const recentnotificatios = getnewestnotifications();
recentnotificatios.forEach((notif) => {
    createnotifications(notif.img, notif.nome, notif.comentario, notif.data); 
    });

function createnotifications(img, name, content, time){
    console.debug("creating notif");
    const newNotification = document.createElement("div");
    newNotification.className = "newnotification";

    const notificationhead = document.createElement("div");
    notificationhead.className = "notificationhead";

    const notificationpic = document.createElement("img");
    notificationpic.className = "notificationpic";
    notificationpic.src = img;
    notificationhead.appendChild(notificationpic);

    const notificationtittle = document.createElement("h1");
    notificationtittle.textContent = name;
    notificationtittle.className = "notificationhead";
    notificationhead.appendChild(notificationtittle);

    newNotification.appendChild(notificationhead);

    //cria o corpo do texto
    const notificationcontent = document.createElement("div");
    notificationcontent.className = "notificationcontent";
    
    const notificationtext = document.createElement("h1");
    notificationtext.className = "notificationcontent";
    notificationtext.textContent = content;
    notificationcontent.appendChild(notificationtext);

    //tags devem virar link
    const notificationtime = document.createElement("p");
    notificationtime.className = "notificationcontent";
    notificationtime.textContent = time;
    notificationcontent.appendChild(notificationtime);

    newNotification.appendChild(notificationcontent);

    const container = document.getElementById("notifications");
        container.appendChild(newNotification);
}

//banco de dados falso
function getnewestnotifications(){
    const items = [
        {
            img: "/Images/userimage.png",
            nome: "Carlos Oliveira",
            comentario: "Ótimo produto!",
            data: "2024-10-01"
        },
        {
            img: "/Images/userimage.png",
            nome: "Mariana Souza",
            comentario: "Muito satisfeito com a compra.",
            data: "2024-10-02"
        },
        {
            img: "/Images/userimage.png",
            nome: "João Pedro",
            comentario: "Entrega rápida e eficiente.",
            data: "2024-10-03"
        },
        {
            img: "/Images/userimage.png",
            nome: "Ana Clara",
            comentario: "Produto de qualidade.",
            data: "2024-10-04"
        },
        {
            img: "/Images/userimage.png",
            nome: "Lucas Lima",
            comentario: "Excelente atendimento!",
            data: "2024-10-05"
        },
        {
            img: "/Images/userimage.png",
            nome: "Beatriz Silva",
            comentario: "Recomendo a todos.",
            data: "2024-10-06"
        },
        {
            img: "/Images/userimage.png",
            nome: "Rafael Santos",
            comentario: "Cumpriu as expectativas.",
            data: "2024-10-07"
        },
        {
            img: "/Images/userimage.png",
            nome: "Julia Almeida",
            comentario: "Boa relação custo-benefício.",
            data: "2024-10-08"
        },
        {
            img: "/Images/userimage.png",
            nome: "Gustavo Ferreira",
            comentario: "Produto muito bom!",
            data: "2024-10-09"
        },
        {
            img: "/Images/userimage.png",
            nome: "Larissa Ribeiro",
            comentario: "Voltarei a comprar.",
            data: "2024-10-10"
        },
        {
            img: "/Images/userimage.png",
            nome: "Mateus Costa",
            comentario: "Aprovado pelo custo!",
            data: "2024-10-11"
        },
        {
            img: "/Images/userimage.png",
            nome: "Camila Rocha",
            comentario: "Ótima experiência de compra.",
            data: "2024-10-12"
        },
        {
            img: "/Images/userimage.png",
            nome: "Pedro Neves",
            comentario: "Produto chegou intacto.",
            data: "2024-10-13"
        },
        {
            img: "/Images/userimage.png",
            nome: "Sofia Azevedo",
            comentario: "Tudo conforme anunciado.",
            data: "2024-10-14"
        },
        {
            img: "/Images/userimage.png",
            nome: "Felipe Martins",
            comentario: "Satisfeito com a qualidade.",
            data: "2024-10-15"
        },
        {
            img: "/Images/userimage.png",
            nome: "Luana Mendes",
            comentario: "Superou minhas expectativas.",
            data: "2024-10-16"
        },
        {
            img: "/Images/userimage.png",
            nome: "Thiago Costa",
            comentario: "Preço justo pelo que oferece.",
            data: "2024-10-17"
        },
        {
            img: "/Images/userimage.png",
            nome: "Isabela Nogueira",
            comentario: "Adorei o produto!",
            data: "2024-10-18"
        },
        {
            img: "/Images/userimage.png",
            nome: "Rodrigo Silva",
            comentario: "Recomendo para todos.",
            data: "2024-10-19"
        },
        {
            img: "/Images/userimage.png",
            nome: "Nicole Vieira",
            comentario: "Fácil de usar e bem prático.",
            data: "2024-10-20"
        }
    ];

    return items;
}
