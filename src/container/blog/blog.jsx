import React from "react";
import {Article} from "../../components"
import {blog01, blog02, blog03, blog04,blog05} from "./imported"
import "./blog.css";

function Blog () {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog__heading">
                <h1 className="gradient__text">A lot is happening, 
                    We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog__article-container">
                <div className="gpt3__blog__article-container__groupA">
                    <Article 
                        img={blog01}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sep 26, 2021'
                    />
                </div>

                <div className="gpt3__blog__article-container__groupB">
                    <Article 
                        img={blog02}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sep 26, 2021'
                    />
                      <Article 
                        img={blog03}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sep 26, 2021'
                    />
                      <Article 
                        img={blog04}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sep 26, 2021'
                    />
                      <Article 
                        img={blog05}
                        title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        date='Sep 26, 2021'
                    />
                </div>

            </div>
        </div>
    )
}

export default Blog
