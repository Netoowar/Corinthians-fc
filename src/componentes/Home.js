import image from "../imagens/image.jpg";
function Home(){
    return (
    <div className="home">
        <h1>Nosso Home</h1>
        <p>🏚 . 🏚 . 🏚</    p>  
        <p>Um lugar de informações feito para você e sua família. Fique à vontade para navegar dentro de nosso sistema de gerenciamento de arquivos o SGA</p>
        <p>🏚 . 🏚 . 🏚</p>
    

        <div className="image">
        <img src={image} alt="Image" />
        <a href="#"> Imagem </a>
        </div>
    </div>
    );
}

export default Home;