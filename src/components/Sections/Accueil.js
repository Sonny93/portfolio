import "./accueil.scss";

export default function Accueil({ scrollToNextSection }) {
    return (
        <div className="accueil">
            <h1>Sonny LALLIER</h1>
            <p>Benvenue sur mon Portfolio !</p>
            <div className="wrapper-scroll" onClick={scrollToNextSection}>
                <span className="scroll-icon">
                    <span className="scroll-icon__dot"></span>
                </span>
                <p>Défiler pour voir la suite !</p>
            </div>
        </div>
    );
}
