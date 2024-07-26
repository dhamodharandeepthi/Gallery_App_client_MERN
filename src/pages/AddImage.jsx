import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, postNewImage } from "../redux/reducers/gallerySlice";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("category", category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postNewImage(formdata));
      toast.success("Image uploaded successfully!");
      // navigate("/");
    } catch (err) {
      toast.error("Failed to upload image");
    }
  };

  return (
    <Container className="my-5">
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2 className="text-primary">Add New Image</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>Select Category</option>
                {categories.map((item) => (
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Upload Image
            </Button>
          </Form>
          <Button
            variant="info"
            className="w-100 mt-3"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddImage;
