import React from "react";
import "./styles.css";

class TableInput extends React.Component {
  state = {
    rows: [{}]
  };

  handleChange = (idx, e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      ...rows[idx],
      [name]: value
    };
    this.setState({
      rows
    });
  };

  handleAddRow = () => {
    const item = {};
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  render() {
    const { headers } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table className="table table-bordered table-hover" id="tab_logic">
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th className="text-center" key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id={idx} key={idx}>
                      {headers.map((header, index) => (
                        <td key={index}>
                          <input
                            type="text"
                            name={header.replace(/\s/g, "").toLowerCase()}
                            value={item[header.replace(/\s/g, "").toLowerCase()] || ""}
                            onChange={(e) => this.handleChange(idx, e)}
                            className="form-control"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="addButton">
                Add Row
              </button>
              <button onClick={this.handleRemoveRow} className="cancel-button">
                Delete Last Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableInput;
