import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Thanks = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Xin cảm ơn</h1>
            <div>
              Xin trân trọng cảm ơn quý Ông/Bà đã dành thời gian quý báu của
              mình để tham gia khảo sát. Bộ môn Kỹ thuật Hàng Không sẽ sử dụng
              thông tin từ khảo sát này để nâng cao chất lượng đào tạo, đáp ứng
              nhu cầu của doanh nghiệp, phát triển kinh tế-xã hội và hội nhập
              của đất nước.
            </div>
            <div>Kính chúc quý Ông/Bà nhiều sức khỏe, thành đạt.</div>
            <div>Trân trọng, </div>
            <div>
              <span style={{ fontWeight: "bold" }}>
                Bộ môn Kỹ thuật Hàng Không - ĐH Bách Khoa Tp. Hồ Chí Minh
              </span>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
