import React, { Component } from "react";

class InputUrlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websiteUrl: "",
      isValid: false
    };
  }

  validateWebsiteUrl = websiteUrl => {
    const urlRegEx =
      "[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?";
    return urlRegEx.test(String(websiteUrl).toLowerCase());
  };

  changeUrl = e => {
    const { value } = e.target;
    const isValid = !value || this.validateWebsiteUrl(value);

    this.setState({
      websiteUrl: value,
      isValid
    });
  };

  submitForm = () => {
    const { websiteUrl } = this.state;
    console.log("Website URL", websiteUrl);
  };

  render() {
    const { isValid, websiteUrl } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            name="websiteUrl"
            value={websiteUrl}
            onChange={this.changeUrl}
          />
          {!this.state.isValid && (
            <div style={{ color: "red" }}>URL is invalid</div>
          )}
          <br />
          <button onClick={this.submitForm} disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default InputUrlComponent;
