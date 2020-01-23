/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as TYPES from '../constants/actionTypes';
// import workbooksReducer from '../reducers/workbooksReducers';
import * as workbookActions from '../actions/workbookActions';

// import from child components...


// map state to props
const mapStateToProps = (state) => ({
  activeWorkbook: state.workbookReducer.activeWorkbook,
  activeWorkbookData: state.workbookReducer.activeWorkbookData,
  activeWorkbookUserDefinedName: state.workbookReducer.activeWorkbookUserDefinedName,
});

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  // Update one
  updateWorkbook: (workbookId, value, index) => (
    dispatch(workbookActions.updateWorkbook(workbookId, value, index))
  ),
});

// build container class

class WorkbookContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // const { activeWorkbook, updateWorkbook } = this.props;

    // fetch('/workbook/toc')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data);
    //   });
  }

  // eslint-disable-next-line class-methods-use-this
  saveWorkbook(activeWorkbook) {
    const cells = document.getElementsByClassName('workbook-cell');
    console.log(cells.length);
    console.log(activeWorkbook);
    const newData = [];

    for (let i = 0; i < cells.length; i += 1) {
      newData.push(cells[i].value);
    }

    const data = {
      data: newData,
    };
    const url = `/workbook/${activeWorkbook}`;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    const {
      activeWorkbook,
      activeWorkbookData,
      activeWorkbookUserDefinedName,
      updateWorkbook,
    } = this.props;

    // console.log('props: ', this.props);

    let activeWB = [];
    let sheet = [];
    const spreadsheetCells = [];

    if (activeWorkbook) {
      activeWB = (
        <div style={{ textAlign: 'center' }}>
          Editing:
          {' '}
          {activeWorkbookUserDefinedName}
          <br />
          {activeWorkbook}
        </div>
      );
      for (let i = 0; i < 100; i += 1) {
        let textValue = '';
        textValue = activeWorkbookData[i];

        spreadsheetCells.push(
          <input
            className="workbook-cell"
            cellNum={i}
            type="text"
            value={textValue}
            onChange={(event) => {
              event.preventDefault();
              // console.log('edit to cell');
              // console.log(event.target.value);
              // console.log(event.target.getAttribute('cellNum'));
              updateWorkbook(activeWorkbook, event.target.value, event.target.getAttribute('cellNum'));
            }}
          />,
        );
      }
      sheet = (
        <div>
          <h3>Data:</h3>
          <form onSubmit={(event) => {
            event.preventDefault();
            this.saveWorkbook(activeWorkbook);
          }}
          >
            <div className="workbook-sheet grid-container">
              {spreadsheetCells}
            </div>
            <br />
            <button>Save Changes</button>
          </form>
        </div>
      );
    } else {
      activeWB = (
        <div style={{ textAlign: 'center' }}>
          Editor Off!
        </div>
      );
    }

    return (
      <div className="workbook-container grid-container">
        <h3>Workbook Editor</h3>
        {activeWB}
        <div />
        {sheet}
        {/* <br /> */}
        {/* {activeWorkbookData} */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkbookContainer);
