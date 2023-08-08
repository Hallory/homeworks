import React from "react";
import module from "./Post.module.css";
const Post = ({ author, content, image, date }) => {
  return (
    <main>
    <div className={module.post__container}>
      <div className={module.img__container}>
        <span className={module.img__span}>
          <img src={author.photo} alt="Icon" />
        </span>
      </div>
      <div className={module.content__data}>
        <div className={module.data}>
          <div className={module.author__data}>
            <span>
              {author.name}
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-check-circle"
              ></i>
            </span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{author.nickname}</span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{author.date}</span>
          </div>
        </div>
        <div className={module.content__text}>{author.content}</div>
        <div className={module.content__image}><img src={author.image} alt="" /></div>
        <div className={module.activity__content}>
        <i class="fa-regular fa-heart"> <span style={{paddingLeft:"5px"}}>556</span> </i>
        <i class="fa-solid fa-share"><span style={{paddingLeft:"5px"}}>127</span></i>
        <i class="fa-regular fa-comment"><span style={{paddingLeft:"5px"}}>48</span></i>
        <i class="fa-solid fa-download"><span style={{paddingLeft:"5px"}}>Завантажити</span></i>
        </div>
      </div>
      
    </div>
    </main>
  );
};

export default Post;
