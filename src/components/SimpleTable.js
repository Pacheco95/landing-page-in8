import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useState, useEffect } from "react";
import api from "services";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function formatPhoneNumber(s) {
  return s.replace(/^(\d{2})(\d)(\d{4})(\d{4}).*/, "($1) $2 $3\u2013$4");
}

export default function SimpleTable() {
  const classes = useStyles();

  const [users, setUsers] = useState();

  function fetchUsers() {
    api
      .get("/user")
      .then((response) => response.data)
      .then(setUsers)
      .catch();
  }

  useEffect(fetchUsers, []);

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Nascimento</TableCell>
            <TableCell align="right">Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {moment(row.birthDate).format("L")}
                </TableCell>
                <TableCell align="right">
                  {formatPhoneNumber(row.phone)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
