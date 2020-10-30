import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a")
      .then((res) => {
        console.log(res.data.items);
        this.setState({
          books: res.data.items,
        });
      });
  }
  render() {
    var c = 0;
    return (
      <div>
        <h1 className="text-center">List of Users</h1>
        <div className="table-responsive">
          <table className="table ml-2 mr-4">
            <thead className="thead-light">
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((item) => {
                c = c + 1;
                return (
                  <tr>
                    <th>{c}</th>
                    <th className="w-50">{item.volumeInfo.title}</th>
                    <th>
                      <img
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        className="img-thumbnail float-right"
                      ></img>
                    </th>
                    <th>
                      <Link
                        to={{
                          pathname: "/description",
                          state: {
                            subtitle: item.volumeInfo.subtitle,
                            image: item.volumeInfo.imageLinks.thumbnail,
                          },
                        }}
                      >
                        View Details
                      </Link>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
