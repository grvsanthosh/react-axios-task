import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ApiRouter from "../Utils/ApiRouter";
import ApiService from "../Utils/ApiService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddUser() {
  let [name, setName] = useState("");
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [street, setStreet] = useState("");
  let [suite, setSuite] = useState("");
  let [city, setCity] = useState("");
  let [zipcode, setZipcode] = useState("");
  let [lat, setLat] = useState("");
  let [lng, setLng] = useState("");
  let [phone, setPhone] = useState(0);
  let [Website, setWebsite] = useState("");
  let [companyname, setCompanyName] = useState("");
  let [catchphrase, setCatchPhrase] = useState("");
  let [bs, setBs] = useState("");
  let company = {
    name: companyname,
    catchPhrase: catchphrase,
    bs,
  };
  let geo = {
    lat,
    lng,
  };
  let address = {
    street,
    suite,
    city,
    zipcode,
    geo,
  };
  let data = {
    name,
    username,
    email,
    address,
    phone,
    Website,
    company,
  };
  let navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      let response = await ApiService.post(ApiRouter.USER_DATA, data);
      if (response.status === 201) {
        toast.success("Successfully added!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Username</b>
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="user name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Email address</b>
              </Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Label>
              <b>Address</b>
              <br />
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>street</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <Form.Label>suite</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
              />
              <Form.Label>city</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <Form.Label>zipcode</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
              />
              <Form.Label>
                geo location
                <br />
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>lat</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  onChange={(e) => {
                    setLat(e.target.value);
                  }}
                />
                <Form.Label>lng</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  onChange={(e) => {
                    setLng(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Phone</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Website</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>company</b>
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="company name"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                />
                <Form.Label>catch Phrase</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="catch Phrase"
                  onChange={(e) => {
                    setCatchPhrase(e.target.value);
                  }}
                />
                <Form.Label>bs</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="bs"
                  onChange={(e) => {
                    setBs(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddUser;
