import React, { useState } from "react";
import axios from "axios";
import {Card,Button } from "react-bootstrap";
import { getValue } from "@testing-library/user-event/dist/utils";

function Fetch() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-03-31&sortBy=popularity&apiKey=7bbb0d1f609b4a2485dba7d434eefdc7"
      )
      .then((response) => {
     console.log(response);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              Fetch News
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
           {
               news.map((value)=>{
                   return(
                    <Card style={{ marginTop:"5px" }}>
                    <Card.Img variant="top" src={value.urlToImage} width="100" height="50%" />
                    <Card.Body>
                      <Card.Title>{value.content}</Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                      <a href="#" className="btn btn-primary">{value.publishedAt}</a>
                    </Card.Body>
                  </Card>
                   )
               }
               )

           }
          </div>
        </div>
      </div>
    </>
  );
}

export default Fetch;
