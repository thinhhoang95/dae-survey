import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { TextAnswer } from "../components/textAnswer";
import { DropdownAnswer } from "../components/dropdownAnswer";
import { GradeAnswer } from "../components/gradeAnswer";
import { GradeAnswer2 } from "../components/gradeAnswer2";
import { CheckAnswer } from "../components/checkAnswer";
import { useParams } from "react-router-dom";

export const Survey = ({ history }) => {
  const { id } = useParams();
  console.log("Refer ID: ", id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fieldValid, setFieldValid] = useState({
    qname: false,
    qemail: false,
    qrole: false,
    qaddress: false,
    qposition: false,
    qbankaccount: true,
    qbank: true,
    qbranch: true,
    qarea1: true,
    qarea2: true,
    qarea3: true,
    qarea4: true,
    qarea5: true,
    qarea6: true,
    qarea7: true,
    qarea8: true,
    qarea9: true,
    qarea10: true,
    qarea11: true,
  });
  const [fieldValues, setFieldValues] = useState({
    qname: "",
    qemail: "",
    qrole: "",
    qaddress: "",
    qposition: "",
    qbankaccount: "",
    qbank: "",
    qbranch: "",
    qarea1: false,
    qarea2: false,
    qarea3: false,
    qarea4: false,
    qarea5: false,
    qarea6: false,
    qarea7: false,
    qarea8: false,
    qarea9: false,
    qarea10: false,
    qarea11: false,
  });
  const [errorMode, setErrorMode] = useState(false);

  const onChangeAndValidate = async (value) => {
    await setFieldValid({ ...fieldValid, [value.id]: value.valid });
    await setFieldValues({ ...fieldValues, [value.id]: value.value });
  };

  const validateFormAndSubmit = async () => {
    console.log("Field valid: ", fieldValid);
    for (let i = 0; i < Object.keys(fieldValid).length; i++) {
      if (fieldValid[Object.keys(fieldValid)[i]] === false) {
        // Contains an invalid field
        setErrorMode(true);
        return;
      }
    }
    // Form is ready for submission, DO SUBMISSION HERE

    handleShow();
    setErrorMode(false);
  };

  const qnameRef = useRef();
  const qemailRef = useRef();
  const qroleRef = useRef();
  const qaddressRef = useRef();
  const qpositionRef = useRef();

  const loadDataFromServer = async () => {
    let resp = await fetch("http://localhost:1995/contact/" + id, {
      method: "GET",
      mode: "cors",
    });
    // console.log(resp)
    if (resp.status === 200) {
      let data = await resp.json();
      // console.log(data)
      qnameRef.current.setInitValue(data.name);
      await setFieldValid({ ...fieldValid, qname: true });
      await { ...fieldValues, qname: data.name };
      qemailRef.current.setInitValue(data.email);
      await setFieldValid({ ...fieldValid, qemail: true });
      await setFieldValues({ ...fieldValues, qemail: data.email });
      qroleRef.current.setInitValue(data.role);
      await setFieldValid({ ...fieldValid, qrole: true });
      await setFieldValues({ ...fieldValues, qrole: data.role });
      qaddressRef.current.setInitValue(data.address);
      await setFieldValid({ ...fieldValid, qaddress: true });
      await setFieldValues({ ...fieldValues, qaddress: data.address });
      qpositionRef.current.setInitValue(data.position);
      await setFieldValid({ ...fieldValid, qposition: true });
      await setFieldValues({ ...fieldValues, qposition: data.position });
    } else {
      alert(
        "The referral code you entered is invalid. Please contact the survey creator at kthk@hcmut.edu.vn for more information."
      );
    }
  };

  useEffect(() => {
    if (id) loadDataFromServer();
  }, []);

  const submitForm = async () => {
    const data = new URLSearchParams();
    console.log(fieldValues);
    Object.keys(fieldValues).forEach((item) => {
      data.append(item, fieldValues[item]);
    });
    const rawResponse = await fetch("http://localhost:1995/survey/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    });
    if (rawResponse.status === 200) {
      alert(
        "Dữ liệu đã được gửi đi thành công. Xin chân thành cảm ơn thời gian quý báu của quý anh chị đã dành cho khảo sát."
      );
      history.push("/thanks");
      setShow(false);
    } else {
      alert(
        "Đã có lỗi xảy ra trong quá trình gửi dữ liệu đi. Chúng tôi thành thật xin lỗi vì sự bất tiện này."
      );
      console.log(await rawResponse.text());
      setShow(false);
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h1>Khảo sát chương trình đào tạo ngành Kỹ thuật Hàng Không</h1>
            <h5>Bộ môn Kỹ thuật Hàng Không - ĐH Bách Khoa Tp. Hồ Chí Minh</h5>
            <div>
              Nền tảng ReactSurvey 1.0 phát triển bởi Bộ môn KTHK - ĐHBK TP.HCM.
            </div>
            <div>
              {id ? (
                <span>
                  Vì bạn đang sử dụng một liên kết thư mời, một số thông tin của
                  bạn đã được điền sẵn.
                </span>
              ) : (
                <></>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3>Thông tin cá nhân</h3>
            <TextAnswer
              ref={qnameRef}
              id="qname"
              question="Họ và tên"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              ref={qemailRef}
              id="qemail"
              question="Email"
              description="Nếu bạn đang trả lời với tư cách đại diện doanh nghiệp, vui lòng sử dụng email công ty"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <DropdownAnswer
              ref={qroleRef}
              id="qrole"
              description="Nếu bạn là cựu sinh viên đang trả lời đại diện cho doanh nghiệp, vui lòng chọn doanh nghiệp."
              choices={["Cựu sinh viên", "Doanh nghiệp"]}
              question="Mô tả bản thân"
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></DropdownAnswer>
            <TextAnswer
              ref={qaddressRef}
              id="qaddress"
              question="Địa chỉ"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              ref={qpositionRef}
              id="qposition"
              question="Vị trí"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              id="qbankaccount"
              question="Số tài khoản ngân hàng"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              id="qbank"
              question="Tên ngân hàng"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              id="qbankbranch"
              question="Tên chi nhánh ngân hàng"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <div>Chọn lĩnh vực hoạt động của bạn</div>
            <CheckAnswer
              id="qarea1"
              question="Bảo trì/bảo dưỡng hàng không"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea2"
              question="Thiết kế cơ khí"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea3"
              question="Quạt, turbine"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea4"
              question="Thiết kế máy bay"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea5"
              question="Tin học / Điều khiển"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea6"
              question="Mô phỏng số"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea7"
              question="Xây dựng"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea8"
              question="Quản lý sản xuất"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea9"
              question="Kinh doanh"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea10"
              question="Nghiên cứu (Thạc sĩ, Tiến sĩ, Sau Tiến sĩ) trong nước"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea11"
              question="Nghiên cứu (Thạc sĩ, Tiến sĩ, Sau Tiến sĩ) nước ngoài"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <TextAnswer id="q1" question="Test question" description="Halo" maximumLength={15} onChangeAndValidate={(val) => onChangeAndValidate(val)} showError={errorMode}></TextAnswer>
            <TextAnswer id="q2" question="Test question 2" maximumLength={15} minimumLength={1} required={true} onChangeAndValidate={(val) => onChangeAndValidate(val)} showError={errorMode}></TextAnswer>
            <DropdownAnswer id="q3" question="Test question 3" required={true} choices={['Hoa mai', 'Hoa đào', 'Hoa huệ']} onChangeAndValidate={(val) => onChangeAndValidate(val)} showError={errorMode}></DropdownAnswer>
            <GradeAnswer id="q4" question="Test question 4" required={true} showError={errorMode} onChangeAndValidate={(val) => onChangeAndValidate(val)}></GradeAnswer>
            <CheckAnswer id="q5" question="Test question 5" showError={errorMode} onChangeAndValidate={(val) => onChangeAndValidate(val)}></CheckAnswer> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => validateFormAndSubmit()}>
              Gửi phiếu khảo sát
            </Button>
            <Modal show={show} onHide={() => handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Xác nhận gửi phiếu</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Bạn có chắc chắn muốn gửi phiếu khảo sát của mình?{" "}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                  Không đồng ý
                </Button>
                <Button variant="primary" onClick={() => submitForm()}>
                  Đồng ý
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
