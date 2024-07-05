import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import ApiRouter from "../Utils/ApiRouter";
import ApiService from "../Utils/ApiService";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function EditUser() {
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
  let { id } = useParams();
  let navigate = useNavigate();

  let getData = async (id) => {
    try {
      let response = await ApiService.get(`${ApiRouter.USER_DATA}/${id}`);
      if (response.status === 200) {
        setName(response.data.name);
        setUserName(response.data.username);
        setEmail(response.data.email);
        setStreet(response.data.address.street);
        setSuite(response.data.address.suite);
        setCity(response.data.address.city);
        setZipcode(response.data.address.zipcode);
        setLat(response.data.address.geo.lat);
        setLng(response.data.address.geo.lng);
        setPhone(response.data.phone);
        setWebsite(response.data.website);
        setCompanyName(response.data.company.name);
        setCatchPhrase(response.data.company.catchPhrase);
        setBs(response.data.company.bs);
        toast.success(`Viewing id: ${id}!`);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);
  const handleSubmit = async () => {
    try {
      let response = await ApiService.put(`${ApiRouter.USER_DATA}/${id}`, data);
      if (response.status === 200) {
        toast.success("Successfully submitted");

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
                value={name}
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
                value={username}
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
                value={email}
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
                value={street}
              />
              <Form.Label>suite</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
                value={suite}
              />
              <Form.Label>city</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
              />
              <Form.Label>zipcode</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                value={zipcode}
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
                  value={lat}
                />
                <Form.Label>lng</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  onChange={(e) => {
                    setLng(e.target.value);
                  }}
                  value={lng}
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
                value={phone}
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
                value={Website}
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
                  value={companyname}
                />
                <Form.Label>catch Phrase</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="catch Phrase"
                  onChange={(e) => {
                    setCatchPhrase(e.target.value);
                  }}
                  value={catchphrase}
                />
                <Form.Label>bs</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="bs"
                  onChange={(e) => {
                    setBs(e.target.value);
                  }}
                  value={bs}
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

export default EditUser;
