import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TextAnswer } from "../components/textAnswer";
import { DropdownAnswer } from "../components/dropdownAnswer";
import { GradeAnswer } from "../components/gradeAnswer";
import { GradeAnswer2 } from "../components/gradeAnswer2";
import { CheckAnswer } from "../components/checkAnswer";
import { useParams } from "react-router-dom";

export const Survey = () => {
  const { id } = useParams();
  console.log("Refer ID: ", id);

  const [fieldValid, setFieldValid] = useState({
    qname: "",
    qemail: "",
    qrole: "",
    qaddress: "",
    qposition: "",
    qbankaccount: "",
    qbank: "",
    qbranch: "",
    q1: 0,
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
    qname: false,
    qemail: false,
    qrole: false,
    qaddress: false,
    qposition: false,
    qbankaccount: true,
    qbank: true,
    qbranch: true,
    q1: false,
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

  const totalQuestions = 3;

  const onChangeAndValidate = async (value) => {
    await setFieldValid({ ...fieldValid, [value.id]: value.valid });
    await setFieldValues({ ...fieldValues, [value.id]: value.value });
  };

  const validateFormAndSubmit = () => {
    console.log(fieldValid);
    if (Object.keys(fieldValid).length === totalQuestions) {
      for (let i = 0; i < Object.keys(fieldValid).length; i++) {
        if (fieldValid[Object.keys(fieldValid)[i]] === false) {
          // Contains an invalid field
          setErrorMode(true);
          return;
        }
      }
      // Form is ready for submission, DO SUBMISSION HERE
      alert("Form submit!");
      setErrorMode(false);
    } else {
      setErrorMode(true);
    }
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
            <div style={{ marginTop: "45px" }}></div>
            <h3>Mục tiêu đào tạo</h3>
            <div>
              Chương trình đào tạo chất lượng cao chuyên ngành Kỹ thuật Hàng
              không nhằm mục tiêu đào tạo cử nhân có năng lực chuyên môn, phẩm
              chất chính trị, đạo đức và sức khoẻ thông qua một chương trình đào
              tạo chặt chẽ với các khối kiến thức nền tảng về khoa học, toán
              học, xã hội và con người, đáp ứng yêu cầu của người học và các kỹ
              năng thực hành trong môi trường đặc thù của ngành Hàng không –
              Không gian. Bên cạnh đó, chương trình đào tạo được điều chỉnh phù
              hợp trên cơ sở nghiên cứu áp dụng chương trình khung của Bộ Giáo
              dục- Đào tạo, và các chương trình giảng dạy bậc đại học của các
              nước tiên tiến.{" "}
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../img/ctdt.png")}
                alt="Chương trình đào tạo"
              ></img>
            </div>
            <div style={{ marginTop: "45px" }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Chương trình cử nhân  */}
            <h4>Chương trình cử nhân</h4>
            <GradeAnswer
              id="q1"
              question="Có được công việc trong lĩnh vực Kỹ thuật Hàng không – Không gian ở trong nước và ngoài nước; cũng như trong các lĩnh vực kỹ thuật cao khác có liên quan gần đến lĩnh vực Hàng không – Không gian."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q2"
              question="Có khả năng giải quyết các vấn đề kỹ thuật trong quá trình làm việc bằng sự vận dụng kiến thức, và các kỹ năng được tích lũy trong quá trình đào tạo ở bậc cử nhân chuyên ngành Kỹ thuật Hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q3"
              question="Có khả năng tư duy, kỹ năng cá nhân, nghề nghiệp, giao tiếp, làm việc nhóm, đạo đức nghề nghiệp… đủ để làm việc trong môi trường đa ngành, đa văn hóa..."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q4"
              question="Có hiểu biết về kinh tế, chính trị. Có kiến thức cơ bản trong lĩnh vực khoa học xã hội và nhân văn phù hợp với ngành được đào tạo để đóng góp hữu hiệu vào sự phát triển bền vững của xã hội, cộng đồng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q5"
              question="Có định hướng nghề nghiệp tích cực cho bản thân với sự hoạch định nghề nghiệp tương lai cho sự thăng tiến, sự tự đào tạo, và việc học tập tiếp sau khi tốt nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            {/* Chương trình kỹ sư  */}
            <h4>Chương trình kỹ sư</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3>Chuẩn đầu ra</h3>
            <div style={{ marginTop: "45px" }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Chương trình cử nhân  */}
            <h4>Chương trình cử nhân</h4>
            <GradeAnswer
              id="q6"
              question="Khả năng áp dụng các kiến thức cơ bản về toán, khoa học tự nhiên và kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q7"
              question="Khả năng thiết kế và vận hành các thử nghiệm, cũng như khả năng phân tích và đánh giá dữ liệu."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q8"
              question="Có kiến thức trong lĩnh vực khí động lực học, kết cấu và vật liệu Hàng không, hệ thống lực đẩy, cơ học bay và điều khiển."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q9"
              question="Khả năng tham gia thiết kế một hệ thống, một thành phần, một quá trình để đáp ứng các nhu cầu mong muốn với các ràng buộc thực tế như về kinh tế, môi trường, xã hội, chính trị, đạo đức, sức khoẻ và sự an toàn, có thể sản xuất được, và có tính bền vững."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q10"
              question="Khả năng thực hiện thành công chức năng của một thành viên trong nhóm giải quyết vấn đề có tính liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q11"
              question="Khả năng xác định, mô hìnhhóa và giải quyết các vấn đề kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q12"
              question="Khả năng nhận biết và thực hiện các trách nhiệm đạo đức và nghề nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q13"
              question="Khả năng giao tiếp hiệu quả: Khả năng viết báo cáo; Khả năng trình bày, diễn đạt ý tưởng qua lời nói, hình ảnh. Trình độ tiếng Anh tối thiểu tương đương IELTS 6.0."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <div>
              Có khả năng tham gia vào một trong những lĩnh vực chuyên môn:{" "}
            </div>
            <GradeAnswer
              id="q14"
              question="Thiết kế chi tiết, cụm hệ thống, chức năng cơ khí trong các phương tiện bay"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q15"
              question="Hiểu và tham gia vào các quy trình bảo dưỡng kỹ thuật cho tàu bay"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q16"
              question="Thiết kế các thí nghiệm đo lường, chẩn đoán trong hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q17"
              question="Phát triển các công cụ tính toán số , tối ưu hoá với lưu chất và kết cấu"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <div>Kỹ năng mềm và thái độ</div>
            <GradeAnswer
              id="q20_2"
              question="Tư duy phân tích vấn đề từ tổng quát đến chi tiết."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_3"
              question="Kỹ năng tự phản biện"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_4"
              question="Kỹ năng tìm kiếm thông tin"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_5"
              question="Kỹ năng biểu diễn, tóm tắt được nội dung phức tạp bằng hình ảnh, sơ đồ"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_6"
              question="Kỹ năng sử dụng các phần mềm văn phòng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_7"
              question="Kỹ năng viết báo cáo, trình bày bằng poster, thuyết trình với powerpoint."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_8"
              question="Kỹ năng làm việc nhóm và tinh thần trách nhiệm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_9"
              question="Kỹ năng lãnh đạo, khởi nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_10"
              question="Kỹ năng sử dụng các phần mềm văn phòng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_11"
              question="Ý thức tuân thủ an toàn lao động."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_12"
              question="Tính kỷ luật và cẩn trọng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_13"
              question="Tinh thần học hỏi, tự cập nhật kiến thức và kỹ năng chuyên môn theo yêu cầu công việc."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_14"
              question="Năng lực ngoại ngữ."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>

            <TextAnswer
              id="q20_1"
              question="Ý kiến khác về CĐR Cử nhân"
              maximumLength={1200}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <h3>Chương trình kỹ sư</h3>
            <GradeAnswer
              id="q6b"
              question="Khả năng hiểu và vận dụng linh hoạt các kiến thức cơ bản về toán, khoa học tự nhiên và kỹ thuật với ngành KTHK và những ngành gần"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q7b"
              question="Khả năng thiết kế và vận hành các thử nghiệm, cũng như khả năng phân tích và đánh giá dữ liệu, rút ra nhận xét và đề xuất cải thiện"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q8b"
              question="Có kiến thức chuyên sâutrong lĩnh vực khí động lực học, kết cấu và vật liệu Hàng không, hệ thống lực đẩy, cơ học bay và điều khiển."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q9b"
              question="Khả năng tham gia thiết kế một hệ thống, một thành phần, một quá trình để đáp ứng các nhu cầu mong muốn với các ràng buộc thực tế như về kinh tế, môi trường, xã hội, chính trị, đạo đức, sức khoẻ và sự an toàn, có thể sản xuất được, và có tính bền vững."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q10b"
              question="Khả năng thực hiện thành công chức năng của một thành viên trong nhóm giải quyết vấn đề  có tính liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q11b"
              question="Khả năng xác định, mô hình hóa và giải quyết các vấn đề kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q12b"
              question="Khả năng nhận biết và thực hiện các trách nhiệm đạo đức và nghề nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q13b"
              question="Khả năng giao tiếp hiệu quả: Khả năng viết báo cáo; Khả năng trình bày, diễn đạt ý tưởng qua lời nói, hình ảnh. Trình độ tiếng Anh tối thiểu tương đương IELTS 6.0. Trình độ tiếng Pháp tương đương DELF B1."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <div>
              Có khả năng tham gia vào một hoặc nhiều trong những lĩnh vực
              chuyên môn:
            </div>
            <GradeAnswer
              id="q14b"
              question="Thiết kế chi tiết, cụm hệ thống, chức năng cơ khí trong các phương tiện bay."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q15b"
              question="Thiết kế các phương tiện bay nói chung và các phương tiện di chuyển trong lưu chất nói riêng"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q16b"
              question="Hiểu và tham gia vào các quy trình bảo dưỡng kỹ thuật cho tàu bay"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q17b"
              question="Thiết kế hệ thống điều khiển bay, ứng dụng công nghệ tin học – điện tử"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q18b"
              question="Thiết kế các thí nghiệm đo lường, chẩn đoán trong hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q19b"
              question="Phát triển các công cụ tính toán số , tối ưu hoá với lưu chất và kết cấu."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20b"
              question="Tham gia giải quyết các vấn đề kỹ thuật trong bối cảnh doanh nghiệp, rèn luyện tư duy vấn đề toàn diện từ vật liệu, chế tạo, thiết kế đến thương mại hoá…"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <div>Kỹ năng mềm và thái độ</div>
            <GradeAnswer
              id="q20_2b"
              question="Tư duy phân tích vấn đề từ tổng quát đến chi tiết."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_3b"
              question="Kỹ năng tự phản biện"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_4b"
              question="Kỹ năng tìm kiếm thông tin"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_5b"
              question="Kỹ năng biểu diễn, tóm tắt được nội dung phức tạp bằng hình ảnh, sơ đồ"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_6b"
              question="Kỹ năng sử dụng các phần mềm văn phòng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_7b"
              question="Kỹ năng viết báo cáo, trình bày bằng poster, thuyết trình với powerpoint."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_8b"
              question="Kỹ năng làm việc nhóm và tinh thần trách nhiệm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_9b"
              question="Kỹ năng lãnh đạo, khởi nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_10b"
              question="Kỹ năng sử dụng các phần mềm văn phòng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_11b"
              question="Ý thức tuân thủ an toàn lao động."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_12b"
              question="Tính kỷ luật và cẩn trọng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_13b"
              question="Tinh thần học hỏi, tự cập nhật kiến thức và kỹ năng chuyên môn theo yêu cầu công việc."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20_14b"
              question="Năng lực ngoại ngữ."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q20_1b"
              question="Ý kiến khác về CĐR Kỹ sư"
              maximumLength={1200}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3>Cấu trúc chuyên môn của CTĐT</h3>
            <div style={{ marginTop: "45px" }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Chương trình cử nhân  */}
            <h4>Chương trình cử nhân</h4>
          </Col>
          <Col>
            <h4>Chương trình kỹ sư</h4>
          </Col>
        </Row>
        <Row>
          <Col>Khối kiến thức khoa học cơ bản</Col>
        </Row>
        <Row>
          <Col>
            {/*Chương trình cử nhân*/}
            <GradeAnswer
              id="q21"
              question="Khối kiến thức khoa học cơ bản (toán, vật lý, hóa đại cương, xác suất và thống kê, phương pháp tính) có vai trò quan trọng đối với chương trình đào tạo các ngành kỹ thuật"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            {/* Chương trình kỹ sư */}
            <GradeAnswer
              id="q21b"
              question="Khối kiến thức khoa học cơ bản (toán, vật lý, hóa đại cương, xác suất và thống kê, phương pháp tính) có vai trò quan trọng đối với chương trình đào tạo các ngành kỹ thuật"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>Khối kiến thức giáo dục chung</Col>
        </Row>
        <Row>
          <Col>
            {/*Chương trình cử nhân*/}
            <GradeAnswer
              id="q22"
              question="Khối kiến thức chính trị - xã hội – luật có vai trò quan trọng đối với sự hình thành đạo đức, ý thức và trách nhiệm của một công dân."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23"
              question="Khối kiến thức ngoại ngữ (tiếng Anh)"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q24"
              question="Các môn học sau đây là những môn học cơ sở và tối thiểu đối với khối kiến thức cơ sở ngành: (1) Vẽ kỹ thuật giao thông; (2) Cơ học thủy khí;(3) Nhiệt động lực học và truyền nhiệt; (4) Kỹ thuật điện - điện tử; (5) Nhập môn lập trình; (6) Kỹ thuật chế tạo; (7) Cơ kết cấu giao thông."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            {/* Chương trình kỹ sư */}
            <GradeAnswer
              id="q22b"
              question="Khối kiến thức chính trị - xã hội – luật có vai trò quan trọng đối với sự hình thành đạo đức, ý thức và trách nhiệm của một công dân."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23b"
              question="Khối kiến thức ngoại ngữ (tiếng Anh, tiếng Pháp)"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q24b"
              question="Các môn học sau đây là những môn học cơ sở và tối thiểu đối với khối kiến thức cơ sở: (1) Điện – điện động học; (2) Vẽ kỹ thuật;(3) Cơ học đại cương và mội trường liên tục; (4) Cơ học thủy khí; (5) Nhiệt động lực học và truyền nhiệt; (6) Khí động lực học 1; (7) Cơ học bay; (8) Hệ thống lực đẩy máy bay 1."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>Khối kiến thức chuyên ngành</Col>
        </Row>
        <Row>
          <Col>
            {/* Cử nhân */}
            <GradeAnswer
              id="q25"
              question="Các môn học sau đây có thể là những môn học tự chọn trong chuyên ngành kỹ thuật hàng không, SV được tự do lựa chọn hướng chuyên môn yêu thích và phù hợp: (1) Cơ học vật liệu Hàng không; (2) Cơ học bay; (3) Khí động lực học 1; (4) Hệ thống lực đẩy máy bay 1; (5) Kết cấu hàng không 2 – Phân tích kết cấu máy bay; (6) Ổn định và điều khiển bay; (7) Khí động lực học 2; (8) Thiết kế máy bay; (9) Hệ thống lực đẩy máy bay 2."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            {/* Kỹ sư */}
            <GradeAnswer
              id="q25b"
              question="Các môn học sau đây là những môn học trong chuyên ngành kỹ thuật hàng không: (1) Kết cấu hàng không 2 – phân tích kết cấu máy bay; (2) Khí động lực học 2; (3) Thiết kế máy bay; (4) Ổn định và điều khiển bay; (5) Hệ thống lực đẩy máy bay 2."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q26b"
              question="Các môn học sau đây có thể là những môn học tự chọn trong chuyên ngành kỹ thuật hàng không, SV được tự do lựa chọn hướng chuyên môn yêu thích và phù hợp, các môn này được giảng dạy theo đồ án (PBL –Project Based Learning) có sự tham gia của doanh nghiệp, sinh viên tìm hiểu và thực hiện đồ án giải quyết vấn đề quan tâm của doanh nghiệp: (1) Phương pháp số - động lực học lưu chất; (2) Phương pháp phần tử hữu hạn;(3) Khí đàn hồi; (4) Khí động lực học hỏa tiễn; (5) Hệ thống lực đẩy hỏa tiễn; (6) Động cơ gió; (7) Máy bay trực thăng;(8) Kết cấu hàng không 3: cơ học rạn nứt và mỏi; (9) Cơ học va chạm;(10) Cảm biến và tín hiệu; (11) Các hệ thời gian thực;(12) Phân tích thiết kế hệ điều khiển ;(13) Nhận dạng hệ thống máy bay; (14) Điện - điện tử hàng không; (15) Thiết kế tối ưu."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>Các môn thí nghiệm, thực tập, khác</Col>
        </Row>
        <Row>
          <Col>
            {/* Cử nhân */}
            <GradeAnswer
              id="q27"
              question="CTĐT cần có ít nhất 9% thời lượng học tập cơ sở ngành, chuyên ngành cho thí nghiệm và thực hành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q28"
              question="CTĐT cần có các môn học về quản lý dự án, khởi nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q29"
              question="Ý kiến khác về CTĐT Cử nhân"
              maximumLength={1200}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            {/* Kỹ sư */}
            <GradeAnswer
              id="q27b"
              question="CTĐT cần có ít nhất 26% thời lượng học tập cơ sở ngành, chuyên ngành cho thí nghiệm và thực hành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q28b"
              question="CTĐT cần có các môn học về quản lý dự án, khởi nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q29b"
              question="Ý kiến khác về CTĐT Kỹ sư"
              maximumLength={1200}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3>Phương thức giảng dạy</h3>
            <div style={{ marginTop: "45px" }}></div>
            <div>
              Phương thức giảng dạy cổ điển: • Nội dung chương trình đào tạo
              (môn học) cố định theo chuyên ngành; • Giáo viên thuyết giảng trực
              tiếp; • SV được đánh giá trong suốt quá trình học tập của môn học
              bằng các hình thức bài tập tại lớp, bài tập về nhà, bài tập lớn,
              kiểm tra giữa kì và thi cuối kì.
            </div>
            <div>
              Phương thức giảng dạy theo hình thức thực hiện dự án: • Sau khi
              kết thúc giai đoạn đại cương (02 năm đầu) thì SV học tập thông qua
              việc thực hiện các đề tài chuyên ngành; • SV chỉ chọn học các môn
              cơ sở ngành và chuyên ngành kỹ thuật cần thiết và phù hợp với nội
              dung đề tài thực hiện; • SV chỉ tích lũy kiến thức và rèn luyện
              những kỹ năng chuyên môn cần thiết và phù hợp với nội dung đề tài
              thực hiện, thay vì học đầy đủ các nội dung từ cơ bản đến nâng cao.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Chương trình cử nhân</h4>
            <GradeAnswer
              id="q30"
              question="Tầm quan trọng của phương thức giảng dạy cổ điển"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q31"
              question="Tầm quan trọng của phương thức giảng dạy thực hiện dự án"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <h4>Chương trình kỹ sư</h4>
            <GradeAnswer
              id="q30b"
              question="Tầm quan trọng của phương thức giảng dạy cổ điển"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q31b"
              question="Tầm quan trọng của phương thức giảng dạy thực hiện dự án"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3>Giúp đỡ đơn vị đào tạo</h3>
            <div style={{ marginTop: "45px" }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer2
              id="q32"
              question="Quí Ông/Bà có sẵn sàng trợ giúp Đơn vị Đào tạo thực hiện đào tạo theo phương thức PBL?"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer2>
            <div style={{display: fieldValues['q32']===1 ? 'none' : 'block'}}>
            <div>Các hình thức quý ông bà có thể hỗ trợ:</div>
            <CheckAnswer
              id="q33"
              question="Tham gia giảng dạy toàn bộ môn học hay theo chuyên đề."
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q34"
              question="Tư vấn kỹ thuật – công nghệ"
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q35"
              question="Cập nhật tài liệu, thông tin kỹ thuật – công nghệ chuyên ngành"
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q36"
              question="Tham gia tổ chức các buổi seminar giới thiệu về nghề nghiệp, thông tin kỹ thuật – công nghệ chuyên ngành."
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q37"
              question="Tài trợ sử dụng các thiết bị hoặc phần mềm chuyên dùng."
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q38"
              question="Đặt hàng đề tài thực hiện."
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="q39"
              question="Tài trợ kinh phí thực hiện đề tài."
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <TextAnswer
              id="q40"
              question="Ý kiến khác về khả năng trợ giúp của quý Ông/Bà"
              maximumLength={1200}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            </div>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
