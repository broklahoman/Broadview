import React, { Component } from "react";
import API from "../../utils/API";

class sneakerCard extends Component {

}

render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              onClick={() => this.favoriteSneaker(this.props.sneaker)}
              style={styles.favoriteStyle}
              className={this.props.sneaker.favorited ? "fa fa-star gold" : "fa fa-star-o"}
              aria-hidden="true"
            />
            <i
              onClick={() => this.deleteQuote(this.props.quote._id)}
              style={styles.deleteStyle}
              className="fa fa-trash-o"
              aria-hidden="true"
            />
            {this.props.quote.text}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;