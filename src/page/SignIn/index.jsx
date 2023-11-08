import React, { useState } from "react";
//import { POST } from "../../utils/axios";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userId: id,
      password: password,
      role: role,
      userName: userName,
    };
    console.log(data);

    const axiosInstance = axios.create({
      baseURL: "http://umc.aolda.net",
    });
    try {
      e.preventDefault();

      console.log(data);
      console.log(axiosInstance.defaults.baseURL);
      await axiosInstance.post("/api/auth/register", data).then((response) => {
        console.log(response.data);
        navigate(`/`);
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // const onChangeHandler = (e) => {
  //   setRole(e.target.value);
  //   //console.log(e.target.value);
  // };

  return (
    <div>
      <div className="w-full p-4">
        <form onSubmit={handleSubmit}>
          <div className="text-3xl font-bold">아이디</div>
          <input
            className="text-2xl pb-5"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => setId(e.target.value)}
          ></input>

          <div className="text-3xl font-bold">비밀번호</div>
          <input
            className="text-2xl pb-5"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div>
            <div className="text-3xl font-bold">역할을 선택해주세요</div>
            <select
              name="roles"
              id="role"
              className="text-2xl"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="ROLE_ADMIN">admin</option>
              <option value="ROLE_USER">user</option>
            </select>
          </div>
          <div>
            <div className="text-3xl font-bold pt-5">이름을 입력해주세요</div>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div className="pt-8">
            <button type="submit" className="text-2xl border-4 px-3">
              입력
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
