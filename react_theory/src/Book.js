import React from "react";

const Book =()=>{
    const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpdRhb5kz0ccGt4GglU_Izzh27lx6t9Gj_g&s";
    const title="The Power of Subconsious Mind";
    const publisher="Joseph Murhpy";
    const price="100";

    return(
        <div className="book">
            <div className="book-image">
                <img src={image}></img>
            </div>
            <div className="book-info">
                <h2>{title}</h2>
                <p className="book-author">by {publisher}</p>
                <p className="book-price">{price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Book;