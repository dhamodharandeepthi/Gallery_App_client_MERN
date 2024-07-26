import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory, getAllCategories } from "../redux/reducers/gallerySlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({ name: "" });
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(postNewCategory(input));
            dispatch(getAllCategories());
            toast.success("Category added successfully!");
            // navigate("/add-image");
        } catch (err) {
            setError("Failed to add category");
            toast.error("Failed to add category");
        }
    };

    return (
        <Container className="my-5">
            <ToastContainer />
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center mb-4">
                        <h2 className="text-primary">Add New Category</h2>
                    </div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={(e) =>
                                    setInput({ ...input, [e.target.name]: e.target.value })
                                }
                                placeholder="Enter Category"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Add Category
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

export default AddCategory;
