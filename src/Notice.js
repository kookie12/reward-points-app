import React, {useState, useEffect} from 'react';
import AppShell from './AppShell';
import Soldier from './Soldier';
import Card from '@material-ui/core/Card'; //card 형태의 디자인!!
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; //문장을 출력할 때 이걸로 감싸서 출력함
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import image from './user.JPG';
import { Link } from "react-router-dom";
import './Notice.css'
import { BsChatSquareDots } from 'react-icons/bs';
import { FiMusic } from 'react-icons/fi';
import { GoAlert } from "react-icons/go";
import fire from './config/fire';


function Notice (props) {
	
	const [__class, set__class] = useState(() => JSON.parse(window.localStorage.getItem("__class")) || '');
	const [__group, set__group] = useState(() => JSON.parse(window.localStorage.getItem("__group")) || '');
	const [__name, set__name] = useState(() => JSON.parse(window.localStorage.getItem("__name")) || '');
	const [__points, set__points] = useState(() => JSON.parse(window.localStorage.getItem("__points")) || '');
	const [__npoints, set__npoints] = useState(() => JSON.parse(window.localStorage.getItem("__npoints")) || '');
	const [__recents, set__recents] = useState(() => JSON.parse(window.localStorage.getItem("__recents")) || []);
	const [storage_flag, set__storage_flag] = useState(() => JSON.parse(window.localStorage.getItem("storage_flag")) || false);
	const [__recent_log, set__recent_log] = useState([]);
	
	const db = fire.firestore();
	const doc_notice = db.collection("notice");
	
	const fetch_Data = () => {
		
		const db = fire.firestore();
		const doc_notice = db.collection("notice");
		
		
		
		// db.collection("cities").where("capital", "==", true)
		// 	.get()
		// 	.then((querySnapshot) => {
		// 		querySnapshot.forEach((doc) => {
		// 			// doc.data() is never undefined for query doc snapshots
		// 			console.log(doc.id, " => ", doc.data());
		// 		});
		// 	})
		// 	.catch((error) => {
		// 		console.log("Error getting documents: ", error);
		// 	});

		// doc_user.get().then((doc) => {
		// 		console.log("doc: ", doc);
		// 		console.log("doc.exists : ", doc.exists);
		// 		if(doc.exists){
		// 			console.log("데이터 존재 : ", doc.data());
		// 			if(doc.data().pw === password){
		// 				console.log("로그인 되었습니다!");
		// 				setloginError("로그인 되었습니다!");
		// 				setlogin_flag(true);
		// 				setpass(true);
		// 				set_name(name);
		// 				set_password(password);
		// 				set_class(doc.data().class);
		// 				set_group(doc.data().group);
		// 				set_points(doc.data().points);
		// 				set_n_points(doc.data().n_points);		
		// 				set_recents(doc.data().recents);
						
	}
	
	useEffect(() => {
		
	}, []); 
	
	
	return (
		<div>
			<div className="header">
				<Link to="/Soldier">
					<h1 className="head">Points App</h1>
				</Link>
			</div>
			<AppShell 
				_class={__class}
				group={__group}
				name={__name}
			/>
			<div className="notice">	
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <BsChatSquareDots name="flame" data-priority="high" />		 
						  <span class="task-title">[공지] 상벌점 기준</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">해당 어플의 상벌점 기준은 21.07.01부로 적용된 상벌점 기준입니다.</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/07</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <GoAlert data-priority="high" />		 
						  <span class="task-title">[공지] 상벌점 잘못 제출 시</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">상벌점을 잘못 제출 시 왼쪽 메뉴 -> 문의하기에서 말해주세요. 관리자가 해당 기록과 점수를 초기화 해드립니다.</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/07</span></div>
					</div>
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <GoAlert data-priority="high" />		 
						  <span class="task-title2">[업데이트 공지] 실시간 업데이트 가능</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">이제부터 새로고침을 하면 실시간으로 상벌점이 적용됩니다! 버전 v1.0.2</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/07</span></div>
					</div>
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <FiMusic data-priority="high" />		 
						  <span class="task-title">[일반] 전역을 축하합니다</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">통신중대 구관형 병장이 8월 31일 전역입니다. 전역을 진심으로 축하합니다!</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/08</span></div>
					</div>
				</div>
				
					
			
			</div>		
		</div>
	
	
	
	);
}

export default Notice;