import React, { useState, useEffect} from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";
import fire from './config/fire';

function Signup() {
	const [setname, setpassword] = useState('');
	const [nameError, setnameError] = useState('');
	const [passwordError, setpasswordError] = useState('');
	const [classError, setclassError] = useState('');
	const [groupError, setgroupError] = useState('');
	const [signupError, setsignupError] = useState('');
	const [codeError, setcodeError] = useState('');
	
	
	const clearErrors = () => {
	  setnameError('');
	  setpasswordError('');	  
	  setclassError('');
	  setgroupError('');
      setsignupError('');
	  setcodeError('');
	};
	
	const clearinputs = () => {
		document.getElementById("name").value ='';
		document.getElementById("password").value ='';
		document.getElementById("class").value ='';
		document.getElementById("group").value ='';
		document.getElementById("code").value ='';
	};
	
	const handleSignup = () => {
		
		clearErrors();
		const db = fire.firestore();
		const name = document.querySelector('#name').value;
		const password = document.querySelector('#password').value;
		const _class = document.querySelector('#class').value;
		const group = document.querySelector('#group').value;
		const code = document.querySelector('#code').value;
		var [flag1, flag2, flag3, flag4, flag5] = [false, false, false, false, false];
		
		if (name === ""){
			setnameError("이름을 입력해 주세요!");
		} else {
			flag1 = true;
		}
		
		if (password === ""){
			setpasswordError("비밀번호를 입력해 주세요!");
		} else if (password.length < 4) {
			setpasswordError("비밀번호를 4자리 이상 입력해주세요!");
			document.getElementById("password").value ='';
		} else {
			flag2 = true;
		}
		
		if (_class === "") {
			setclassError("간부/병사 구분을 입력해주세요!");
		} else if (parseInt(_class) === 0 || parseInt(_class) === 1 || parseInt(_class) === 2){
			flag3 = true;
		} else {
			setclassError("간부/병사 구분을 0, 1, 2로 입력해주세요!");
			document.getElementById("class").value ='';
		}
		
		if (group === "") {
			setgroupError("소속을 적어주세요!");
		} else if (parseInt(group) === 0 || parseInt(group) === 1 || parseInt(group) === 2 || parseInt(group) === 3){
			flag4 = true;
		} else {
			setgroupError("소속을 0, 1, 2, 3으로 입력해주세요!");
			document.getElementById("group").value ='';
		}
		
		if (code === "") {
			setcodeError("코드를 적어주세요!")
			document.getElementById("code").value ='';
		} else if (code !== "3537"){
			setcodeError("보안코드가 올바르지 않습니다.")
		} else if (code === "3537"){
			flag5 = true;
		}

		if (flag1 === true && flag2 === true && flag3 === true && flag4 === true && flag5 === true) {			
			if (_class === '0') {
				const doc_user = db.collection("user").doc(name); //나중에 여기를 ganbu로 바꿔야함!!
				doc_user.get().then((doc) => {
					if(doc.exists){
						console.log("데이터 존재 : ", doc.data());
						console.log("이미 존재하는 계정입니다!");
						setsignupError("이미 존재하는 계정입니다!");
						clearinputs();
					} else {
						doc_user.set({
							id: name,
							pw: password,
							class: _class,
							group: group,
							points: 0,
							n_points:0,
							recents: []
						}).then(()=>{
							console.log("Document successfully written!");
							setsignupError("성공적으로 회원가입 되었습니다!")
							clearinputs();
							})
					}
				}).catch((error) => {
					console.log("error!!! : ", error);
				});
			} else {
				const doc_user = db.collection("user").doc(name);
				doc_user.get().then((doc) => {
					if(doc.exists){
						console.log("데이터 존재 : ", doc.data());
						console.log("이미 존재하는 계정입니다!");
						setsignupError("이미 존재하는 계정입니다!");
						clearinputs();
					} else {
						doc_user.set({
							id: name,
							pw: password,
							class: _class,
							group: group,
							points: 0,
							n_points:0,
							recents: []
						}).then(()=>{
							console.log("Document successfully written!");
							setsignupError("성공적으로 회원가입 되었습니다!")
							clearinputs();
							})
					}
				}).catch((error) => {
					console.log("error!!! : ", error);
				});	
			}
		}
	};
	
	return(
	<div>
		<div className="header">
			<Link to="/">
				<h1 className="head">Points App</h1>
			</Link>
		</div>
		<div className="signup">
			<div className="signupContainer">
				<div className="text">
					<h1>회원가입</h1>
				</div>
				<div className="box">
					<h2>이름</h2> 
					<p className="small">* 실제 이름을 입력!</p>
					<input id="name" placeholder="사용자 이름을 적어주세요..." type="text"/>
					<p className="errorMsg">{nameError}</p>
					
					<h2>비밀번호</h2>
					<p className="small">* 최소 네 자리 이상 입력!</p>
					<input id="password" placeholder="비밀번호를 적어주세요..." type="text"/>
					<p className="errorMsg">{passwordError}</p>
					
					<h2>간부/병사 구분</h2>
					<p className="small">* 간부 : 0 / 분대장 : 1 / 병사 : 2 입력!</p>
					<input id="class" placeholder="간부/병사를 적어주세요..." type="text"/>
					<p className="errorMsg">{classError}</p>
					
					<h2>소속</h2>
					<p className="small">* 직할중대 : 0 / 1대대 : 1 / 2대대 : 2 / 3대대 : 3 입력!</p>
					<input id="group" placeholder="소속을 적어주세요..." type="text"/>
					<p className="errorMsg">{groupError}</p>
					
					<h2>보안 코드</h2>
					<p className="small">* 보안 코드를 입력해야만 회원가입이 가능합니다!</p>
					<input id="code" placeholder="보안코드를 적어주세요..." type="text"/>
					<p className="errorMsg">{codeError}</p>
				</div>
				<div className="footer">
					<div className="blank">
						<Link to='/'>
							<button className="btn-submit-form1" onClick={handleSignup}>로그인 페이지</button>
						</Link>
					</div>
					
					<div className="blank">
						<button className="btn-submit-form2" onClick={handleSignup}>회원가입 하기</button>
					</div>
				</div>
			    <p className="errorMsg">{signupError}</p>
			</div>
		</div>	
	</div>
	);	
	
	
}


export default Signup;