import PropTypes from "prop-types";
import clsx from "clsx";

const Grid = ({ children, columns, columnWidths, className }) => {
  const inlineStyles = columnWidths
    ? { gridTemplateColumns: columnWidths }
    : {};

  return (
    <div
      style={inlineStyles}
      className={clsx(
        "max-w-full grid box-border h-full max-h-full bg-white", // <-- added bg-white
        !columnWidths ? `grid-cols-${columns} md:grid-cols-${columns}` : "md:grid-cols-[auto]",
        className
      )}
    >
      {children?.map((child, index) => (
        <div key={index} className="col-span-full md:col-auto h-full w-full">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  columnWidths: PropTypes.string,
  className: PropTypes.string,
};

Grid.defaultProps = {
  columns: "2",
};
