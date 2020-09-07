import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, mail, birthDate, phone) {
  return { name, mail, birthDate, phone };
}

const rows = [
  createData("Mariazinha Correia", 'mariazinha@gmail.com', '01/01/2000', '(31) 9 9999-9999'),
  createData("Joaozinho Timóteo", 'joaozinho@gmail.com', '01/01/2000', '(31) 9 9999-9999'),
  createData("Joaquim Palmeira", 'jopalm@hotmail.com', '01/01/2000', '(31) 9 9999-9999'),
  createData("Marquinhos Henruique", 'marquim@gmail.com', '01/01/2000', '(31) 9 9999-9999'),
];

export default function SimpleTable() {
  const classes = useStyles();

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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.birthDate}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
