import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, getAllImages, getSingleImage } from "../redux/reducers/gallerySlice";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllImages());
        dispatch(getAllCategories());
    }, [dispatch]);

    const { images, categories } = useSelector((state) => state.gallery);

    const handleCategories = (id) => {
        dispatch(getSingleImage(id));
    };

    return (
        <Container className="my-5">
            <div className="text-center mb-4">
                <h2 className="text-primary">Gallery</h2>
            </div>
            <div className="text-center mb-4">
                <Button
                    onClick={() => dispatch(getAllImages())}
                    variant="primary"
                    className="mx-2"
                >
                    All
                </Button>
                {categories.map((item) => (
                    <Button
                        key={item._id}
                        onClick={() => handleCategories(item._id)}
                        variant="secondary"
                        className="mx-2"
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
            <Row>
                {images.map((item) => (
                    <Col lg={4} md={6} sm={12} className="mb-4" key={item._id}>
                        <img
                            src={`https://gallery-app-backend-mern.onrender.com/uploads/${item.name}`}
                            alt={item.name}
                            className="img-fluid"
                            style={{ height: "300px", width: "100%", objectFit: "cover" }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
