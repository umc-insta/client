import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function LogIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const axiosInstance = axios.create({
      baseURL: "http://umc.aolda.net",
    });
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        userId: id,
        password: password,
      });
      console.log(response);
      const authToken = response.data.accessToken;
      localStorage.setItem("access_token", authToken);

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const infoResponse = await axiosInstance.get("/api/auth/info", config);
      console.log("access token 값" + authToken);
      console.log(infoResponse.data);
      //console.log(infoResponse.data.memberRole);
      alert(id + "(" + infoResponse.data.memberRole + ")" + "님 환영합니다");

      navigation("/content");
    } catch (error) {
      alert("님 잘못함");
      console.error("오류", error);
    }
  };

  return (
    <div>
      <div>
        <form id="login" onSubmit={submitHandler}>
          <div className="font-bold text-3xl pt-12 p-4">아이디</div>
          <input
            className="p-4 border-b-4"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => setId(e.target.value)}
          ></input>

          <div className="font-bold text-3xl p-4">비밀번호</div>
          <input
            className="p-4 border-b-4"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="w-full">
            <button className="text-2xl border p-3 rounded-2xl">입력</button>
          </div>
        </form>
      </div>
      <div className="pt-10">
        <Link to="/sign">
          <button type="button" className="text-2xl p-3 border">
            회원가입 바로가기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
