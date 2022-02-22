import React from "react";
import { Button, Modal } from "semantic-ui-react";

import Map1 from "./Map1";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      dataList: [],
      error1: "",
      open: false,
      text1: "",
    };
    let str = "";
  }

  fun = () => {
    this.setState({ open: !this.state.open });
  };
  handleData = (event) => {
    this.setState({ data: event.target.value });
  };
  handleAdd = () => {
    if (this.state.data == "") {
      this.setState({ error1: "enter title." });
    } else {
      this.setState({ dataList: [this.state.data, ...this.state.dataList] });

      this.setState({ data: " " });
    }
  };
  handleDelete = (data) => {
    this.setState({
      dataList: this.state.dataList.filter((post) => post != data),
    });
  };
  handleEdit = () => {
    let old1 = this.str;
    let new1 = this.state.text1;
    this.setState({
      dataList: this.state.dataList.map((Tpost) => {
        if (old1 == Tpost) {
          return [...new1];
        } else {
          return [...Tpost];
        }
      }),
    });
    this.fun();
  };
  handleModal = (data) => {
    this.str = data;
    this.fun();
  };

  handleText1 = (event) => {
    this.setState({ text1: event.target.value });
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: "url(" + "./images/b2.jpg" + ")",
            backgroundSize: "cover",
            height: "1500px",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              marginLeft: "350px",
              marginRight: "400px",

              border: "4px solid rgba(247, 141, 167, 0.73)",
              borderRadius: "10px",
            }}
          >
            <h1 style={{ color: "#0E6EB8", textAlign: "center" }}>
              TO DO LIST
            </h1>

            <input
              placeholder="Enter here"
              value={this.state.data}
              onChange={this.handleData}
              style={{ marginLeft: "162px" }}
            />
            <p>{this.state.error1}</p>
            <Button
              basic
              color="teal"
              onClick={this.handleAdd}
              style={{ marginLeft: "220px" }}
            >
              Add
            </Button>
            <br />
            <br />

            <Map1
              dataList={this.state.dataList}
              handleDelete={this.handleDelete}
              handleModal={this.handleModal}
            />
            <Modal onClose={this.fun} onOpen={this.fun} open={this.state.open}>
              <Modal.Header>UPDATE INFORMATION</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <input onChange={this.handleText1} value={this.state.text1} />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={this.fun}>
                  CANCEL
                </Button>
                <Button
                  content="SAVE"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={this.handleEdit}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}
export default App;
