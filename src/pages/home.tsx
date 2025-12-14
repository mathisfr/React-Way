import './home.css'

export default function Home(){
    return(
        <div id="home">
            <div id="home-box">
                <h1 id="home-box-title">React Way</h1>
                <div id="home-box-content">
                    <p>Cette page GitHub retrace mon parcours dans l'apprentissage de React depuis zéro.</p>
                    <p>Cela signifie que je ne dépends d'aucun framework comme Vite pour configurer entièrement le projet.</p>
                    <p>Le projet utilise une configuration que j'ai mise en place à partir du transpileur Babel et du bundler Rollup.</p>
                </div>
            </div>
        </div>
    )
}