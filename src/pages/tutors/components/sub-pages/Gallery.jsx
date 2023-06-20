import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box } from "../../../../components/ui/Elements";
import { LazyImage } from "../../../../components/helpers/globalComponents";
import { Gallery1Image } from "../../../../components/layouts/AllImages";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Gallery = () => {
  const { tutor } = useSelector((state) => state.tutor);
  const { data } = tutor;
  return (
    <GalleryContainer>
      <Row>
      {data?.gallery && data?.gallery.map(( item, key ) => (
        <Col md={6} lg={4} key={ key }>
          <GalleryItem>
            <LazyImage
              src={item}
              className="object-cover"
              width="100%"
              height="251px"
            />
          </GalleryItem>
        </Col>
        ))}
      </Row>
    </GalleryContainer>
  );
};

const GalleryItem = styled.div`
  margin-bottom: 18px;
  img {
    border-radius: 20px;
  }
`;

const GalleryContainer = styled.div`
  max-width: 650px;
`;

export default Gallery;
