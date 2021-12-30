import React from "react";
import "./article.css";

function Article ({img,date,title}) {
    return (
        <div className="gpt3__article">
            <div className="gpt3__article__image">
                <img src={img} alt="blog__image" />
            </div>
            <div className="gpt3__article__content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
