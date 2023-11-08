import React from "react";
import axios from "axios";
function Content() {
  //   axios
  //     .get("/try", config)
  //     .then(function (response) {
  //       console.log("refresh_token 값 : " + response.data);
  //       alert(id + "님 환영합니다.");
  //       window.location.href = "/content";
  //     })
  //     .catch(function (error) {
  //       console.log("오류 " + error);
  //     });

  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.get("/try", {});
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="text-4xl font-bold">로그인 성공 페이지</div>
      <div className="text-3xl pt-12">
        <button onClick={onClickHandler}>정보보기</button>
      </div>
    </div>
  );
}

export default Content;
