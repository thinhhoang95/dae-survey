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
    qaddress: false,
    qposition: false,
    qbankaccount: true,
    qrole: false,
    qworkplace: true,
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
    qarea12: true,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
    q11: false,
    q12: false,
    q13: false,
    q14: false,
    q15: false,
    q16: true,
    q17: true,
    q18: false,
    q19: false,
    q20: false,
    q21: false,
    q21a: false,
    q21b: false,
    q22: false,
    q23a: false,
    q23b: false,
    q23c: false,
    q23d: false,
    q23e: false,
    q24a: false,
    q24b: false,
    q24c: false,
    q24d: false,
    q25a: false,
    q25b: false,
    q25c: false,
    q25d: false,
    q26a: false,
    q26b: false,
    q27a: false,
    q27b: false,
    q28: false,
    q29: false,
    q30a: false,
    q30b: false,
    q30c: false,
    q30d: false,
    q30e: false,
    q30f: false,
    q31a: false,
    q31b: false,
    q31c: false,
    q32: false,
    q33a: false,
    q33b: true,
    q34a: false,
    q34b: false,
    q34c: true,
    q35: false,
    q36: false,
    q37: false,
    q38: false,
    q39: false,
    q39b: true,
    q40: false,
    q40b: true,
    q41: false,
    q43: false,
    q45: false,
    q45b: true,
    q42: false,
    q44: false,
    q46: false,
    q47: false,
    q47b: true,
    q48: false,
    q48b: true,
    q49: false,
    q49b: true,
    q50: false,
    q50b: true,
    q51: false,
    q51b: true,
    q52: false,
    q52b: true,
    q53: false,
    q53b: true,
    q54: false,
    q54b: true,
    q55: false,
    q55b: true,
    q56: false,
    q57: false,
    q58: false,
    q59: false,
    q59b: true,
    q60: false,
    q60b: true,
    q60c: true,
    q60d: true,
    qq1: false,
    qq2: false,
    qq3: true,
    qq1b: false,
    qq2b: false,
    qq3b: true,
    qq4: true,
    qq5: true,
    qq6: true,
    qq7: true,
    qq8: true,
    qq9: true,
    qq10: true,
    qq11: true,
    qq12: true,
  });
  const [fieldValues, setFieldValues] = useState({
    qname: "",
    qemail: "",
    qworkplace: "",
    qaddress: "",
    qposition: "",
    qbankaccount: "",
    qbank: "",
    qrole: "",
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
    qarea12: "",
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
    q11: 0,
    q12: 0,
    q13: 0,
    q14: 0,
    q15: 0,
    q16: "",
    q17: "",
    q18: 0,
    q19: 0,
    q20: 0,
    q21: 0,
    q21a: 0,
    q21b: 0,
    q22: 0,
    q23a: 0,
    q23b: 0,
    q23c: 0,
    q23d: 0,
    q23e: 0,
    q24a: 0,
    q24b: 0,
    q24c: 0,
    q24d: 0,
    q25a: 0,
    q25b: 0,
    q25c: 0,
    q25d: 0,
    q26a: 0,
    q26b: 0,
    q27a: 0,
    q27b: 0,
    q28: 0,
    q29: 0,
    q30a: 0,
    q30b: 0,
    q30c: 0,
    q30d: 0,
    q30e: 0,
    q30f: 0,
    q31a: 0,
    q31b: 0,
    q31c: 0,
    q32: 0,
    q33a: 0,
    q33b: "",
    q34a: 0,
    q34b: 0,
    q34c: "",
    q35: 0,
    q36: 0,
    q37: 0,
    q38: 0,
    q39: 0,
    q39b: "",
    q40: 0,
    q40b: "",
    q41: 0,
    q43: 0,
    q45: 0,
    q45b: "",
    q42: 0,
    q44: 0,
    q46: 0,
    q47: 0,
    q47b: "",
    q48: 0,
    q48b: "",
    q49: 0,
    q49b: "",
    q50: 0,
    q50b: "",
    q51: 0,
    q51b: "",
    q52: 0,
    q52b: "",
    q53: 0,
    q53b: "",
    q54: 0,
    q54b: "",
    q55: 0,
    q55b: "",
    q56: 0,
    q57: 0,
    q58: 0,
    q59: 0,
    q59b: "",
    q60: 0,
    q60b: "",
    q60c: "",
    q60d: "",
    qq1: 0,
    qq2: 0,
    qq3: "",
    qq1b: 0,
    qq2b: 0,
    qq3b: "",
    qq4: 0,
    qq5: false,
    qq6: false,
    qq7: false,
    qq8: false,
    qq9: false,
    qq10: false,
    qq11: false,
    qq12: false,
  });
  const [errorMode, setErrorMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeAndValidate = async (value) => {
    await setFieldValid({ ...fieldValid, [value.id]: value.valid });
    await setFieldValues({ ...fieldValues, [value.id]: value.value });
  };

  const validateFormAndSubmit = async () => {
    /* console.log("Field valid: ", fieldValid);
    for (let i = 0; i < Object.keys(fieldValid).length; i++) {
      if (fieldValid[Object.keys(fieldValid)[i]] === false) {
        // Contains an invalid field
        setErrorMode(true);
        return;
      }
    } */
    // Form is ready for submission, DO SUBMISSION HERE

    handleShow();
    setErrorMode(false);
  };

  const qnameRef = useRef();
  const qemailRef = useRef();
  const qworkplaceRef = useRef();
  const qaddressRef = useRef();
  const qpositionRef = useRef();
  const qroleRef = useRef();

  const loadDataFromServer = async () => {
    let resp = await fetch("http://dae.dte.hcmut.edu.vn:1995/contact/" + id, {
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
      qworkplaceRef.current.setInitValue(data.workplace);
      await setFieldValid({ ...fieldValid, qworkplace: true });
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
    document.title = "Phiếu khảo sát chương trình đào tạo KTHK";
    if (id) loadDataFromServer();
  }, []);

  const submitForm = async () => {
    const data = new URLSearchParams();
    console.log(fieldValues);
    Object.keys(fieldValues).forEach((item) => {
      data.append(item, fieldValues[item]);
    });
    setLoading(true);
    try {
      const rawResponse = await fetch(
        "http://dae.dte.hcmut.edu.vn:1995/survey/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        }
      );
      if (rawResponse.status === 200) {
        alert(
          "Dữ liệu đã được gửi đi thành công. Xin chân thành cảm ơn thời gian quý báu của quý anh chị đã dành cho khảo sát."
        );
        setLoading(false);
        history.push("/thanks");
        setShow(false);
      } else {
        setLoading(false);
        alert(
          "Đã có lỗi xảy ra trong quá trình gửi dữ liệu đi. Chúng tôi thành thật xin lỗi vì sự bất tiện này."
        );
        console.log(await rawResponse.text());
        setShow(false);
      }
    } catch (error) {
      setLoading(false);
        alert(
          "Đã có lỗi xảy ra trong quá trình gửi dữ liệu đi. Chúng tôi thành thật xin lỗi vì sự bất tiện này."
        );
        console.log('Error in transmission: ', error);
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
                <span style={{ color: "blue" }}>
                  Vì bạn đang sử dụng một liên kết thư mời, một số thông tin của
                  bạn đã được điền sẵn.
                </span>
              ) : (
                <></>
              )}
            </div>
            <div>
              Kính gởi quý vị đại diện doanh nghiệp, giảng viên, cựu sinh viên
              và sinh viên.
            </div>
            <div style={{ marginTop: "30px" }}>
              Để đáp ứng yêu cầu hội nhập quốc tế và nhu cầu nhân lực đa dạng
              của xã hội trong các lĩnh vực nghề nghiệp liên quan, Chương Trình
              Đào Tạo (CTĐT) ngành Kỹ Thuật Hàng không thuộc Trường Đại Học Bách
              Khoa – Đại Học Quốc Gia Tp.Hồ Chí Minh được rà soát và điều chỉnh
              định kì. Đặc biệt, chương trình đào tạo đã được điều chỉnh căn cứ
              vào Khung trình độ quốc gia Việt Nam (Quyết định số 1982/QĐ-TTg
              năm 2016) và Quy định chi tiết và hướng dân thi hành một số điều
              của Luật sửa đổi của Luật giáo dục đại học (Nghị định số
              99/2019/NĐ-CP ngày 30/12/2019 của Thủ tướng chính phủ).
            </div>
            <div>
              Ý kiến đóng góp của các bên liên quan bao gồm doanh nghiệp, giảng
              viên, cựu sinh viên, sinh viên đang học tại trường và giảng viên
              là thực tiễn khách quan và là cơ sở vững chắc để đơn vị đào tạo có
              những thay đổi phù hợp về mục tiêu đào tạo, chương trình đào tạo,
              và phương pháp giảng dạy. Bộ môn Kỹ thuật Hàng không trân trọng
              mọi ý kiến đóng góp của Quí Ông/Bà để điều chỉnh và hoàn thiện
              chương trình đào tạo ngành Kỹ Thuật Hàng không bậc cử nhân và bậc
              kỹ sư.
            </div>
            <div>
              Quí Ông/Bà vui lòng nhận xét (với các mức độ 1-Không có ý kiến;
              2-Không cần thiết (hay Rất không đồng ý); 3-Không cần thiết (hay
              Không đồng ý); 4-Cần thiết (hay Đồng ý); 5- Rất cần thiết (hay Rất
              đồng ý)) và góp ý cho các nội dung dưới đây:
              <ul>
                <li> 1. Mục tiêu đào tạo </li>
                <li> 2. Năng lực mong đợi của SV khi tốt nghiệp </li>
                <li> 3. Cấu trúc chương trình đào tạo </li>
                <li> 4. Phương thức giảng dạy </li>
              </ul>
            </div>
            <div style={{ marginTop: "30px" }}>
              Bộ môn Kỹ thuật Hàng không trân trọng cảm ơn sự tin tưởng, sự đồng
              hành và giúp đỡ quí giá từ Quí Ông/Bà. <br />
              Thông tin liên lạc <br />
              Bộ môn Kỹ thuật Hàng không – Khoa KT Giao thông – Trường Đại học
              Bách khoa – ĐHQG Tp.HCM (Phòng 104 nhà C5) <br />
              268 Lý Thường Kiệt, Phường 14, Quận 10 <br />
              Email: kthk@hcmut.edu.vn <br />
              Website: dae.dte.hcmut.edu.vn <br />
              Facebook page: Aero.Eng.HCMUT <br />
              Youtube: Hàng không Bách khoa <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3 style={{ color: "blue" }}>Thông tin cá nhân</h3>
            <TextAnswer
              ref={qnameRef}
              id="qname"
              question="1. Họ và tên"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              ref={qemailRef}
              id="qemail"
              question="2. Email"
              description="Nếu ông bà đang trả lời với tư cách đại diện doanh nghiệp, vui lòng sử dụng email công ty"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <DropdownAnswer
              id="qrole"
              ref={qroleRef}
              question="Vai trò tham gia khảo sát"
              required={true}
              choices={["Doanh nghiệp", "Giảng viên", "Cựu sinh viên"]}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></DropdownAnswer>
            <TextAnswer
              ref={qworkplaceRef}
              id="qworkplace"
              question="3. Đơn vị công tác hiện tại"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              ref={qaddressRef}
              id="qaddress"
              question="4. Địa chỉ"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <TextAnswer
              ref={qpositionRef}
              id="qposition"
              question="5. Vị trí công tác"
              maximumLength={128}
              minimumLength={1}
              required={true}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            {/* Vai trò: DN, GV, CSV, SV */}
            <div style={{ fontWeight: "bold" }}>
              6. Hoạt động nghề nghiệp liên quan đến lĩnh vực Kỹ thuật Hàng
              không và các lĩnh vực liên quan:
            </div>
            <CheckAnswer
              id="qarea1"
              question="Nghiên cứu và phát triển các thiết bị bay"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea2"
              question="Giáo dục và đào tạo"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea3"
              question="Bảo dưỡng hàng không"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea4"
              question="Đảm bảo chất lượng và An toàn bay"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea5"
              question="Khai thác hàng không"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea6"
              question="Sản xuất linh kiện/thiết bị hàng không"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea7"
              question="Mô phỏng số lưu chất/cấu trúc"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea8"
              question="Thiết kế cơ khí"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea9"
              question="Máy thủy khí (động cơ, bơm, quạt, máy nén, hệ thống đường ống, …)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea10"
              question="Tin học và hệ thống điều khiển"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <CheckAnswer
              id="qarea11"
              question="Kinh doanh, thương mại"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></CheckAnswer>
            <TextAnswer
              id="qarea12"
              question="Hoạt động nghề nghiệp khác"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3
              style={{ marginTop: "30px", marginBottom: "30px", color: "blue" }}
            >
              A. Mục tiêu đào tạo
            </h3>
            <div>
              Chương trình đào tạo ngành Kỹ thuật Hàng không nhằm mục tiêu đào
              tạo cử nhân, kỹ sư có năng lực chuyên môn, phẩm chất nghề nghiệp,
              đạo đức và sức khoẻ thông qua một chương trình đào tạo chặt chẽ
              với các khối kiến thức nền tảng về khoa học, toán học, xã hội và
              kiến thức chuyên ngành, đáp ứng yêu cầu của người học và xã hội về
              nguồn nhân lực trong lĩnh vực Kỹ thuật Hàng không – không gian và
              các ngành công nghiệp liên quan.
            </div>
            {/* Tô đỏ các sự khác biệt */}
            <div style={{ fontWeight: "bold" }}>
              Chương trình đào tạo Kỹ sư (5 năm) được xây dựng với mục tiêu đào
              tạo nâng cao so với bậc Cử nhân (4 năm) với khối lượng kiến thức
              và kỹ năng chuyên sâu.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Chương trình cử nhân KTHK (4 năm)</h4>
          </Col>
          <Col>
            <h4>
              Chương trình Kỹ sư ngành Kỹ thuật Hàng không (4 năm bậc Cử nhân +
              1 năm chuyên môn đặc thù bậc kỹ sư)
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q7"
              question="7.	Có khả năng giải quyết các vấn đề kỹ thuật trong trong lĩnh vực Kỹ thuật Hàng không; cũng như trong các lĩnh vực kỹ thuật khác có liên quan gần đến lĩnh vực Hàng không, $bằng sự vận dụng kiến thức, và các kỹ năng được tích lũy trong quá trình đào tạo ở bậc cử nhân$ chuyên ngành Kỹ thuật Hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q8"
              question="8.	Có khả năng giải quyết các vấn đề kỹ thuật trong trong lĩnh vực Kỹ thuật Hàng không; cũng như trong các lĩnh vực kỹ thuật khác có liên quan gần đến lĩnh vực Hàng không bằng sự vận dụng $kiến thức chuyên môn sâu, và các kỹ năng chuyên môn vững chắc$ được tích lũy trong quá trình đào tạo ở bậc kỹ sư chuyên ngành Kỹ thuật Hàng không – Không gian."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q9"
              question="9.	Có khả năng sử dụng phương pháp và công cụ thiết kế để tham gia giải quyết các vấn đề kỹ thuật đương đại tại các doanh nghiệp trong lĩnh vực Kỹ thuật Hàng không; và các ngành kỹ thuật khác gần lĩnh vực Hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q10"
              question="10.	Có khả năng $tư duy, kỹ năng cá nhân, nghề nghiệp, giao tiếp, làm việc nhóm, đạo đức nghề nghiệp$ đủ để làm việc trong môi trường đa ngành, đa văn hóa."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q11"
              question="11.	Có khả năng $tư duy hệ thống, kỹ năng, thái độ chuyên nghiệp và kinh nghiệm làm việc nhóm$ để hoạt động trong các nhóm đa ngành, đa văn hóa."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q12"
              question="12.	Có hiểu biết về kinh tế, chính trị. $Có kiến thức cơ bản$ trong lĩnh vực khoa học xã hội và nhân văn phù hợp với ngành Kỹ thuật Hàng không để đóng góp hữu hiệu vào sự phát triển bền vững của xã hội, cộng đồng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q13"
              question="13.	Có hiểu biết vững chắc về kinh tế, chính trị. $Có khả năng sáng tạo$ trong bối cảnh doanh nghiệp và xã hội, cũng như trong bối cảnh doanh nghiệp và kinh doanh phù hợp với ngành Kỹ thuật Hàng không để đóng góp hữu hiệu vào sự phát triển bền vững của xã hội, cộng đồng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q14"
              question="14.	Có định hướng nghề nghiệp tích cực cho bản thân với sự hoạch định nghề nghiệp tương lai cho sự thăng tiến, sự tự đào tạo, và việc học tập tiếp sau khi tốt nghiệp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q15"
              question="15.	Có định hướng nghề nghiệp tích cực cho bản thân với sự hoạch định nghề nghiệp tương lai để trở thành $kỹ sư, chuyên gia kỹ thuật, nhà quản lý…$, cũng như việc học tập tiếp sau khi tốt nghiệp để trở thành giảng viên đại học, nhà nghiên cứu…"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextAnswer
              id="q16"
              question="16.	Ý kiến khác về mục tiêu đào tạo bậc cử nhân"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <TextAnswer
              id="q17"
              question="17.	Ý kiến khác về mục tiêu đào tạo bậc kỹ sư"
              maximumLength={128}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3
              style={{ marginTop: "30px", marginBottom: "30px", color: "blue" }}
            >
              B. Năng lực mong đợi của cử nhân, kỹ sư ngành Kỹ Thuật Hàng Không
              khi tốt nghiệp
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>C1. Năng lực chuyên môn cơ bản</h4>
            <GradeAnswer
              id="q18"
              question="18.	Có hiểu biết và vận dụng kiến thức khoa học cơ bản (toán, vật lý, hóa đại cương, xác suất – thống kê, phương pháp tính) và kiến thức kỹ thuật cơ sở ngành (cơ học, điện-điện tử, công nghệ thông tin). "
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q19"
              question="19.	Có kiến thức chuyên ngành kỹ thuật hàng không  trong lĩnh vực khí động lực học, kết cấu và vật liệu Hàng không, hệ thống lực đẩy, cơ học bay và điều khiển, và thiết kế máy bay. "
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q20"
              question="20.	Có tư duy thiết kế máy bay; thực hiện được thiết kế tổng quan, tính toán sơ bộ các thành phần của máy bay và đánh giá đặc tính hoạt động của thiết bị bay."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q21"
              question="21.	Khả năng tìm hiểu nguyên lý và vận hành một hệ thống, một thành phần, một quá trình để đáp ứng các nhu cầu mong muốn với các ràng buộc thực tế như về kinh tế, môi trường, xã hội, chính trị, đạo đức, sức khoẻ và sự an toàn, có thể sản xuất được, và có tính bền vững."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q21a"
              question="a. Hiểu và tham gia vào các quy trình bảo dưỡng kỹ thuật cho tàu bay."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q21b"
              question="b.	Triển khai các thí nghiệm đo lường, chẩn đoán trong hàng không."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q22"
              question="22.	Khả năng sử dụng các phương pháp, kỹ năng và công cụ kỹ thuật hiện đại cần thiết cho thực hành kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>C2. Năng lực chuyên môn nâng cao</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Chương trình cử nhân KTHK (4 năm)</h4>
          </Col>
          <Col>
            <h4>
              Kỹ sư ngành Kỹ thuật Hàng không (4 năm bậc Cử nhân + 1 năm chuyên
              môn đặc thù bậc kỹ sư)
            </h4>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              23. Khả năng tham gia thiết kế một hệ thống, một thành phần, một
              quá trình để đáp ứng các nhu cầu mong muốn với các ràng buộc thực
              tế như về kinh tế, môi trường, xã hội, chính trị, đạo đức, sức
              khoẻ và sự an toàn, có thể sản xuất được, và có tính bền vững.
              Sinh viên có năng lực chuyên môn một trong các lĩnh vực sau:
            </div>
            <GradeAnswer
              id="q23a"
              question="a.	Thiết kế chi tiết, cụm hệ thống, chức năng cơ khí trong các phương tiện bay."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23b"
              question="b.	Thiết kế các phương tiện bay nói chung và các phương tiện di chuyển trong lưu chất nói riêng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23c"
              question="c.	Thiết kế hệ thống điều khiển bay, ứng dụng công nghệ tin học – điện tử "
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23d"
              question="d.	Phát triển các công cụ tính toán số , tối ưu hoá với lưu chất và kết cấu."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q23e"
              question="e.	Tham gia giải quyết các vấn đề kỹ thuật trong bối cảnh doanh nghiệp, rèn luyện tư duy vấn đề toàn diện từ thiết kế, vật liệu, chế tạo,  đến thương mại hoá sản phẩm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{color: 'blue'}}>C3. Năng lực giải quyết các vấn đề kỹ thuật</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              24. Khả năng xác định, mô hình hóa và giải quyết các vấn đề kỹ
              thuật.
            </div>
            <GradeAnswer
              id="q24a"
              question="a.	Giải quyết được bài toán kỹ thuật từ cơ sở đến liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q24b"
              question="b.	Giải quyết được bài toán kỹ thuật tổng thể, bố trí chung."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q24c"
              question="c.	Giải quyết được bài toán kỹ thuật chi tiết từ cơ bản đến phức tạp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q24d"
              question="d.	Giải quyết được các bài toán kỹ thuật kinh điển của chuyên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              25. Khả năng xác định, mô hình hóa và giải quyết các vấn đề kỹ
              thuật.
            </div>
            <GradeAnswer
              id="q25a"
              question="a.	Giải quyết được bài toán kỹ thuật từ cơ sở đến liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q25b"
              question="b.	Giải quyết được bài toán kỹ thuật tổng thể, bố trí chung."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q25c"
              question="c.	Giải quyết được bài toán kỹ thuật chi tiết từ cơ bản đến phức tạp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q25d"
              question="d.	Giải quyết được các bài toán kỹ thuật kinh điển của chuyên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              26. Khả năng thiết kế và vận hành các thử nghiệm, cũng như khả
              năng phân tích và đánh giá dữ liệu.
            </div>
            <GradeAnswer
              id="q26a"
              question="a.	Đánh giá, kiểm nghiệm được một thiết kế, sản phẩm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q26b"
              question="b.	Sáng tạo hay giải mã ngược được một thiết kế, sản phẩm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              27. Khả năng thiết kế và vận hành các thử nghiệm, cũng như khả
              năng phân tích và đánh giá dữ liệu,{" "}
              <span style={{ color: "blue" }}>
                rút ra nhận xét và đề xuất cải thiện
              </span>
              .
            </div>
            <GradeAnswer
              id="q27a"
              question="a.	Đánh giá, kiểm nghiệm được một thiết kế, sản phẩm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q27b"
              question="b.	Sáng tạo hay giải mã ngược được một thiết kế, sản phẩm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q28"
              question="28.	Khả năng nhận biết và áp dụng kiến thức để đưa ra các giải pháp kỹ thuật trong một bối cảnh toàn cầu, kinh tế, môi trường và xã hội."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q29"
              question="29.	Khả năng nhận biết và áp dụng kiến thức để đưa ra các giải pháp kỹ thuật cho các vấn đề $liên ngành$ trong một bối cảnh toàn cầu, kinh tế, môi trường và xã hội."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{color: 'blue'}}>C4. Kỹ năng mềm và thái độ</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontWeight: "bold" }}>
              30. Khả năng nhận biết và thực hiện các trách nhiệm đạo đức và
              nghề nghiệp.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q30a"
              question="a.	Tư duy phân tích vấn đề từ tổng quát đến chi tiết."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q30b"
              question="b.	Kỹ năng tự phản biện"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q30c"
              question="c.	Kỹ năng tìm kiếm thông tin"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q30d"
              question="d.	Ý thức tuân thủ an toàn lao động"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q30e"
              question="e.	Tính kỷ luật và cẩn trọng. "
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q30f"
              question="f.	Kỹ năng làm việc nhóm và tinh thần trách nhiệm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <div style={{ fontWeight: "bold" }}>
              31. Khả năng giao tiếp hiệu quả: Khả năng viết báo cáo; Khả năng
              trình bày, diễn đạt ý tưởng qua lời nói, hình ảnh.
            </div>
            <GradeAnswer
              id="q31a"
              question="a.	Kỹ năng biểu diễn, tóm tắt được nội dung phức tạp bằng hình ảnh, sơ đồ."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q31b"
              question="b.	Kỹ năng sử dụng các phần mềm văn phòng."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q31c"
              question="c.	Kỹ năng viết báo cáo, trình bày bằng poster, thuyết trình với Powerpoint."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q32"
              question="32. Kỹ năng lãnh đạo, khởi nghiệp"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q33a"
              question="33a.	Trình độ tiếng Anh tối thiểu tương đương $TOEIC 550$"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q33b"
              question="Ý kiến khác về năng lực ngoại ngữ (bậc cử nhân)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q34a"
              question="34a.	Trình độ tiếng Anh tối thiểu tương đương $TOEIC 600$"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q34b"
              question="34b.	Trình độ tiếng Pháp tương đương DELF B1."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q34c"
              question="Ý kiến khác về năng lực ngoại ngữ (bậc kỹ sư)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q35"
              question="35.	Khả năng thực hiện thành công chức năng của một thành viên trong nhóm giải quyết vấn đề  có tính liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q36"
              question="36.	Khả năng thực hiện thành công chức năng của một thành viên trong nhóm giải quyết vấn đề  có tính liên ngành."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q37"
              question="37.	Khả năng nhận ra các nhu cầu và động lực để tham gia vào việc học tập suốt đời. Tinh thần học hỏi, tự cập nhật kiến thức và kỹ năng chuyên môn theo yêu cầu công việc."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q38"
              question="38.	Khả năng nhận ra các nhu cầu và động lực để tham gia vào việc học tập suốt đời. Tinh thần học hỏi, tự cập nhật kiến thức và kỹ năng chuyên môn theo yêu cầu công việc."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3
              style={{ marginTop: "30px", marginBottom: "30px", color: "blue" }}
            >
              D. Cấu trúc chương trình đào tạo
            </h3>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../img/ctdt.png")}
                alt="Chương trình đào tạo"
              ></img>
              {/* Xoá số tín chỉ phần trăm, lấy bảng của cô */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>
              D1. Khối kiến thức khoa học cơ bản
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q39"
              question="39.	Khối kiến thức khoa học cơ bản (toán, vật lý, hóa đại cương, xác suất và thống kê, phương pháp tính) có vai trò quan trọng đối với chương trình đào tạo các ngành kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q39b"
              question="Ý kiến khác về khối kiến thức khoa học cơ bản (cử nhân)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q40"
              question="40.	Khối kiến thức khoa học cơ bản (toán, vật lý, hóa đại cương, xác suất và thống kê, phương pháp tính) có vai trò quan trọng đối với chương trình đào tạo các ngành kỹ thuật."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>

            <TextAnswer
              id="q40b"
              question="Ý kiến khác về khối kiến thức khoa học cơ bản (Kỹ sư)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>D2. Khối kiến thức giáo dục chung</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q41"
              question="41.	Nhóm môn học chính trị - xã hội – luật có vai trò quan trọng đối với sự hình thành đạo đức, ý thức và trách nhiệm của một công dân."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q43"
              question="	43.	Nhóm môn học Nhập môn kỹ thuật, Môi trường và Quản lý, khởi nghiệp có vai trò quan trọng trong việc hình thành tư duy kỹ thuật và nhận thức được yếu tố nền kinh tế, doanh nghiệp, môi trường trong các giải pháp kỹ thuật"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q45"
              question="45.	Nhóm môn ngoại ngữ (tiếng Anh) có vai trò quan trọng trong hình thành kỹ năng giao tiếp, khả năng tự cập nhật kiến thức, và hội nhập trong nhóm làm việc quốc tế"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q45b"
              question="Ý kiến khác về khối kiến thức giáo dục chung (cử nhân)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q42"
              question="42.	Nhóm môn học chính trị - xã hội – luật có vai trò quan trọng đối với sự hình thành đạo đức, ý thức và trách nhiệm của một công dân."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q44"
              question="	44.	Nhóm môn học Nhập môn kỹ thuật, Môi trường và Quản lý, khởi nghiệp có vai trò quan trọng trong việc hình thành tư duy kỹ thuật và nhận thức được yếu tố nền kinh tế, doanh nghiệp, môi trường trong các giải pháp kỹ thuật"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q46"
              question="46.	Nhóm môn ngoại ngữ (tiếng Anh) có vai trò quan trọng trong hình thành kỹ năng giao tiếp, khả năng tự cập nhật kiến thức, và hội nhập trong nhóm làm việc quốc tế"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q47"
              question="47.	Nhóm môn ngoại ngữ  tiếng Pháp là ngoại ngữ thứ hai cần thiết trong khuôn khổ chương trình Kỹ sư Chất lượng Cao PFIEV, giúp sinh viên cơ hội thực tập, nghiên cứu và học sau đại học tại các trường đối tác Pháp."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q47b"
              question="Ý kiến khác về khối kiến thức giáo dục chung (Kỹ sư)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>D3. Khối kiến thức cơ sở ngành</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q48"
              question="48.	Các môn học sau đây là những môn học cơ sở và tối thiểu đối với khối kiến thức cơ sở ngành: (1) Vẽ kỹ thuật; (2) Cơ kỹ thuật và dao động; (3) Cơ học vật rắn và biến dạng, (4) Cơ học thủy khí; (5) Nhiệt động lực học và truyền nhiệt; (6) Kỹ thuật điện - điện tử; (7) Nhập môn lập trình; "
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q48b"
              question="Ý kiến khác về khối kiến thức cơ sở ngành (cử nhân)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q49"
              question="49.	Các môn học sau đây là những môn học cơ sở và tối thiểu đối với khối kiến thức cơ sở:  (1) Cơ học vật rắn và sóng cơ; (2) Điện – điện động học; (3) Vẽ kỹ thuật; (4) Cơ học đại cương và mội trường liên tục; (5) Cơ học thủy khí; (6) Nhiệt động lực học và truyền nhiệt."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q49b"
              question="Ý kiến khác về khối kiến thức cơ sở ngành bậc kỹ sư"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>D4. Khối kiến thức chuyên ngành</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q50"
              question="50.	Các môn học sau đây là những môn học trong chuyên ngành kỹ thuật hàng không: (1) Khí động lực học 1 (dòng  chuyển động không nén được, vận tốc thấp); (2) Khí động lực học 2 (dòng  chuyển động nén được, vận tốc cao); (3) Cơ học vật liệu Hàng không; (4) Kết cấu hàng không 2 – Phân tích kết cấu máy bay;  (5) Cơ học bay; (6)  Ổn định và điều khiển bay; (7) Hệ thống lực đẩy máy bay 1; (8) Hệ thống lực đẩy máy bay 2."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q50b"
              question="Ý kiến khác về khối kiến thức chuyên ngành (cử nhân)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q51"
              question="51.	Các môn học sau đây là những môn học trong chuyên ngành kỹ thuật hàng không: (1) Khí động lực học 1 (dòng  chuyển động không nén được, vận tốc thấp); (2) Khí động lực học 2 (dòng  chuyển động nén được, vận tốc cao); (3) Cơ học vật liệu Hàng không; (4) Kết cấu hàng không 2 – Phân tích kết cấu máy bay;  (5) Cơ học bay; (6)  Ổn định và điều khiển bay; (7) Hệ thống lực đẩy máy bay 1; (8) Hệ thống lực đẩy máy bay 2."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q51b"
              question="Ý kiến khác về khối kiến thức chuyên ngành (Kỹ sư)"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>
              D5. Nhóm môn thí nghiệm, thực hành, thực tập và đồ án
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q52"
              question="52.	CTĐT cần có ít nhất 9% (tương ứng 11 tín chỉ) thời lượng học tập cơ sở ngành, chuyên ngành thông qua thí nghiệm, thực hành, thực tập và đồ án."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q52b"
              question="Ý kiến khác về thời  lượng học tập nhóm môn thí nghiệm, thực hành, thực tập và đồ án bậc cử nhân"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q53"
              question="53.	CTĐT cần có ít nhất 19% (tương ứng 11 tín chỉ) thời lượng học tập cơ sở ngành, chuyên ngành ngành thông qua thí nghiệm, thực hành, thực tập và đồ án."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q53b"
              question="Ý kiến khác về thời  lượng học tập nhóm môn thí nghiệm, thực hành, thực tập và đồ án bậc kỹ sư:"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>D6. Khối kiến thức tự chọn tự do</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer
              id="q54"
              question="54.	CTĐT cần có tối đa $7%$ thời lượng học tập (tương ứng 9 tín chỉ) cho các môn học tự chọn tự do khai phóng năng lực cá nhân trong chương trình đào tạo toàn trường hoặc trong hệ thống Đại học Quốc gia TP. HCM. Sinh viên tự chọn môn học theo sở thích và nhu cầu trang bị kiến thức cá nhân, chuẩn bị cho nghề nghiệp tương lai."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q54b"
              question="Ý kiến khác về khối kiến thức tự do bậc cử nhân: "
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <GradeAnswer
              id="q55"
              question="55.	CTĐT cần có tối đa $6%$ thời lượng học tập (tương ứng 9 tín chỉ) cho các môn học tự chọn tự do khai phóng năng lực cá nhân trong chương trình đào tạo toàn trường hoặc trong hệ thống Đại học Quốc gia TP. HCM. Sinh viên tự chọn môn học theo sở thích và nhu cầu trang bị kiến thức cá nhân, chuẩn bị cho nghề nghiệp tương lai."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q55b"
              question="Ý kiến khác về khối kiến thức tự do bậc kỹ sư: "
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ color: "blue" }}>
              D7. Khối kiến thức đặc thù của chương trình Kỹ sư
            </h4>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <GradeAnswer
              id="q56"
              question="56.	Khối kiến thức đặc thù bậc kỹ sư  được giảng dạy theo phương  thức thực hiện dự án (PBL –Project Based Learning. Sinh viên tìm hiểu và thực hiện đồ án giải quyết vấn đề quan tâm nghiên cứu và phát triển (R&D) của doanh nghiệp. Việc hướng dẫn và đánh giá môn học có sự tham gia của doanh nghiệp xuyên suốt môn học."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q57"
              question="57.	Các môn học sau đây là các môn học theo phương  thức thực hiện dự án (PBL) cần thiết để giới thiệu về các vấn đề kỹ thuật đương đại đang cần giải quyết trong môi trường doanh nghiệp: (1) Thực tập kỹ thuật tại doanh nghiệp vào cuối năm học thứ 3 và (2) Chuyên đề công nghiệp vào đầu năm học thứ 4."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            {/* Tô màu sự khác biệt */}
            <GradeAnswer
              id="q58"
              question="58.	Sinh viên chọn một trong hai hướng chuyên môn nhằm trang bị các phương pháp, công cụ thiết kế đặc thù bậc kỹ sư,  chuyên ngành kỹ thuật hàng không, được tổ chức trong các môn học tự chọn dưới hình thức thực hiện dự án (PBL), bao gồm: Tương tác lưu chất và kết cấu, Thiết kế hệ thống và điều khiển"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="q59"
              question="59.	Các môn học tự chọn học theo phương  thức thực hiện dự án (PBL)  trong hướng chuyên môn Tương tác lưu chất và kết cấu, bao gồm:  (1) Phương pháp số - động lực học lưu chất; (2) Phương pháp phần tử hữu hạn;(3) Khí đàn hồi; (4) Khí động lực học hỏa tiễn; (5) Hệ thống lực đẩy hỏa tiễn; (6) Động cơ gió; (7) Máy bay trực thăng;(8) Kết cấu hàng không 3: cơ học rạn nứt và mỏi; (9) Cơ học va chạm."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q59b"
              question="Ý kiến khác cho hướng chuyên môn Tương tác lưu chất và kết cấu "
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
            <GradeAnswer
              id="q60"
              question="60.	Các môn học tự chọn học theo phương  thức thực hiện dự án (PBL)  trong hướng chuyên môn Thiết kế hệ thống và điều khiển, bao gồm:  (1) Cảm biến và tín hiệu; (2) Các hệ thời gian thực; (3) Phân tích thiết kế hệ điều khiển ; (4) Nhận dạng hệ thống máy bay; (5) Điện - điện tử hàng không; (6) Thiết kế tối ưu."
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="q60b"
              question="Ý kiến khác cho hướng chuyên môn Thiết kế hệ thống và điều khiển:"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextAnswer
              id="q60c"
              question="Ý kiến về nhóm môn học/môn học cần bổ sung bậc cử nhân"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <TextAnswer
              id="q60d"
              question="Ý kiến về nhóm môn học/môn học cần bổ sung bậc kỹ sư"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 style={{ color: "blue" }}>E. Phương thức giảng dạy</h3>
            <div>
              {/* Tách dòng */}
              Phương thức giảng dạy cổ điển:
              <ul>
                <li>
                  Nội dung chương trình đào tạo (môn học) cố định theo chuyên
                  ngành;
                </li>
                <li>Giáo viên thuyết giảng trực tiếp;</li>
                <li>
                  SV được đánh giá trong suốt quá trình học tập của môn học bằng
                  các hình thức bài tập tại lớp, bài tập về nhà, bài tập lớn,
                  kiểm tra giữa kì và thi cuối kì.
                </li>
              </ul>
            </div>
            <div>
              Phương thức giảng dạy theo hình thức thực hiện dự án:
              <ul>
                <li>
                  Sau khi kết thúc giai đoạn đại cương (02 năm đầu) thì SV học
                  tập thông qua việc thực hiện các đề tài chuyên ngành;
                </li>
                <li>
                  Sau khi kết thúc giai đoạn đại cương (02 năm đầu) thì SV học
                  tập thông qua việc thực hiện các đề tài chuyên ngành;
                </li>
                <li>
                  SV chỉ chọn học các môn cơ sở ngành và chuyên ngành kỹ thuật
                  cần thiết và phù hợp với nội dung đề tài thực hiện;
                </li>
                <li>
                  SV chỉ tích lũy kiến thức và rèn luyện những kỹ năng chuyên
                  môn cần thiết và phù hợp với nội dung đề tài thực hiện, thay
                  vì học đầy đủ các nội dung từ cơ bản đến nâng cao.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Chương trình cử nhân</h4>
            <GradeAnswer
              id="qq1"
              question="Tầm quan trọng của phương thức giảng dạy cổ điển"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="qq2"
              question="Tầm quan trọng của phương thức giảng dạy thực hiện dự án"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="qq3"
              question="Ý kiến về phương thức giảng dạy cử nhân"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
          <Col>
            <h4>Chương trình kỹ sư</h4>
            <GradeAnswer
              id="qq1b"
              question="Tầm quan trọng của phương thức giảng dạy cổ điển"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <GradeAnswer
              id="qq2b"
              question="Tầm quan trọng của phương thức giảng dạy thực hiện dự án"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer>
            <TextAnswer
              id="qq3b"
              question="Ý kiến về phương thức giảng dạy kỹ sư"
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
              showError={errorMode}
            ></TextAnswer>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ marginTop: "45px" }}></div>
            <h3 style={{ color: "blue" }}>F. Khả năng hỗ trợ đơn vị đào tạo</h3>
            <div style={{ marginTop: "45px" }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GradeAnswer2
              id="qq4"
              question="Quí Ông/Bà có sẵn sàng trợ giúp Đơn vị Đào tạo thực hiện đào tạo theo phương thức PBL?"
              required={true}
              showError={errorMode}
              onChangeAndValidate={(val) => onChangeAndValidate(val)}
            ></GradeAnswer2>
            <div
              style={{ display: fieldValues["qq4"] === 1 ? "none" : "block" }}
            >
              <div>Các hình thức quý ông bà có thể hỗ trợ:</div>
              <CheckAnswer
                id="qq5"
                question="Tham gia giảng dạy toàn bộ môn học hay theo chuyên đề."
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq6"
                question="Tư vấn kỹ thuật – công nghệ"
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq7"
                question="Cập nhật tài liệu, thông tin kỹ thuật – công nghệ chuyên ngành"
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq8"
                question="Tham gia tổ chức các buổi seminar giới thiệu về nghề nghiệp, thông tin kỹ thuật – công nghệ chuyên ngành."
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq9"
                question="Tài trợ sử dụng các thiết bị hoặc phần mềm chuyên dùng."
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq10"
                question="Đặt hàng đề tài thực hiện."
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <CheckAnswer
                id="qq11"
                question="Tài trợ kinh phí thực hiện đề tài."
                showError={errorMode}
                onChangeAndValidate={(val) => onChangeAndValidate(val)}
              ></CheckAnswer>
              <TextAnswer
                id="qq12"
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
                <Button
                  variant="primary"
                  disabled={loading ? true : false}
                  onClick={() => submitForm()}
                >
                  Đồng ý
                </Button>
              </Modal.Footer>
            </Modal>
            <div style={{ marginBottom: "60px" }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
