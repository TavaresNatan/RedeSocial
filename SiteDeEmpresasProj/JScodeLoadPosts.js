
function loadposts(){
    //vai receber um array de usuarios
    const postsrecentes = getrecentposts();
    postsrecentes.forEach((user) => {
        createPost(user.userimage, user.nome, user.conteudo, user.tags, user.image, user.likes, user.date); 
    });
    //para fins de debug
    // const nome          = "Livia | Ilust";
    // const texto         = "hj fiz desenho";
    // const tags          = "#desenho"; //substituir por array
    // const imgpathing    = "none";

    // createPost(nome, texto, tags, imgpathing);

}

function createPost(userimage, username, content, tags, imgpath, likes, date) { //melhorar o codigo, pois sera usado tanto para discover quanto para following
    //se o botao de discover for clicado, nao pode ser spamado
    //O h2 deve ter um limite, para nao estrapolar a linha
    const has_a_pic = false;

        const newPost               = document.createElement("div");  // Usando "newPost" em todo o código
        newPost.className           = "post";  // Corrigido o nome da variável
        
        //centraliza o titulo do post em uma div
        const newposttittle         = document.createElement("div");
        newposttittle.className     = "posttittle";

        const userpic               = document.createElement("img");
        userpic.className           = "user_post_img";
        userpic.src                 = userimage;
        userpic.alt                 = "User profile pic";
        newposttittle.appendChild(userpic);

        //adicionar foto de perfil antes do nome
        const userName              = document.createElement("h2"); //nome do usuario
        userName.className          = "user_post_name";
        userName.textContent        = username;
        newposttittle.appendChild(userName);

        //centraliza o conteudo do post em uma div
        const newpostcontent        = document.createElement("div");
        newpostcontent.className    = "postcontent";

        //texto do post
        const userText              = document.createElement("p"); //texto do post
        userText.className          = "user_post_text";
        userText.textContent        = content;
        newpostcontent.appendChild(userText);

        //hashtags do post
        const hashtags              = document.createElement("div"); //hashtags devem ser links
        hashtags.className          = "post_basic_text";
        let tagscontent             = "";
        tags.forEach((tag) => tagscontent += (" #" + tag));
        hashtags.textContent        = tagscontent;
        newpostcontent.appendChild(hashtags);

        //centraliza o conteudo da parte interativa do post
        const newpostinteractionbar = document.createElement("div");
        newpostinteractionbar.className = "postinteractionbar";

        //cria o botao de like
        const interactiveitemsLike      = document.createElement("img");
        interactiveitemsLike.className           = "interactionbaritems";
        interactiveitemsLike.src                 = "Images/Like.png";
        interactiveitemsLike.alt                 = "User profile pic";
        newpostinteractionbar.appendChild(interactiveitemsLike);

        //quantidade de likes
        const likesnumber = document.createElement("p");
        likesnumber.className = "post_basic_text";
        likesnumber.textContent = likes + " Likes";
        newpostinteractionbar.appendChild(likesnumber);

        //cria o botao de comentario
        const interactiveitemsComment      = document.createElement("img");
        interactiveitemsComment.className           = "interactionbaritems";
        interactiveitemsComment.src                 = "Images/Comment.png";
        interactiveitemsComment.alt                 = "Comment section";
        newpostinteractionbar.appendChild(interactiveitemsComment);

        //cria o textbar para adicionar o comentario
        const interactiveitemsCommentBar = document.createElement("input");
        interactiveitemsCommentBar.className = "interactiveitemscommentbar";
        interactiveitemsCommentBar.type = "text";
        interactiveitemsCommentBar.placeholder = "Leave a comment...";
        newpostinteractionbar.appendChild(interactiveitemsCommentBar);


        newPost.appendChild(newposttittle);
        newPost.appendChild(newpostcontent);
        newPost.appendChild(newpostinteractionbar);
        //criar um suporte para imagens //imgpath
        //<img src="bedroom.jpg" alt="Quarto aconchegante">

        // Seleciona o contêiner e adiciona o novo post
        const container = document.getElementById("posts_discover");
        container.appendChild(newPost);
    }


function getrecentposts(){
    //vai procurar no sql todos os posts recentes e retornar em um array
    const usuarios = [
        { userimage: "Images/userimage20px.png", nome: "Sarah Maksman | SamBank LTDA", conteudo: "Hoje o clima trouxe aquela dao 📖☕.❤️", tags: ["trabalho", "equipe", "colaboração"], image: ""              , likes: 1, date: 1},
        { userimage: "Images/userimage20px.png", nome: "Maria", conteudo: "A disciplina no trabalho traz benefícios a longo prazo.", tags: ["trabalho", "disciplina", "benefícios"], image: ""                  ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Carlos", conteudo: "Buscar sempre melhorar é o segredo para o sucesso.", tags: ["trabalho", "melhoria contínua", "sucesso"], image: ""                  ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Ana", conteudo: "A organização ajuda a gerenciar o tA organização ajuda a gerenciar o tA organização ajuda a gerenciar o tA organização ajuda a gerenciar o tA organização ajuda a gerenciar o tempo com mais eficiência.", tags: ["trabalho", "organização", "tempo"], image: ""                   ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Bruno", conteudo: "Estabelecer metas é o primeiro passo para o sucesso.", tags: ["trabalho", "metas", "sucesso"], image: ""                             ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Clara", conteudo: "A persistência é chave para enfrentar desafios no trabalho.", tags: ["trabalho", "persistência", "desafios"], image: ""              ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Eduardo", conteudo: "Um bom ambiente de trabalho aumenta a produtividade.", tags: ["trabalho", "ambiente", "produtividade"], image: ""                  ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Fernanda", conteudo: "O aprendizado contínuo é indispensável para crescer.", tags: ["trabalho", "aprendizado", "crescimento"], image: ""                ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Gustavo", conteudo: "Trabalhar com paixão faz toda a diferença.", tags: ["trabalho", "paixão", "motivação"], image: ""                                  ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Helena", conteudo: "Saber geriver.Saber gerenciar o ", tags: ["trabalho", "gerenciamento de tempo", "sucesso"], image: ""                               ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Isabela", conteudo: "O respeito mútuo fortalece as relações no trabalho.", tags: ["trabalho", "respeito", "relações"], image: ""                        ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Júlio", conteudo: "A inovação é o que diferencia empresas de sucesso.", tags: ["trabalho", "inovação", "sucesso"], image: ""                            ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Larissa", conteudo: "Trabalhar com foco e determinação é essencial.", tags: ["trabalho", "foco", "determinação"], image: ""                             ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Marcos", conteudo: "Investir no próprio conhecimento abre novas oportunidades.", tags: ["trabalho", "conhecimento", "oportunidades"], image: ""         ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Nina", conteudo: "A comunicação clara evita mal-entendidos.", tags: ["trabalho", "comunicação", "clareza"], image: ""                                   ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Otávio", conteudo: "A diversidade de ideias enriquece o ambiente de trabalho.", tags: ["trabalho", "diversidade", "ideias"], image: ""                  ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Paula", conteudo: "A responsabilidade é essencial para o crescimento profissional.", tags: ["trabalho", "responsabilidade", "crescimento"], image: ""   ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Ricardo", conteudo: "Estabelecer prioridades ajuda a atingir resultados.", tags: ["trabalho", "prioridades", "resultados"], image: ""                   ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Sara", conteudo: "Aceitar feedback é essencial para o desenvolvimento.", tags: ["trabalho", "feedback", "desenvolvimento"], image: ""                   ,likes: 1, date: 1 },
        { userimage: "Images/userimage20px.png", nome: "Thiago", conteudo: "Ter ética no trabalho gera confiança entre colegas.", tags: ["trabalho", "ética", "confiança"], image: ""                           ,likes: 1, date: 1 }
    ];
    return usuarios;
}

//<!-- Post de Sarah -->
//<!-- <article class="post">
//    <h2>Sarah Maksman | SamBank LTDA</h2>
//    <p>Hoje o clima trouxe aquela chuvinha gostosa, perfeita para relaxar e curtir o aconchego de casa 🌧️✨...</p>
//    <div class="hashtags">
//        #Chuva #DiaAconchegante #PazInterior #MomentoParaSi #Relaxar #CasaDoceCasa #Autocuidado #DiaDeChuva #Inverno #BemEstar #Conforto
//    </div>
//    <img src="bedroom.jpg" alt="Quarto aconchegante">
//</article> -->