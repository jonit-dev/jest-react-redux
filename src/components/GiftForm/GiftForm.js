import React, { Component } from "react";
import ListItem from "../List/ListItem";
import { connect } from "react-redux";
import { addGift, deleteGift } from "../../store/actions/gift.actions";
import { getPosts } from "../../store/actions/post.actions";

export class GiftForm extends Component {
  state = {
    gift: {
      description: "",
      person: ""
    }
  };

  componentDidMount() {
    this.props.getPosts().then(posts => {
      console.log(this.props.posts);
    });
  }

  onClearGiftInput() {
    this.setState({
      gift: {
        description: "",
        person: ""
      }
    });
  }

  onRenderGiftList() {
    return this.props.gifts.map(gift => (
      <ListItem
        {...gift}
        key={gift.id}
        onDeleteItem={id => this.props.deleteGift(id)}
      />
    ));
  }

  onAddNewGift() {
    //check if gift to be added is not null

    if (!this.state.gift.person || !this.state.gift.description) {
      alert("You cannot add an empty gift");
      return false;
    }

    //add new gift to the redux store
    this.props.addGift({
      id: this.props.gifts.length + 1,
      ...this.state.gift
    });

    // clear local state

    this.onClearGiftInput();
  }

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Person</label>
            <input
              type="text"
              className="form-control input-person"
              placeholder="Enter a new gift"
              value={this.state.gift.person}
              onChange={e =>
                this.setState({
                  gift: { ...this.state.gift, person: e.target.value }
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Gift</label>
            <input
              type="text"
              className="form-control input-gift"
              placeholder="Enter a new gift"
              value={this.state.gift.description}
              onChange={e =>
                this.setState({
                  gift: {
                    ...this.state.gift,
                    description: e.target.value
                  }
                })
              }
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block btn-add"
            onClick={() => this.onAddNewGift()}
          >
            Add a new gift
          </button>
        </form>

        <hr />

        <ul className="list-group gift-list">{this.onRenderGiftList()}</ul>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { gifts: state.giftsReducer.gifts, posts: state.postsReducer.posts };
};

export default connect(
  mapStateToProps,
  {
    addGift,
    deleteGift,
    getPosts
  }
)(GiftForm);
