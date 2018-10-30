import React, { PureComponent } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import 'react-table/react-table.css';

const TableWrapper = Styled.div`
  position: relative;
  background: transparent;

  .ReactTable {
    min-height: 100px;
    font-family: ${props => props.theme.fonts.mono};
  }

  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td,
  .ReactTable .rt-thead.-header {
    box-shadow: none;
    border-bottom: 1px solid #eee;
    font-family: ${props => props.theme.fonts.sans};
    font-weight: 700;
  }
`;

class DataTable extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;

    data.columns = data.columns || [];

    const columns = data.columns.filter(col => col.indexOf('__' !== 0)).map(col => ({
      Header: col,
      accessor: col,
      Cell: row => (<div>{JSON.stringify(row.value)}</div>)
    }));

    return (
      <TableWrapper>
        <ReactTable
          data={data}
          columns={columns}
          showPagination={false}
          sortable={false}
          defaultPageSize={5}
        />
      </TableWrapper>
    );
  }
}

export default DataTable;
