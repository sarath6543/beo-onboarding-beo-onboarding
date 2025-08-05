import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Chip from '@mui/material/Chip';

const TableWrapper = ({ children, className }) => {
  return (
    <div className={clsx("overflow-x-auto mt-5", className)}>
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  );
};

TableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


const StaticTableHeader = ({ headers, enableSelectAll, onSelectAll }) => (
  <thead>
    <tr className="bg-grey sticky top-0 z-10">
      <th className="px-6 py-2 w-0">
        {enableSelectAll && (
          <input
            type="checkbox"
            onChange={(e) => onSelectAll(e.target.checked)}
          />
        )}
      </th>
      {headers.map((header) => (
        <th
          key={header.id}
          className="px-6 py-3 text-left text-sm font-medium text-text tracking-wider"
        >
          {header.name}
        </th>
      ))}
    </tr>
  </thead>
);

StaticTableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  enableSelectAll: PropTypes.bool,
  onSelectAll: PropTypes.func.isRequired,
};


const TableBody = ({
  data,
  headers,
  onRowClick,
  selectedRows,
  onRowSelection,
}) => {
  const { t } = useTranslation("language");

  const getOfferStatus = (status) => {
    switch (status) {
      case 'error':
        return 'Rejected';
      case 'success':
        return 'Accepted';
      default:
        return 'Pending'
    }
  }
  const chipColor = (status) => {
  switch (status) {
    case 'error':
      return 'error';
    case 'success':
      return 'success';
    case 'pending':
      return 'warning';
    case 'progress':
      return 'warning';
    default:
      return '';
  }
}

  const getStatus = (status) => {
  switch (status) {
    case 'error':
      return 'Rejected';
    case 'success':
      return 'Success';
    case 'progress':
      return 'In Progress';
    default:
      return 'Yet to Start';
  }
};

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((row, rowIndex) => {
          const isSelected = selectedRows.some(
            (selectedRow) => selectedRow.id === row.id
          );

          return (
            <tr
              key={rowIndex}
              className={clsx("hover:bg-border", {
                "bg-gray-200": isSelected,
              })}
            >
              <td className="px-6 py-3 w-0">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onRowSelection(row)}
                />
              </td>
              {headers.map((header) => (
                <td
                  key={header.id}
                  onClick={() => onRowClick && onRowClick(row)}
                  style={{ width: `${100 / headers.length}%` }}
                  className="px-6 text-sm text-text py-3 break-normal lg:break-all"
                >{
                    header.id === "offerstatus" 
                      ? <div><Chip label={getOfferStatus(row.offerstatus)} color={chipColor(row.offerstatus)} variant="outlined"/></div>
                    :  header.id === "status"
                      ? <div><Chip label={getStatus(row.status)} color={chipColor(row.status)} /></div>
                    :   row[header.id]
                  }
                 
                </td>
              ))}
            </tr>
          );
        })
      ) : (
        <tr>
          <td
            colSpan={headers.length + 1}
            className="text-center py-4 text-gray-500"
          >
            {t("common.table.NoData")}
          </td>
        </tr>
      )}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRowClick: PropTypes.func,
  selectedRows: PropTypes.array,
  onRowSelection: PropTypes.func.isRequired,
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const options = [5, 10, 20, 50];

  return (
    <div className="flex flex-wrap justify-between items-center mt-4 gap-4 px-4">
      <div className="flex items-center gap-2">
        <label htmlFor="itemsPerPage" className="text-sm font-medium">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          className="border rounded px-2 py-1 text-sm"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage ? "bg-gray-300 font-bold" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
};


Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


const Table = ({
  headers: initialHeaders,
  data,
  onRowClick,
  onSelectionChange,
  singleSelect = false,
  enableSelectAll = false,
  itemsPerPage = 10,
  resetKey = 0,
}) => {
  const [headers] = useState(
    initialHeaders.map((header) => ({
      id: header.key,
      name: header.name,
    }))
  );

  const [selectedRows, setSelectedRows] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [perPage, setPerPage] = useState(itemsPerPage);
const totalPages = Math.ceil(data.length / perPage);


const paginatedData = () => {
  const start = (currentPage - 1) * perPage;
  return data.slice(start, start + perPage);
};


  const handleRowSelection = (row) => {
    setSelectedRows((prevSelected) => {
      let newSelectedRows;
      if (singleSelect) {
        newSelectedRows = prevSelected[0]?.id === row.id ? [] : [row];
      } else {
        const isSelected = prevSelected.some(
          (selectedRow) => selectedRow.id === row.id
        );
        newSelectedRows = isSelected
          ? prevSelected.filter((r) => r.id !== row.id)
          : [...prevSelected, row];
      }

      onSelectionChange(newSelectedRows);
      return newSelectedRows;
    });
  };

  const handleSelectAll = (isChecked) => {
    const visibleData = paginatedData();
    if (isChecked) {
      setSelectedRows(visibleData);
      onSelectionChange(visibleData);
    } else {
      setSelectedRows([]);
      onSelectionChange([]);
    }
  };

  useEffect(() => {
    setSelectedRows([]);
    onSelectionChange([]);
    setCurrentPage(1); // Reset to page 1 on resetKey change
  }, [resetKey]);

  return (
    <>
      <TableWrapper>
        <StaticTableHeader
          headers={headers}
          enableSelectAll={enableSelectAll}
          onSelectAll={handleSelectAll}
        />
        <TableBody
          data={paginatedData()}
          headers={headers}
          onRowClick={onRowClick}
          selectedRows={selectedRows}
          onRowSelection={handleRowSelection}
        />
      </TableWrapper>
  <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={(page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  }}
  itemsPerPage={perPage}
  onItemsPerPageChange={(newCount) => {
    setPerPage(newCount);
    setCurrentPage(1); 
  }}
/>


    </>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
  onSelectionChange: PropTypes.func.isRequired,
  singleSelect: PropTypes.bool,
  enableSelectAll: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  resetKey: PropTypes.number,
};

export default Table;
