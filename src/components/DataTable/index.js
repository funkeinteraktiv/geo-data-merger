import React, { PureComponent } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import 'react-table/react-table.css';

const TableWrapper = Styled.div`
  position: relative;
  background: transparent;

  .ReactTable {
    font-family: ${props => props.theme.fonts.mono};
    height: 200px;
  }

  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td,
  .ReactTable .rt-thead.-header {
    box-shadow: none;
    border-bottom: 1px solid #eee;
    font-family: ${props => props.theme.fonts.sans};
    font-weight: 700;
  }

  .ReactTable .rt-noData {
    font-family: ${props => props.theme.fonts.sans};
    text-align: center;
    color: ${props => props.theme.colors.black};
    background: transparent;
    font-weight: 700;
  }
`;

class DataTable extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    excludeFields: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    data: [],
    excludeFields: []
  }

  render() {
    const { data, excludeFields } = this.props;

    const columns = (data.columns || [])
      // don't show columns we created in the background, don't show excluded fields
      .filter(col => col.indexOf('__' !== 0) && !excludeFields.find(fieldName => fieldName === col))
      .map(col => ({
        Header: col,
        accessor: col,
        Cell: row => JSON.stringify(row.value)
      }));

    return (
      <TableWrapper>
        <ReactTable
          className="-striped"
          data={data}
          columns={columns}
          showPagination={false}
          sortable={false}
          minRows={0}
          noDataText="↑ Please upload a file to see the result."
        />
      </TableWrapper>
    );
  }
}

export default DataTable;
