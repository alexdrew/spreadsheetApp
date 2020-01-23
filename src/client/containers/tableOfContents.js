import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as TYPES from '../constants/actionTypes';
import * as workbookActions from '../actions/workbookActions';
import workbooksReducer from '../reducers/workbooksReducers';

// import from child components...


// map state to props
const mapStateToProps = (state) => ({
  tableOfContents: state.workbookReducer.tableOfContents,
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
  // Read one
  openWorkbook: (workbookId) => (
    dispatch(workbookActions.openWorkbook(workbookId))
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
  }

  componentDidMount() {
    const { updateTableOfContents } = this.props;
    const userName = 'Alex';

    // console.log(workbookActions.getTableOfContents(userName));
    fetch('/workbook/toc')
      .then(data => data.json())
      .then(data => {
        console.log(data);
        updateTableOfContents(userName, data);
      });
  }

  render() {
    const tableOfContentsRows = [];

    return (
      <div className="toc-container">
        <h3>Table Of Contents</h3>
        <hr />
        <div className="toc-rows">
          {tableOfContentsRows}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableOfContents);
