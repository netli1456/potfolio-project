import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styles from '../cssPage/potfolio.module.css';
import { useParams } from 'react-router-dom';
import { ProjectImg } from '../dataFolder/projetData';

const FoodAppShowcase = () => {
  const params = useParams();

  const project = ProjectImg.find((item) => item.id.toString() === params.id);

  console.log(project);

  return (
    <Container fluid className={styles.showcaseContainer}>

      <h2 className="text-center py-3">{project.name} Project</h2>

      <Row>
        <Col>
          <Carousel className={styles.carousel} interval={3000}>
            {project.video ? (
              <Carousel.Item>
                <video className="d-block w-100" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            ) : (
              project?.img.map((items, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={items}
                    alt="Screenshot 1"
                  />
                   
                </Carousel.Item>
                
              ))
            )}
          </Carousel>
        </Col>
      </Row>

      <Row className={` mt-4 p-4 ${styles.pageWrapper}`}>
        <Col className="text-center">{project?.aboutApp}</Col>
      </Row>
    </Container>
  );
};

export default FoodAppShowcase;
