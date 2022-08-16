import React from "react";
import './Styles/book.css'
import books from "./BookDB.json";

function Book() {
  return (
    <>
      <div>
        <h3> Select yours! From our wide range of books </h3>
        {/* {console.log(BookDB.map())} */}
      </div>

      <div className="container ticket-container ">
                    <div className="row justify-content-cent">
                        {
                            books.map((item) => (

                                <div className="col-md-4">
                                    <div className={`card `}>   {/* ${this.getPriorityClass(item.priority)} */}
                                        <h4>{item.title}</h4>
                                        <h5>{item.author}</h5>
                                        <h6>Language: {item.language} &nbsp;&nbsp;  Pages: {item.pages}</h6>
                                        <p>Year {item.year} &nbsp;&nbsp; Country: {item.country}  </p>
                                        <img src={item.imageLink} alt="image not found" />
                                        <a href={item.link} target="_blank">
                                            <button className="btn btn-primary" >
                                                More info  {"        "}
                                                <i class="fa-solid fa-circle-info" style={{ marginLeft: '.9rem' }} >  </i>
                                            </button>
                                        </a>
                                        <button className="btn btn-primary" >
                                            Buy Now  {"        "}
                                            <i class="fa-solid fa-bag-shopping" style={{ marginLeft: '.9rem' }} >  </i>
                                        </button>
                                        {/* {console.log("data recieved")} */}
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>


    </>
  );
}

export default Book;
