import React from "react";

export const ShippingAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };
  return (
    <Container>
      <Form>
        <h2>Shipping Address</h2>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <FormControl
            type="text"
            id="firstName"
            name="firstName"
            value={address.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <FormControl
            type="text"
            id="lastName"
            name="lastName"
            value={address.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <FormControl
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={address.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address1">Address 1</Label>
          <FormControl
            type="text"
            className="form-control"
            id="address1"
            name="address1"
            value={address.address1}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address2">Address 2</Label>
          <FormControl
            type="text"
            className="form-control"
            id="address2"
            name="address2"
            value={address.address2}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <FormControl
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="state">State</Label>
          <FormControl
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="zip">Zip</Label>
          <FormControl
            type="text"
            className="form-control"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <FormControl
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={address.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Continue</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const FormControl = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
