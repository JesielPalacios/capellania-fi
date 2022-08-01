import "./tableElements.jsx"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tableconta } from "./tableElements.jsx";

export const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "AE",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 1,
      method: "Estudiante",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "CP",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 3,
      method: "Egresado",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "II",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 10,
      method: "Estudiante",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "IS",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 8,
      method: "Directivo",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "LT",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 5,
      method: "Profesor",
      status: "Pending",
    },
  ];
  return (
    <Tableconta>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Seguimiento ID</TableCell>
            <TableCell className="tableCell">Carrera</TableCell>
            <TableCell className="tableCell">Usuario</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Semestre</TableCell>
            <TableCell className="tableCell">Tipo</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Tableconta>
  );
};

