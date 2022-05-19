import axios from "axios";
import { useEffect, useState } from "react";
import "./table.scss";
import { useNavigate } from "react-router-dom";

interface TableData {
  name: string;
  email: string;
  phone: number;
  country: string;
  position: string;
  id: number;
}

const Tables = () => {
  const [data, setData] = useState<TableData[] | []>([]);
  const [currentPage, setCurrrentPage] = useState<number>(1);
  const [dataPerPage] = useState<number>(5);
  const totalPage = data.length / dataPerPage;

  const pageNumber: number[] = [];

  const pagination = () => {
    for (let i = 1; i <= totalPage; i++) {
      pageNumber.push(i);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrrentPage(currentPage + 1);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_SECRET}.mockapi.io/table`)
      .then((response) => {
        setData(response.data);
      });

    return pagination;
  }, [pagination()]);

  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = (currentPage - 1) * dataPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);

  return (
    <div className="table-container">
      <h1 className="table-title">Employees</h1>
      <table className="table">
        <tr className="table-header">
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Phone</th>
          <th>Country</th>
        </tr>

        {currentData.map((element, key) => {
          return (
            <tr>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.position}</td>
              <td>{element.phone}</td>
              <td>{element.country}</td>
            </tr>
          );
        })}
      </table>
      <div className="pagination">
        <ul className="paginate">
          <li
            className={`page-number ${currentPage === 1 ? " disable " : ""} `}
            onClick={() => handlePrevious()}
          >
            {" "}
            〈{" "}
          </li>
          {pageNumber.map((number, ky) => {
            return (
              <li
                key={ky}
                className={`page-number ${
                  number === currentPage ? "active" : ""
                } `}
                onClick={() => setCurrrentPage(number)}
              >
                {number}
              </li>
            );
          })}
          <li
            className={`page-number ${
              currentPage === totalPage ? "disable" : ""
            } `}
            onClick={() => handleNext()}
          >
            {" "}
            〉{" "}
          </li>
        </ul>
      </div>
      <button className="go-to-btn" onClick={() => navigate("/")}>
        Go to Counter
      </button>
    </div>
  );
};

export default Tables;
