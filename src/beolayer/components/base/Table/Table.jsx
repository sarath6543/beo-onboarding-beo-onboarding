import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTranslation } from "react-i18next";



const TableWrapper = ({ children, className, onScrollBottom }) => {
  const tableRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = tableRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          onScrollBottom();
        }
      }
    };

    const tableElement = tableRef.current;
    tableElement.addEventListener("scroll", handleScroll);

    return () => {
      tableElement.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollBottom]);

  return (
    <div
      ref={tableRef}
      className={clsx("overflow-x-auto mt-5", className, "max-h-full")}
    >
      <table className="min-w-full divide-y divide-gray-200 max-h-full">
        {children}
      </table>
    </div>
  );
};

const TableHeaderCell = ({ id, columnName }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <th
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-6 py-3 text-left text-sm font-medium text-text tracking-wider cursor-grab"
    >
      {columnName}
    </th>
  );
};

const DraggableTableHeader = ({
  headers,
  setHeaders,
  enableSelectAll,
  onSelectAll,
}) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = headers.findIndex((header) => header.id === active.id);
      const newIndex = headers.findIndex((header) => header.id === over.id);
      setHeaders((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={headers.map((header) => header.id)}
        strategy={horizontalListSortingStrategy}
      >
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
              <TableHeaderCell
                key={header.id}
                id={header.id}
                columnName={header.name}
              />
            ))}
          </tr>
        </thead>
      </SortableContext>
    </DndContext>
  );
};

const TableBody = ({
  data,
  headers,
  onRowClick,
  selectedRows,
  onRowSelection,
}) => {
  const { t } = useTranslation("language");
  return (
    <tbody className="bg-white divide-y divide-border">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((row, rowIndex) => {
          const isSelected = selectedRows.some(
            (selectedRow) => selectedRow.id === row.id
          );

          return (
            <tr
              key={rowIndex}
              className={clsx("hover:bg-border", { "bg-gray-200": isSelected })}
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
                  onClick={() => onRowClick(row)}
                  key={header.id}
                  style={{ width: `${100 / headers.length}%` }}
                  className="px-6 text-sm text-text py-3 break-normal lg:break-all"
                >
                  {row[header.id]}
                </td>
              ))}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={headers.length + 1} className="text-center py-4 text-gray-500">
            {t("common.table.NoData")}
          </td>
        </tr>
      )}
    </tbody>
  );
};

const Table = ({
  headers: initialHeaders,
  data,
  onRowClick,
  onSelectionChange,
  singleSelect = false,
  enableSelectAll = false,
  onScrollBottom,
  resetKey = 0
}) => {
  const [headers, setHeaders] = useState(
    initialHeaders.map((header) => ({
      id: header.key,
      name: header.name,
    }))
  );

  const [selectedRows, setSelectedRows] = useState([]);

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
          ? prevSelected.filter((selectedRow) => selectedRow.id !== row.id)
          : [...prevSelected, row];
      }

      onSelectionChange(newSelectedRows);
      return newSelectedRows;
    });
  };

  useEffect(() => {
    setSelectedRows([]);
    onSelectionChange([]);
  }, [resetKey]);

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(data);
      onSelectionChange(data);
    } else {
      setSelectedRows([]);
      onSelectionChange([]);
    }
  };

  return (
    <TableWrapper onScrollBottom={onScrollBottom}>
      <DraggableTableHeader
        headers={headers}
        setHeaders={setHeaders}
        enableSelectAll={enableSelectAll}
        onSelectAll={handleSelectAll}
      />
      <TableBody
        data={data}
        headers={headers}
        onRowClick={onRowClick}
        selectedRows={selectedRows}
        onRowSelection={handleRowSelection}
      />
    </TableWrapper>
  );
};

export default Table;

TableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onScrollBottom: PropTypes.func.isRequired,
};

TableHeaderCell.propTypes = {
  id: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
};

DraggableTableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setHeaders: PropTypes.func.isRequired,
  enableSelectAll: PropTypes.bool,
  onSelectAll: PropTypes.func.isRequired,
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

DraggableTable.propTypes = {
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
  onScrollBottom: PropTypes.func.isRequired,
  resetKey: PropTypes.number
};
