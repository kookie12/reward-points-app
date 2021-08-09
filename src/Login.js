import React, { useState, useEffect } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import fire from './config/fire';
import Soldier from './Soldier.js';
//import axios from "axios";

function Login(props) {
	
	const [setname, setpassword] = useState('');
	const [nameError, setnameError] = useState('');
	const [passwordError, setpasswordError] = useState('');
	const [loginError, setloginError] = useState('');
	const [login_flag, setlogin_flag] = useState(false); // 이제 로그인 버튼 누르면 바로 넘어가서 안쓴다!
	const [pass, setpass] = useState(false);
	
	const [name, set_name] = useState(''); // 데이터를 보내기 위해서
	const [password, set_password] = useState('');
	const [_class, set_class ] = useState('');
	const [group, set_group] = useState('');
	const [points, set_points] = useState('');
	const [n_points, set_n_points] = useState('');
	const [recents, set_recents] = useState(["not_in_here : 1", "mistake : 2"]);
	// var login_flag = false;
	
	const clearInputs = () => {
	  setname('');
	  setpassword('');	  
	};
	
	const clearErrors = () => {
	  setnameError('');
	  setpasswordError('');	  
	};

	const handleLogin = () => {
		
		console.log("here : ", login_flag);
		clearErrors();
		const db = fire.firestore();
		const name = document.querySelector('#name').value;
		const password = document.querySelector('#password').value;
		var container = [];
		
		if (name === "" && password === "") {
			setnameError("이름을 입력해 주세요!");
			setpasswordError("비밀번호를 입력해 주세요!");
		} else if (name === ""){
			console.log("이름을 입력해 주세요!")
			setnameError("이름을 입력해 주세요!");
		} else if (password === "") {
			console.log("비밀번호를 입력해 주세요!")
			setpasswordError("비밀번호를 입력해 주세요!");
		} else {
			var temporary = "user"
			// const fetchData = async () => {
			// 	const doc_user_test = await db.collection(temporary).doc(name);
			// 	doc_user_test.get().then((doc) => {
			// 	console.log("doc.exist : ", doc.exists);
			// 	if(doc.exists === false) {
			// 		console.log("come in here");
			// 		temporary = "ganbu"
			// 		console.log("temporary : ", temporary);

			// 		} 
			// 	})	
			// }			
			// fetchData();
			// console.log("temporary 2: ", temporary);
			const doc_user = db.collection(temporary).doc(name);
			
			doc_user.get().then((doc) => {
				console.log("doc: ", doc);
				console.log("doc.exists : ", doc.exists);
				if(doc.exists){
					console.log("데이터 존재 : ", doc.data());
					if(doc.data().pw === password){
						console.log("로그인 되었습니다!");
						setloginError("로그인 되었습니다!");
						setlogin_flag(true);
						setpass(true);
						set_name(name);
						set_password(password);
						set_class(doc.data().class);
						set_group(doc.data().group);
						set_points(doc.data().points);
						set_n_points(doc.data().n_points);		
						set_recents(doc.data().recents);
						
						// setstate의 비동기화로 인해 임시방편으로 만들었음
						const login_name = name;
						const login_password = password;
						const login_class = doc.data().class;
						const login_group = doc.data().group;
						const login_points = doc.data().points;
						const login_npoints = doc.data().n_points;
						const login_recents = doc.data().recents;
						const login_pass = true;
						
					//doc_user.collection('recents').doc('contents').get().then(				
						//	(snapshot) => {
								//console.log(snapshot.data())
								//console.log("type : ", typeof snapshot.data())
						//		console.log('snapshot.data() : ', snapshot.data());
						//		set_recents(snapshot.data());
						//		container.push(snapshot.data())
								// 여기서 snapshot.data().info()로 하자!
								
								// snapshot.forEach((item) => {
								// 	console.log(item.data())
								// 	container.push(item.data())
								// })
						//		console.log('container', container);
						//		console.log('recents 2: ', recents);
								//set_recents(container);
						//	}
						//);

						console.log(loginError);
						props.history.push({
							pathname: "/Soldier",
							state: {
								login_pass,
								login_name,
								login_password,
								login_class,
								login_group,
								login_points,
								login_npoints,
								login_recents
							}	
						})
					
	
					} else {
						console.log("비밀번호가 맞지 않습니다!");
						setloginError("비밀번호가 맞지 않습니다!");
						console.log(loginError);
						document.getElementById("password").value ='';
					}
					
				} else {
					setloginError("존재하지 않는 계정입니다!");
					document.getElementById("name").value ='';
					document.getElementById("password").value ='';
					console.log("데이터 없음!!");
				}
			}).catch((error) => {
				console.log("error!!! : ", error);
			});
			
		}
		
	};
		
	useEffect(() => {
		console.log("---------localstorage 초기화 ------------");
		window.localStorage.clear()
	}, [name, password, _class, group, points, n_points, recents]); 
	
	return(
	<div>
		<div className="header">
			<Link to="/">
				<h1 className="head">Points App</h1>
			</Link>
		</div>
		<div className="login">
			<div className="loginContainer">
				<div className="text">
					<h1>로그인</h1>
				</div>
				<div className="box">
					<h2>사용자 이름</h2>
					<input id="name" placeholder="이름을 입력하세요..." type="text"/>
					<p className="errorMsg">{nameError}</p>
					<h2>비밀번호</h2>
					<input id="password" placeholder="비밀번호를 입력하세요..." type="password"/>
					<p className="errorMsg">{passwordError}</p>
				</div>
				<div className="footer">
					<div className="blank">
						<button className="btn-submit-form1" onClick={handleLogin}>로그인</button>
					</div>
								
					<div className="blank">
						<Link to="/Signup">
							<button className="btn-submit-form2">회원가입</button>
						</Link>
					</div>
				</div>
			    <p className="errorMsg">{loginError}</p>
			</div>
		</div>	
	</div>
	);		
	
};

	
export default Login;
			
	
