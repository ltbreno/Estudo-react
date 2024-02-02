import React from "react";
import "../styles/articles.css"

export class Article extends React.Component {
    render() {
        return (
            <article id="article">
                <img className="imagem" src="https://s2-g1.glbimg.com/fl0PTpjPKFQh1PbAiEguhUaH1RY=/0x208:2000x1333/540x304/smart/filters:max_age(3600)/http://s.glbimg.com/jo/g1/f/original/2017/02/26/domingo_ela_nao_vai_fWYS8uE.jpg" alt="" />

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.subtitle}</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis porttitor lectus,
                         eu finibus purus cursus at. Nunc tristique metus at magna eleifend dapibus.
                          Suspendisse nec finibus ante. Aliquam tortor dui, iaculis vitae metus ut,
                           semper accumsan libero. Maecenas vel sapien varius, facilisis diam ut,
                            vulputate odio. In elementum magna sem, in condimentum sem vestibulum in.
                             Nunc bibendum ultricies lectus, nec consectetur purus sollicitudin sed.
                              Aliquam quis aliquet lorem. Integer convallis leo orci, a mattis quam
                               faucibus at.</p>
                </div>
            </article>
        )
    }
}

