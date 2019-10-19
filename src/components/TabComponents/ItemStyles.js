import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  radio: {
    display: "flex",
    alignItems: "center"
  },
  gridContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50
  },
  gridItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonGroup: {
    display: "flex",
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignSelf: "space-around",
    alignItems: "center"
  },
  buttonCancel: {
    backgroundColor: "#B72203",
    marginLeft: 30,
    marginRight: 30
  },
  buttonAdd: {
    backgroundColor: "#FFB911",
    marginLeft: 30,
    marginRight: 30
  },
  buttonSave: {
    backgroundColor: "#3391D4",
    marginLeft: 30,
    marginRight: 30
  },
  buttonSubmit: {
    backgroundColor: "#488520",
    marginLeft: 30,
    marginRight: 30
  },
  icon: {
    color: "white"
  },
  timeGrid: {
    display: "flex",
    alignItems: "center"
  }
}));

export default useStyles;
