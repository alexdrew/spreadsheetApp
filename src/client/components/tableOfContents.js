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
  activeWorkbook: state.workbookReducer.activeWorkbook,
});

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  // Read all
  updateTableOfContents: (userName, data) => (
    dispatch(workbookActions.updateTableOfContents(userName, data))
  ),
  // Create
  newWorkbook: (userName, workbookName) => (
    dispatch(workbookActions.newWorkbook(userName, workbookName))
  ),
  setOpenWorkbook: (workbookId, data) => (
    dispatch(workbookActions.setOpenWorkbook(workbookId, data))
  ),
  // Update one
  updateWorkbook: (workbookId, data) => (
    dispatch(workbookActions.updateWorkbook(workbookId, data))
  ),
  // Delete one
  deleteWorkbook: (workbookId) => (
    dispatch(workbookActions.deleteWorkbook(workbookId))
  ),
});

// build container class

class TableOfContents extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.componentDidMount.bind(this);
    this.userName = 'Alex';
  }

  componentDidMount() {
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

  setActiveWorkbook(workbookId) {
    // console.log('opening ', workbookId);
    const { setOpenWorkbook } = this.props;

    const url = `/workbook/${workbookId}`;
    fetch(url, {
      method: 'GET',
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        const workbookData = data;
        console.log('Workbook Data: ', workbookData);
        setOpenWorkbook(workbookId, workbookData);
      });
  }

  deleteWorkbook(workbookId) {
    console.log('deleting ', workbookId);
    const { updateTableOfContents } = this.props;
    const { userName } = this;

    const url = `/workbook/${workbookId}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(data => data.json())
      .then(data => {
      // console.log(data);
        updateTableOfContents(userName, data);
      });
  }

  render() {
    const { tableOfContents } = this.props;
    const tableOfContentsCells = [];
    const length = tableOfContents ? tableOfContents.length : 0;

    for (let i = 0; i < length; i += 1) {
      const currentWorkbook = tableOfContents[i];
      tableOfContentsCells.push(
        <div key={`${currentWorkbook._id}_workBookName`}>
          {currentWorkbook.name}
        </div>,
      );
      tableOfContentsCells.push(
        <div className="toc-buttons" key={`${currentWorkbook._id}_buttons`}>
          <button
            onClick={() => this.setActiveWorkbook(currentWorkbook._id)}
            key={`${currentWorkbook._id}_editButton`}
          >
            Edit
          </button>
          <span>  </span>
          <button
            onClick={() => this.deleteWorkbook(currentWorkbook._id)}
            key={`${currentWorkbook._id}_deleteButton`}
          >
            Delete
          </button>
        </div>,
      );
    }

    return (
      <div className="toc-container grid-container">
        <h3 key="toc-header">Table Of Contents</h3>
        <div key="toc-table" className="toc-table grid-container">
          {tableOfContentsCells}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
