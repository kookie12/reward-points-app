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
		console.log("?????? : ", s_name, s_date, s_group, s_points);
		console.log("INT : ", parseInt(s_points));
		console.log("INT : ", isNaN(parseInt(s_points))); //????????? FALSE, 
		
		if (s_name === "") {
			set_submitError('????????? ???????????????!');
		} else { 
			flag1 = true; 
		}
		
		if (s_group === "") {
			set_submitError('????????? ???????????????!');
		} else {
			flag2 = true;
		}
		
		if (s_date === "") {
			set_submitError('????????? ???????????????!');
		} else {
			flag3 = true;
		}
		
		if (s_points === "") {
			set_submitError('????????? ???????????????!');
		}
		
		if (isNaN(parseInt(s_points)) === true) {
			set_submitError('????????? ????????? ???????????????!');
			document.getElementById("s_points").value ='';
		} else {
			flag4 = true;
		}
		
		if (flag1 === true && flag2 === true && flag3 === true && flag4 === true) {
			//?????? ?????? ???????????? ??????
			var reason_in = '';
			if (state.points_11 === true) {
				//console.log("?????? ?????????!!");
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
			//firebase??? ????????? ????????? ??????
			const doc_user = db.collection("user").doc(s_name);	
			doc_user.get().then((doc) => {
				if(doc.exists){
					console.log("????????? ??????1 : ", doc.data());
					console.log("????????? ??????2 : ", doc.data().group);
					console.log("????????? ??????3 : ", s_group);
					if(parseInt(doc.data().group) === parseInt(s_group)) {
						console.log("???????????? ???????????????!");
						var before_points = parseInt(doc.data().n_points)
						var after_points = parseInt(doc.data().n_points) - parseInt(s_points)
						var belong = ''
						var rank = ''
						const s_class = doc.data().class; //????????? ?????? ????????? ???????????????, ?????? ???????????? ????????? ?????????!
						if (__group === '0') {
							belong="????????????";
						} else if (__group === '1') {
							belong="1??????";
						} else if (__group === '2') {
							belong="2??????";
						} else if (__group === '3') {
							belong="3??????";
						}
						
						if (__class === '0') {
							rank="??????"
						} else if (__class === '1') {
							rank="?????????"
						} else if (__class === '2') {
							rank="??????"
						}
						
						//?????? ???????????? ?????????????????? ??????
						var text = '[??????] ' + s_date + ' -' + s_points + '??? / ' + reason_in + ' / ' +  belong + ' ' + rank + ' '+  __name + ' '
						doc_user.update({
							n_points: after_points
						})
						.catch((error) => {
							console.log("error 1 !!! : ", error);
						});
						set_submitError('?????? ????????? ??????????????????!');
						
						//recents ???????????? update?????? ??????
						const temp = doc.data().recents
						temp.push(text)
						doc_user.update({
							recents: temp
						})
						
						//?????? ?????? ??????????????? ???????????? ?????? s_name : ?????? ??????, __name : ?????? / ????????? ??????
						// _ganbu ???????????? ????????? ??? ?????????????????? ????????? ?????????.. -> ??? ????????? ?????????!
						const doc_user_ganbu = db.collection("user").doc(__name);	
						doc_user_ganbu.get().then((doc) => {
							const temp_ganbu = doc.data().recents
							var belong_ganbu = ''
							var rank_ganbu = ''
							if (__group === '0') {
								belong_ganbu="????????????";
							} else if (__group === '1') {
								belong_ganbu="1??????";
							} else if (__group === '2') {
								belong_ganbu="2??????";
							} else if (__group === '3') {
								belong_ganbu="3??????";
							}
							
							if (s_class === '0') { //????????? ?????? ????????? ???????????? ???????????????.
								rank_ganbu="??????"
							} else if (s_class === '1') {
								rank_ganbu="?????????"
							} else if (s_class === '2') {
								rank_ganbu="??????"
							}
							
							var text_ganbu =  '[?????? ??????] ' + s_date + ' -' + s_points + '??? / ' + reason_in + ' / ' + belong_ganbu + ' ' + rank_ganbu + ' ' + s_name + ' '; 
							temp_ganbu.push(text_ganbu);
							doc_user_ganbu.update({
								recents: temp_ganbu
							})
							
							console.log("?????? ??????????????? ?????? ??????!!");
						})
												  
						clearinputs();		
					} else {
						set_submitError('?????? ???????????? ???????????? ????????????!');
					}
				} else {
					set_submitError('???????????? ?????? ??????????????????!');
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
	}, [__class, __group, __name, __reason]); //???.. ????????????..
	
	
	
	
	return (
		<div className="Give_n_points">
			<div className="header">
				<RouterLink to="/Soldier">
					<h1 className="head">Points App</h1>
				</RouterLink>
			</div>
			<AppShell 
				_class={__class}
				group={__group}
				name={__name}
			/>
			<div className="background">
				<div className="Container">
					<div className="box">
						<h1> 1. ????????? ??? ????????? ???????????????!  </h1>	
						
						<div className="flex_container">
							<h2> ?????? : </h2>
							<input id="s_name" placeholder="????????? ??????????????????..." type="text"/>		
						</div>
						<div className="flex_container">
							<h2> ?????? : </h2>
							<input id="s_group" placeholder="????????? ??????????????????..." type="text"/>		
						</div>
						<p className="small">* ??????????????? 0, 1????????? 1, 2????????? 2, 3????????? 3???</p>
						<p className="small">??????????????????</p>
						<div className="flex_container">
							<h2> ?????? : </h2>
							<input id="s_date" placeholder="ex) 2021.10.25" type="text"/>		
						</div>
						<p className="small">* 2021.10.25 ??? ?????? ???????????? ?????????????????? </p>
					</div>
					
					
					<div className="box2">
						<h1> 2. ?????? ????????? ???????????????!  </h1>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 1. ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_11} color="primary" onChange={handleChange} name="points_11" />}
									    />
										<div className="points_text">
											<p id="1-1"> ?????? ?????? (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 2. ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_21} color="primary" onChange={handleChange} name="points_21" />}
									    />
										<div className="points_text">
											<p id="2-1"> ???????????? ?????? ?????? ?????? - px???????????? ??????, ????????? ????????? T???????????? ?????? (-3) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_22} color="primary" onChange={handleChange} name="points_22" />}
									    />
										<div className="points_text">
											<p id="2-2"> ????????? ????????? / ????????? ?????? ?????? (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 3. ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_31} color="primary" onChange={handleChange} name="points_31" />}
									    />
										<div className="points_text">
											<p id="3-1"> ???????????? ????????? (-5) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_32} color="primary" onChange={handleChange} name="points_32" />}
									    />
										<div className="points_text">
											<p id="3-2"> ?????? ???????????? ?????? : ??????, ????????????, ???????????? ??? (-2) </p>
										</div>
									</div>
								  
								</FormGroup>
								
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 4. ???????????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_41} color="primary" onChange={handleChange} name="points_41" />}
									    />
										<div className="points_text">
											<p id="4-1"> ?????????/??????(??????), ?????? ?????????(??????) ?????? ?????? (-2) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>	
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_42} color="primary" onChange={handleChange} name="points_42" />}
									    />
										<div className="points_text">
											<p id="4-2"> ??????????????????????????? ????????? ?????? : ???????????? ?????? ??? (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_43} color="primary" onChange={handleChange} name="points_43" />}
									    />
										<div className="points_text">
											<p id="4-3"> ???????????? ?????? : ??? ?????? ?????? ??????, TV ?????? (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_44} color="primary" onChange={handleChange} name="points_44" />}
									    />
										<div className="points_text">
											<p id="4-4">????????? ??? ?????????????????? ????????? - ????????? ?????? (-1) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 5. ??????/????????? ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_51} color="primary" onChange={handleChange} name="points_51" />}
									    />
										<div className="points_text">
											<p id="5-1"> ???????????? ?????? ?????? (-5) </p>
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
											<p id="5-2"> ????????? ??? ?????? (-3) </p>
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
											<p id="5-3"> ???????????? ?????? ?????? (-10) </p>
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
											<p id="5-4"> ????????? ??? ????????? ?????? ?????? (-3) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 6. ???????????? ?????? / ????????? ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_61} color="primary" onChange={handleChange} name="points_61" />}
									    />
										<div className="points_text">
											<p id="6-1"> ????????? ?????? ??? ????????? ????????? (-3) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_62} color="primary" onChange={handleChange} name="points_62" />}
									    />
										<div className="points_text">
											<p id="6-2"> ???????????? ?????? ??? ?????? ?????? : ????????????, ???????????? ??? (-10) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_63} color="primary" onChange={handleChange} name="points_63" />}
									    />
										<div className="points_text">
											<p id="6-3"> ??????????????? ?????? ?????? (-5) </p>
										</div>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_64} color="primary" onChange={handleChange} name="points_64" />}
									    />
										<div className="points_text">
											<p id="6-4"> ???????????? ?????? ????????? (-10??? ??????) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 7. ????????? / ???????????? ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_71} color="primary" onChange={handleChange} name="points_71" />}
									    />
										<div className="points_text">
											<p id="7-1"> ?????? ???????????? ?????? ??? ?????? ?????? : ????????? ?????? ??? (-3) </p>
										</div>
									</div>
								</FormGroup>
							<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_72} color="primary" onChange={handleChange} name="points_72" />}
									    />
										<div className="points_text">
											<p id="7-2"> ???????????? ?????????, ???????????? ??? ????????? ?????? ?????? (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 8. ?????????(????????????) ?????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_81} color="primary" onChange={handleChange} name="points_81" />}
									    />
										<div className="points_text">
											<p id="8-1"> ???????????? ???????????? ????????? : ?????????, ????????? ??? (-5) </p>
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
											<p id="8-2"> ???????????? ????????? : ?????? ?????? / ????????? ?????? ????????? (-5) </p>
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
											<p id="8-3"> ?????? ???????????? ?????? ??? ??????????????? ?????? ?????? ?????? ??? (-30) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 9. ??????/ ???????????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_91} color="primary" onChange={handleChange} name="points_91" />}
									    />
										<div className="points_text">
											<p id="9-1"> ???????????? ?????? ????????? : ?????? ?????? ??? (-10) </p>
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
											<p id="9-2"> ????????????????????? ????????? (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 10. ???????????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_101} color="primary" onChange={handleChange} name="points_101" />}
									    />
										<div className="points_text">
											<p id="10-1"> ???????????? ?????? : ??????, ????????? ??????, ?????? ??? (-5) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 11. ???????????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_111} color="primary" onChange={handleChange} name="points_111" />}
									    />
										<div className="points_text">
											<p id="11-1"> ?????? (????????? ????????? ???????????? ?????? ???????????? ??????) (-10) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 12. ????????? ?????? ????????? </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_121} color="primary" onChange={handleChange} name="points_121" />}
									    />
										<div className="points_text">
											<p id="12-1"> ??????, ???????????? ?????? ?????? (-30) </p>
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
											<p id="12-2"> ?????? ?????? ??? ??????????????? ?????? ?????????, 3????????? ???????????? (-30) </p>
										</div>
									</div>
								</FormGroup>
					    </FormControl>
						
					</div>
					
					
					<div className="box3">
						<h1> 3. ?????? ????????? ???????????????!  </h1>
						<div className="flex_container">
							<h2> ?????? : </h2>
							<input id="s_points" placeholder="????????? ??????????????????..." type="text"/>
						</div>
						<p className="small">* (-)??? ????????? ?????? ?????? ????????? ??????????????????!</p>
						<div className="footer">
							<p className="errorMsg">{submitError}</p>
						</div>		
						
					</div>
					
					
					<div className="flex_container">
						<div className="footer_1">
							<Link component={RouterLink} to="/Soldier">
								<Button variant="contained" color="primary" disableElevation>
								   <p>????????? ??????</p>
								</Button>						
							</Link>		
						</div>
						
						<div className="footer_2">			
							<Button variant="contained" color="primary" onClick={handleSignup} disableElevation>
							   <p>????????????</p>
							</Button>							
						</div>
					</div>
					
				</div>
			</div>
			
			
			
			

		</div>
	);
	
}

export default Give_n_points;