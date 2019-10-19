import React from "react";
import MaterialTable from "material-table";

import { RemoveShoppingCart } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "red"
  }
}));

const ItemTable = props => {
  const { title, data, columns } = props;
  const classes = useStyles();

  return (
    <MaterialTable
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10
      }}
      title={title}
      columns={columns}
      data={data}
      actions={[
        {
          icon: "delete",
          tooltip: "Remove Item",
          onClick: (e, rowData) => alert("you delete")
        }
      ]}
      components={{
        Action: props => (
          <RemoveShoppingCart
            onClick={event => props.action.onClick(event, props.data)}
            className={classes.icon}
          />
        )
      }}
      options={{
        actionsColumnIndex: -1,
        headerStyle: {
          color: "#2699FB",
          fontWeight: "bold"
        }
      }}
    />
  );
};

export default ItemTable;
