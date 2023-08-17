import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(){
    let post = blogData.posts
    let articles = post.map((posts)=>(
<Article 
key = {posts.id}
title ={posts.title}
date ={posts.date}
preview ={posts.preview}
minutes ={post.minutes}
/>
    ))
return (    
   /*map looping in react*/
   <main>
        {articles}
    </main>
)
}
export default ArticleList;