import React, {useState, useEffect} from 'react';
import AppShell from './AppShell';
import Soldier from './Soldier';
import Card from '@material-ui/core/Card'; //card 형태의 디자인!!
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; //문장을 출력할 때 이걸로 감싸서 출력함
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './Menu.css'
import { BsChatSquareDots } from 'react-icons/bs';
import { FiMusic } from 'react-icons/fi';
import { GoAlert } from "react-icons/go";
import fire from './config/fire';
import { HiOutlineInformationCircle } from "react-icons/hi";

function Menu (props) {
	const [__class, set__class] = useState(() => JSON.parse(window.localStorage.getItem("__class")) || '');
	const [__group, set__group] = useState(() => JSON.parse(window.localStorage.getItem("__group")) || '');
	const [__name, set__name] = useState(() => JSON.parse(window.localStorage.getItem("__name")) || '');
	const [__points, set__points] = useState(() => JSON.parse(window.localStorage.getItem("__points")) || '');
	const [__npoints, set__npoints] = useState(() => JSON.parse(window.localStorage.getItem("__npoints")) || '');
	const [__recents, set__recents] = useState(() => JSON.parse(window.localStorage.getItem("__recents")) || []);
	const [storage_flag, set__storage_flag] = useState(() => JSON.parse(window.localStorage.getItem("storage_flag")) || false);
	const [__recent_log, set__recent_log] = useState([]);
	
	const db = fire.firestore();
	//const doc_notice = db.collection("notice");
	
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
			<div className="menu">	
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title">[아침] 가쓰오부시 어묵탕</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description"> 쇠고기팽이버섯떡볶움, 순두부, 밥, 열무김치, 주스</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/09 월</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title">[점심] 시래기품은 감자탕</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">파송송계란찜, 게맛살냉채, 흑미밥, 깍두기, 우유</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/09 월</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title">[저녁] 장어강정 & 데리야끼소스</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">마파두부, 감자케찹조림, 밥, 깍두기</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/09 월</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title">[아침] 돼지고기김치볶음</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description"> 쇠고기배추된장국, 콩나물매운무침, 밥, 열무김치, 우유</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/10 화</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title2">[점심] 삼계탕</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">야채스틱 & 저염쌈장, 잡곡밥, 배추김치 or 볶음김치, 수박</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/10 화</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				<div class="tasks">
					<div class="task" data-index="0">
					  <div class="task-header">
						<div class="left-side">
						  <ion-icon name="restaurant-outline"></ion-icon>
						  <span class="task-title">[저녁] 달걀케첩볶음밥</span>
						</div>
						
					  </div>
					  <div class="task-body"><span class="task-description">생선커틀렛 & 타르타르소스, 야채무침(쫄면), 팽이버섯국, 깍두기, 우유</span></div>
					  <div class="task-footer"><span class="task-status">Task completed</span><span class="task-timestamp">2021/08/10 화</span></div>
					</div> 
				</div>
				{/*------------------------------------------------*/}
				
			</div>		
		</div>
	
	
	
	);
}

export default Menu;