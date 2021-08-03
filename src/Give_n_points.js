import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './Give_n_points.css';
import AppShell from './AppShell';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import fire from './config/fire';

const useStyles = makeStyles((theme) => ({
	  root: {
		display: 'flex',
	  },
	  formControl: {
		margin: theme.spacing(3),
	  },
	}));

function Give_n_points (props) {
	const [__class, set__class] = useState(() => JSON.parse(window.localStorage.getItem("__class")) || '');
	const [__group, set__group] = useState(() => JSON.parse(window.localStorage.getItem("__group")) || '');
	const [__name, set__name] = useState(() => JSON.parse(window.localStorage.getItem("__name")) || '');
	const [__reason, set__reason] = useState('');
	
	const classes = useStyles();
	const [state, setState] = React.useState({
		points_11: false,
		points_21: false, 
		points_22: false, 
		points_31: false, 
		points_32: false, 
		points_41: false, 
		points_42: false, 
		points_43: false, 
		points_44: false, 
		points_51: false, 
		points_52: false,
		points_53: false,
		points_54: false,
		points_61: false,
		points_62: false, 
		points_63: false, 
		points_64: false, 
		points_71: false, 
		points_72: false, 
		points_81: false, 
		points_82: false, 
		points_83: false, 
		points_91: false, 
		points_92: false,
		points_101: false,
		points_111: false,
		points_121: false,
		points_122: false,
	});
	
	const [submitError, set_submitError] = useState('');
	
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
		//console.log("document.getElementById(4-1).value:", document.getElementById("4-1").innerText);
		//console.log( " [event.target.name]: event.target.checked : ", [event.target.name], event.target.checked);
	};
	
	const { points_11, points_21, points_22, points_31, points_32, points_41, points_42, points_43, points_44, points_51, points_52, points_53, points_54, points_61, points_62, points_63, points_64, points_71, points_72, points_81, points_82, points_83, points_91, points_92, points_101, points_111, points_121, points_122} = state;
    //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
	
	const clearErrors = () => {
	  set_submitError('');
	};
	
	const clearinputs = () => {
		document.getElementById("s_name").value ='';
		document.getElementById("s_date").value ='';
		document.getElementById("s_group").value ='';
		document.getElementById("s_points").value ='';
	};
	
	const handleSignup = () => {
		
		clearErrors();
		const db = fire.firestore();
		const s_name = document.querySelector('#s_name').value;
		const s_date = document.querySelector('#s_date').value;
		const s_group = document.querySelector('#s_group').value;
		const s_points = document.querySelector('#s_points').value;
		var [flag1, flag2, flag3, flag4] = [false, false, false, false];
		console.log("정보 : ", s_name, s_date, s_group, s_points);
		console.log("INT : ", parseInt(s_points));
		console.log("INT : ", isNaN(parseInt(s_points))); //숫자면 FALSE, 
		
		if (s_name === "") {
			set_submitError('이름을 적어주세요!');
		} else { 
			flag1 = true; 
		}
		
		if (s_group === "") {
			set_submitError('소속을 적어주세요!');
		} else {
			flag2 = true;
		}
		
		if (s_date === "") {
			set_submitError('날짜를 적어주세요!');
		} else {
			flag3 = true;
		}
		
		if (s_points === "") {
			set_submitError('상점을 적어주세요!');
		}
		
		if (isNaN(parseInt(s_points)) === true) {
			set_submitError('상점을 숫자로 적어주세요!');
			document.getElementById("s_points").value ='';
		} else {
			flag4 = true;
		}
		
		if (flag1 === true && flag2 === true && flag3 === true && flag4 === true) {
			//상점 사유 가져오는 부분
			var reason_in = '';
			if (state.points_11 === true) {
				//console.log("안에 들어옴!!");
				//set__reason(__reason => __reason + ' ' + document.getElementById("1-1").innerText)
				console.log(__reason);
				reason_in = reason_in + ' ' + document.getElementById("1-1").innerText
			}
			
			if (state.points_21 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("2-1").innerText)
				reason_in = reason_in + ' ' + document.getElementById("2-1").innerText
			}
			
			if (state.points_22 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("2-2").innerText)
				reason_in = reason_in + ' ' + document.getElementById("2-2").innerText
			}
			
			if (state.points_31 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-1").value )
				reason_in = reason_in + ' ' + document.getElementById("3-1").innerText
			}
			
			if (state.points_32 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-2").value )
				reason_in = reason_in + ' ' + document.getElementById("3-2").innerText
			}
			
			if (state.points_41 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-1").value )
				reason_in = reason_in + ' ' + document.getElementById("4-1").innerText
			}
			
			if (state.points_42 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-2").value )
				reason_in = reason_in + ' ' + document.getElementById("4-2").innerText
			}
			
			if (state.points_43 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-3").value )
				reason_in = reason_in + ' ' + document.getElementById("4-3").innerText
			}
			
			if (state.points_44 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-4").value )
				reason_in = reason_in + ' ' + document.getElementById("4-4").innerText
			}
			
			if (state.points_51 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("5-1").value )
				reason_in = reason_in + ' ' + document.getElementById("5-1").innerText
			}
			
			if (state.points_52 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("5-2").value )
				reason_in = reason_in + ' ' + document.getElementById("5-2").innerText
			}
			
			if (state.points_53 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("5-3").value )
				reason_in = reason_in + ' ' + document.getElementById("5-3").innerText
			}
			
			if (state.points_54 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("5-4").value )
				reason_in = reason_in + ' ' + document.getElementById("5-4").innerText
			}
			
			if (state.points_61 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-1").value )
				reason_in = reason_in + ' ' + document.getElementById("6-1").innerText
			}
			
			if (state.points_62 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-2").value )
				reason_in = reason_in + ' ' + document.getElementById("6-2").innerText
			}
			
			if (state.points_63 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-3").value )
				reason_in = reason_in + ' ' + document.getElementById("6-3").innerText
			}
			
			if (state.points_64 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-4").value )
				reason_in = reason_in + ' ' + document.getElementById("6-4").innerText
			}
			
			if (state.points_71 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("7-1").value )
				reason_in = reason_in + ' ' + document.getElementById("7-1").innerText
			}
			
			if (state.points_72 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("7-2").value )
				reason_in = reason_in + ' ' + document.getElementById("7-2").innerText
			}
			
			if (state.points_81 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-1").value )
				reason_in = reason_in + ' ' + document.getElementById("8-1").innerText
			}
			
			if (state.points_82 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-2").value )
				reason_in = reason_in + ' ' + document.getElementById("8-2").innerText
			}
			
			if (state.points_83 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-3").value )
				reason_in = reason_in + ' ' + document.getElementById("8-3").innerText
			}
			
			if (state.points_91 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("9-1").value )
				reason_in = reason_in + ' ' + document.getElementById("9-1").innerText
			}
			
			if (state.points_92 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("9-2").value )
				reason_in = reason_in + ' ' + document.getElementById("9-2").innerText
			}
			
			if (state.points_101 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("10-1").value )
				reason_in = reason_in + ' ' + document.getElementById("10-1").innerText
			}
			
			if (state.points_111 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("11-1").value )
				reason_in = reason_in + ' ' + document.getElementById("11-1").innerText
			}
			
			if (state.points_121 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("12-1").value )
				reason_in = reason_in + ' ' + document.getElementById("12-1").innerText
			}
			
			if (state.points_122 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("12-2").value )
				reason_in = reason_in + ' ' + document.getElementById("12-2").innerText
			}
			
			console.log("__reason : ", __reason);
			//firebase에 데이터 올리는 부분
			const doc_user = db.collection("user").doc(s_name);	
			doc_user.get().then((doc) => {
				if(doc.exists){
					console.log("데이터 존재1 : ", doc.data());
					console.log("데이터 존재2 : ", doc.data().group);
					console.log("데이터 존재3 : ", s_group);
					if(parseInt(doc.data().group) === parseInt(s_group)) {
						console.log("존재하는 계정입니다!");
						var before_points = parseInt(doc.data().n_points)
						var after_points = parseInt(doc.data().n_points) - parseInt(s_points)
						var belong = ''
						var rank = ''
						const s_class = doc.data().class; //상점을 받는 병사가 분대장인지, 그냥 병사인지 구분을 위해서!
						if (__group === '0') {
							belong="직할중대";
						} else if (__group === '1') {
							belong="1대대";
						} else if (__group === '2') {
							belong="2대대";
						} else if (__group === '3') {
							belong="3대대";
						}
						
						if (__class === '0') {
							rank="간부"
						} else if (__class === '1') {
							rank="분대장"
						} else if (__class === '2') {
							rank="병사"
						}
						
						//상점 데이터에 업데이트하는 부분
						var text = '[벌점] ' + s_date + ' -' + s_points + '점 / ' + reason_in + ' / ' +  belong + ' ' + rank + ' '+  __name + ' '
						doc_user.update({
							n_points: after_points
						})
						.catch((error) => {
							console.log("error 1 !!! : ", error);
						});
						set_submitError('벌점 제출에 성공했습니다!');
						
						//recents 데이터에 update하는 부분
						const temp = doc.data().recents
						temp.push(text)
						doc_user.update({
							recents: temp
						})
						
						//이제 간부 페이지에서 로드하는 부분 s_name : 병사 이름, __name : 간부 / 분대장 이름
						// _ganbu 변수들은 간부가 볼 홈페이지에서 사용될 변수들.. -> 즉 병사의 정보임!
						const doc_user_ganbu = db.collection("user").doc(__name);	
						doc_user_ganbu.get().then((doc) => {
							const temp_ganbu = doc.data().recents
							var belong_ganbu = ''
							var rank_ganbu = ''
							if (__group === '0') {
								belong_ganbu="직할중대";
							} else if (__group === '1') {
								belong_ganbu="1대대";
							} else if (__group === '2') {
								belong_ganbu="2대대";
							} else if (__group === '3') {
								belong_ganbu="3대대";
							}
							
							if (s_class === '0') { //혹시나 하여 간부의 경우까지 고려하였다.
								rank_ganbu="간부"
							} else if (s_class === '1') {
								rank_ganbu="분대장"
							} else if (s_class === '2') {
								rank_ganbu="병사"
							}
							
							var text_ganbu =  '[벌점 부여] ' + s_date + ' -' + s_points + '점 / ' + reason_in + ' / ' + belong_ganbu + ' ' + rank_ganbu + ' ' + s_name + ' '; 
							temp_ganbu.push(text_ganbu);
							doc_user_ganbu.update({
								recents: temp_ganbu
							})
							
							console.log("간부 페이지에도 제출 성공!!");
						})
												  
						clearinputs();		
					} else {
						set_submitError('해당 소속에는 사용자가 없습니다!');
					}
				} else {
					set_submitError('존재하지 않는 사용자입니다!');
					clearinputs();
				}
			})
		}
		
	
	};
	
	useEffect(() => {
		console.log("I'm start...");
		return () => {
		  console.log("I'm dying...");
		};
	}, [__class, __group, __name, __reason]); //흠.. 신기하네..
	
	
	
	
	return (
		<div className="Give_n_points">
			<div className="header">
				<h1>Points App</h1>
			</div>
			<AppShell 
				_class={__class}
				group={__group}
				name={__name}
			/>
			<div className="background">
				<div className="Container">
					<div className="box">
						<h1> 1. 벌점을 줄 대상을 적어주세요!  </h1>	
						
						<div className="flex_container">
							<h2> 이름 : </h2>
							<input id="s_name" placeholder="이름을 입력해주세요..." type="text"/>		
						</div>
						<div className="flex_container">
							<h2> 소속 : </h2>
							<input id="s_group" placeholder="소속을 입력해주세요..." type="text"/>		
						</div>
						<p className="small">* 여단본부는 0, 1대대는 1, 2대대는 2, 3대대는 3을</p>
						<p className="small">입력해주세요</p>
						<div className="flex_container">
							<h2> 날짜 : </h2>
							<input id="s_date" placeholder="ex) 2021.10.25" type="text"/>		
						</div>
						<p className="small">* 2021.10.25 와 같은 형식으로 입력해주세요 </p>
					</div>
					
					
					<div className="box2">
						<h1> 2. 벌점 사유를 골라주세요!  </h1>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 1. 제식 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_11} color="primary" onChange={handleChange} name="points_11" />}
									    />
										<div className="points_text">
											<p id="1-1"> 제식 불량 (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 2. 복장 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_21} color="primary" onChange={handleChange} name="points_21" />}
									    />
										<div className="points_text">
											<p id="2-1"> 허가되지 않은 사복 착용 - px판매용품 제외, 전투복 내부에 T셔츠착용 포함 (-3) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_22} color="primary" onChange={handleChange} name="points_22" />}
									    />
										<div className="points_text">
											<p id="2-2"> 인식표 미착용 / 전투화 손질 불량 (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 3. 용모 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_31} color="primary" onChange={handleChange} name="points_31" />}
									    />
										<div className="points_text">
											<p id="3-1"> 두발규정 미준수 (-5) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_32} color="primary" onChange={handleChange} name="points_32" />}
									    />
										<div className="points_text">
											<p id="3-2"> 개인 위생관리 불량 : 면도, 손톱손질, 빨래방치 등 (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
								
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 4. 내무생활 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_41} color="primary" onChange={handleChange} name="points_41" />}
									    />
										<div className="points_text">
											<p id="4-1"> 관물대/침대(개인), 기타 생활관(단체) 정리 불량 (-2) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>	
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_42} color="primary" onChange={handleChange} name="points_42" />}
									    />
										<div className="points_text">
											<p id="4-2"> 병영생활임무분담제 행동화 미흡 : 담당구역 청소 등 (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_43} color="primary" onChange={handleChange} name="points_43" />}
									    />
										<div className="points_text">
											<p id="4-3"> 취침군기 문란 : 타 용사 침대 사용, TV 시청 (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_44} color="primary" onChange={handleChange} name="points_44" />}
									    />
										<div className="points_text">
											<p id="4-4">생활관 내 화재예방활동 미준수 - 생활관 단체 (-1) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 5. 화기/장구류 관리 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_51} color="primary" onChange={handleChange} name="points_51" />}
									    />
										<div className="points_text">
											<p id="5-1"> 개인화기 손질 불량 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_52} color="primary" onChange={handleChange} name="points_52" />}
									    />
										<div className="points_text">
											<p id="5-2"> 현황판 미 수정 (-3) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_53} color="primary" onChange={handleChange} name="points_53" />}
									    />
										<div className="points_text">
											<p id="5-3"> 개인화기 무단 방치 (-10) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_54} color="primary" onChange={handleChange} name="points_54" />}
									    />
										<div className="points_text">
											<p id="5-4"> 장구류 및 보급품 관리 불량 (-3) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 6. 분대건제 활동 / 분대장 임무 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_61} color="primary" onChange={handleChange} name="points_61" />}
									    />
										<div className="points_text">
											<p id="6-1"> 생활관 이탈 시 행선지 미보고 (-3) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_62} color="primary" onChange={handleChange} name="points_62" />}
									    />
										<div className="points_text">
											<p id="6-2"> 분대건제 활동 시 임의 이탈 : 식사이동, 교육훈련 등 (-10) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_63} color="primary" onChange={handleChange} name="points_63" />}
									    />
										<div className="points_text">
											<p id="6-3"> 분대장수첩 작성 미흡 (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_64} color="primary" onChange={handleChange} name="points_64" />}
									    />
										<div className="points_text">
											<p id="6-4"> 분대장의 지시 불이행 (-10점 이내) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 7. 시설물 / 담당구역 관리 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_71} color="primary" onChange={handleChange} name="points_71" />}
									    />
										<div className="points_text">
											<p id="7-1"> 각종 편의시설 사용 후 정리 미흡 : 쓰레기 방치 등 (-3) </p>
										</div>
									</div>
								</FormGroup>
							<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_72} color="primary" onChange={handleChange} name="points_72" />}
									    />
										<div className="points_text">
											<p id="7-2"> 흡연장소 미준수, 담배꽁초 및 쓰레기 무단 투기 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 8. 일과표(통제시간) 준수 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_81} color="primary" onChange={handleChange} name="points_81" />}
									    />
										<div className="points_text">
											<p id="8-1"> 편의시설 사용시간 미준수 : 노래방, 사지방 등 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_82} color="primary" onChange={handleChange} name="points_82" />}
									    />
										<div className="points_text">
											<p id="8-2"> 집합시간 미준수 : 사전 지시 / 전파된 시간 미준수 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_83} color="primary" onChange={handleChange} name="points_83" />}
									    />
										<div className="points_text">
											<p id="8-3"> 야간 공부연등 신청 후 신청내용과 다른 행위 식별 시 (-30) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 9. 경계/ 당직근무 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_91} color="primary" onChange={handleChange} name="points_91" />}
									    />
										<div className="points_text">
											<p id="9-1"> 근무교대 시간 미준수 : 조기 철수 등 (-10) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_92} color="primary" onChange={handleChange} name="points_92" />}
									    />
										<div className="points_text">
											<p id="9-2"> 경계작전명령서 미확인 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 10. 교육훈련 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_101} color="primary" onChange={handleChange} name="points_101" />}
									    />
										<div className="points_text">
											<p id="10-1"> 교육태도 불량 : 졸음, 소극적 태도, 잡담 등 (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 11. 병영식당 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_111} color="primary" onChange={handleChange} name="points_111" />}
									    />
										<div className="points_text">
											<p id="11-1"> 결식 (타당한 사유라 하더라고 사전 미보고시 포함) (-10) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 12. 고의적 지시 불이행 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_121} color="primary" onChange={handleChange} name="points_121" />}
									    />
										<div className="points_text">
											<p id="12-1"> 아침, 저녁점호 무단 열외 (-30) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_122} color="primary" onChange={handleChange} name="points_122" />}
									    />
										<div className="points_text">
											<p id="12-2"> 벌점 수령 후 고의적으로 보고 미실시, 3일이상 지연보고 (-30) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						
					</div>
					
					
					<div className="box3">
						<h1> 3. 최종 벌점을 적어주세요!  </h1>
						<div className="flex_container">
							<h2> 벌점 : </h2>
							<input id="s_points" placeholder="벌점을 입력해주세요..." type="text"/>
						</div>
						<p className="small">* (-)를 붙이지 않고 그냥 숫자만 입력해주세요!</p>
						<div className="footer">
							<p className="errorMsg">{submitError}</p>
						</div>		
						
					</div>
					
					
					<div className="flex_container">
						<div className="footer_1">
							<Link component={RouterLink} to="/Soldier">
								<Button variant="contained" color="primary" disableElevation>
								   <p>홈으로 가기</p>
								</Button>						
							</Link>		
						</div>
						
						<div className="footer_2">			
							<Button variant="contained" color="primary" onClick={handleSignup} disableElevation>
							   <p>제출하기</p>
							</Button>							
						</div>
					</div>
					
				</div>
			</div>
			
			
			
			

		</div>
	);
	
}

export default Give_n_points;