// ? Get jsx attributes off event

/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as TYPES from '../constants/actionTypes';
// import workbooksReducer from '../reducers/workbooksReducers';
import * as workbookActions from '../actions/workbookActions';

// import from child components...


// map state to props
const mapStateToProps = (state) => ({
  tableOfContents: state.workbookReducer.tableOfContents,
  newWorkBookName: state.workbookReducer.newWorkBookName,
  newWorkBookOwner: state.workbookReducer.newWorkBookOwner,
});

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  // Read all
  updateTableOfContents: (userName, data) => (
    dispatch(workbookActions.updateTableOfContents(userName, data))
  ),
});

// build container class

class WorkbookCreator extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.userName = 'Alex';
    // create;
    // this.createNewWorkbook = this.createNewWorkbook.bind(this);
  }

  componentDidUpdate() {
    const { updateTableOfContents } = this.props;
    const { userName } = this;

    // console.log(workbookActions.getTableOfContents(userName));
    fetch('/workbook/toc')
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        updateTableOfContents(userName, data);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  createNewWorkbook(event) {
    console.log('creating new wb');

    event.preventDefault();
    // const formData = new FormData(event.target);
    console.log('Form Data: \n', event.target);

    console.log('This: ', this);
    // const { updateTableOfContents } = this.props;
    // const { userName } = this;
    // create new workbook
    const wbName = document.getElementById('workbookName').value;
    console.log('Text Value: ', wbName);

    const data = {
      name: wbName,
      owner: 'Alex',
    };

    fetch('/workbook/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    // // Parse data and check response
    // .then(data => data.json())
    // .then(data => {
    //   console.log('data received');
    //   console.log(data);
    // })
    // // update table of contents
    // .then(() => {
    //   console.log('commencing TOC update');

    //   fetch('/workbook/toc')
    //     .then(data => data.json())
    //     .then(data => {
    //       console.log(data);
    //       // updateTableOfContents(userName, data);
    //     });
    // });

    // TODO: clear input fields
  }


  render() {
    const { createNewWorkbook } = this;

    return (
      <div className="workbook-creator grid-container">
        <h3>Workbook Creator</h3>
        <form onSubmit={createNewWorkbook}>
          <label htmlFor="workbookName">Enter workbook name: </label>
          <input id="workbookName" name="workbookName" type="text" />
          <span>    </span>
          <button>Create new workbook</button>
        </form>
        {/* <button
          onClick={createNewWorkbook}
          key="button-workbookCreator"
        >
        Create Workbook
        </button> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkbookCreator);
