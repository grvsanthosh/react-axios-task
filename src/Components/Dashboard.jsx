import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import ApiService from "../Utils/ApiService";
import ApiRouter from "../Utils/ApiRouter";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Dashboard() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let getData = async () => {
    try {
      let response = await ApiService.get(ApiRouter.USER_DATA);
      if (response.status === 200) {
        toast.success("Successfully fetched data");

        setData(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    {
      try {
        let response = await ApiService.delete(`${ApiRouter.USER_DATA}/${id}`);
        if (response.status === 200) {
          toast.success("Successfully deleted");

          getData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Table
        striped
        bordered
        hover
        responsive="xl"
        style={{
          textAlign: "center",
          border: "2px solid",
        }}
      >
        <thead>
          <tr>
            <th rowSpan={3}>#</th>
            <th rowSpan={3}>name</th>
            <th rowSpan={3}>username</th>
            <th rowSpan={3}>email</th>
            <th colSpan={6}>address</th>
            <th rowSpan={3}>phone</th>
            <th rowSpan={3}>Website</th>
            <th colSpan={3}>company</th>
            <th rowSpan={3}>Actions</th>
          </tr>
          <tr>
            <th rowSpan={2}>street</th>
            <th rowSpan={2}>suite</th>
            <th rowSpan={2}>city</th>
            <th rowSpan={2}>zipcode</th>
            <th colSpan={2}>geo</th>
            <th rowSpan={2}>name</th>
            <th rowSpan={2}>catchPhrase</th>
            <th rowSpan={2}>bs</th>
          </tr>
          <tr>
            <th>lat</th>
            <th>lng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address.street}</td>
                <td>{e.address.suite}</td>
                <td>{e.address.city}</td>
                <td>{e.address.zipcode}</td>
                <td>{e.address.geo.lat}</td>
                <td>{e.address.geo.lng}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>{e.company.name}</td>
                <td>{e.company.catchPhrase}</td>
                <td>{e.company.bs}</td>
                <td>
                  <EditIcon
                    sx={{ color: "black", fontSize: 40 }}
                    onClick={() => {
                      navigate(`/edituser/${e.id}`);
                    }}
                  />

                  <DeleteForeverIcon
                    sx={{ color: "red", fontSize: 40 }}
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
