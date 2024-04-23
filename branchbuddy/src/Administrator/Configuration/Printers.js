import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Printers = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const [printer, setPrinter] = useState({
    id: 1,
    name: "",
    applicationServer: [
      "APP_SERVER",
      "OnLine",
      "VSORT_SERVER",
      "OnLine",
      "localhost",
      "OnLine",
    ],
    path: "",
    irDsPerPage: "",
  });

  const trays = [
    { id: 1, trayType: 'Forward IRD', trayName: 'Tray 2' },
    { id: 2, trayType: 'Return IRD', trayName: 'Tray 3' },
    { id: 3, trayType: 'Bundle List', trayName: 'Tray 1' },
  ];

  return (
    <div className="container">
      <div className="form-container">
        <div style={{ width: "100%" }}>
          <h1 style={{ width: "100%" }}>Printers</h1>
          <div>
            <label htmlFor="printerName">Printer Name:</label>
            <input
              type="text"
              id="printerName"
              value={printer.name}
              onChange={(e) => setPrinter({ ...printer, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="applicationServer">Application Server:</label>
            <select
              id="applicationServer"
              multiple
              value={printer.applicationServer}
              onChange={(e) =>
                setPrinter({
                  ...printer,
                  applicationServer: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  ),
                })
              }
            >
              <option value="APP_SERVER">APP_SERVER</option>
              <option value="OnLine">OnLine</option>
              <option value="VSORT_SERVER">VSORT_SERVER</option>
              <option value="localhost">localhost</option>
            </select>
          </div>
          <div>
            <label htmlFor="printerPath">Path:</label>
            <input
              type="text"
              id="printerPath"
              value={printer.path}
              onChange={(e) => setPrinter({ ...printer, path: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="irdsPerPage">IRDs per page:</label>
            <input
              type="text"
              id="irdsPerPage"
              value={printer.irDsPerPage}
              onChange={(e) =>
                setPrinter({ ...printer, irDsPerPage: e.target.value })
              }
            />
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <h1 style={{ width: "100%" }}>Trays</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tray Type ID</th>
                <th>Tray Name</th>
              </tr>
            </thead>
            <tbody>
              {trays.map((tray, index) => (
                <tr key={index}>
                  <td>{tray.id}</td>
                  <td>
                    <input
                      type="text"
                      id={`trayType${index}`}
                      value={tray.trayType}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id={`trayName${index}`}
                      value={tray.trayName}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-row">
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add Printer</button>
          </Link>
          <Link to="/addBlockRangeDefinition">
            <button className="addButton">Add Tray</button>
          </Link>
          <Link to="/saveBlockRangeDefinition">
            <button className="addButton">Save</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete Printer</button>
          </Link>
          <Link to="/deleteBlockRangeDefinition">
            <button className="cancel-button">Delete Tray</button>
          </Link>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Printers;
