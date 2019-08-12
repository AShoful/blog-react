import React from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import classes from './PostsList.module.css'

const items = [
	{
      "_id": "5d4aaa6738d11608d028c708",
      "title": "edit",
      "text": "text posta",
      "imageUrl": "",
      "owner": {
        "_id": "5cc01af7782c1523e032ef2b",
        "login": "shofulyahoocom",
        "password": "$2a$10$QxC9z3qrS5Jqf/SHJ7RNPe87SwRZTOnJZkim8Q3rczM3mXHRP2Pqq",
        "firstName": "Андрей",
        "lastName": "Шофул",
        "createdAt": "2019-04-24T08:14:47.306Z",
        "updatedAt": "2019-04-24T08:14:47.306Z",
        "__v": 0
      },
      "createdAt": "2019-08-07T10:39:35.378Z",
      "updatedAt": "2019-08-07T10:39:35.378Z",
      "__v": 0
    },
    {
      "_id": "5d42ee098d023020a8ba3e14",
      "title": "paginatio",
      "text": "pagination",
      "imageUrl": "",
      "owner": {
        "_id": "5cc01af7782c1523e032ef2b",
        "login": "shofulyahoocom",
        "password": "$2a$10$QxC9z3qrS5Jqf/SHJ7RNPe87SwRZTOnJZkim8Q3rczM3mXHRP2Pqq",
        "firstName": "Андрей",
        "lastName": "Шофул",
        "createdAt": "2019-04-24T08:14:47.306Z",
        "updatedAt": "2019-04-24T08:14:47.306Z",
        "__v": 0
      },
      "createdAt": "2019-08-01T13:50:01.280Z",
      "updatedAt": "2019-08-01T13:50:01.280Z",
      "__v": 0
    },
    {
      "_id": "5cfe9a726cc62637fc27c279",
      "title": "Гаагский суд опубликовал позиции Украины и России по делу о нарушении морского права",
      "text": "Гаагский суд опубликовал позиции Украины и России относительно юрисдикции суда по делу о правах прибрежного государства в Черном и Азовском морях и в Керченском проливе.\nОб этом сообщает пресс-служба Министерства внутренних дел Украины, передает Цензор.НЕТ.\n\nКак сообщается, 22 мая 2018 года РФ подала свои возражения относительно наличия у суда юрисдикции рассматривать дело, инициированное Украиной по Конвенции ООН по морскому праву. После этого Украина подала свои письменные объяснения и требования. Источник: https://censor.net.ua/n3131510",
      "imageUrl": "https://storage1a.censor.net/images/d/d/9/8/dd986df9cbc34c8a0647cfe4745d3577/censor_news_big3.jpg",
      "owner": {
        "_id": "5cfe99956cc62637fc27c277",
        "login": "qwert",
        "password": "$2a$10$9Dxn/Rp6zG1TGQDKnizRTueiJsx0jIJ1GlzHU7A4.q45XX/dzqPq6",
        "firstName": "Наташа",
        "lastName": "Наташа",
        "createdAt": "2019-06-10T17:55:34.187Z",
        "updatedAt": "2019-06-10T17:55:34.187Z",
        "__v": 0
      },
      "createdAt": "2019-06-10T17:59:14.006Z",
      "updatedAt": "2019-06-10T17:59:14.006Z",
      "__v": 0
    },
    {
      "_id": "5cfe9a0a6cc62637fc27c278",
      "title": "Гриценко и Саакашвили идут на выборы отдельно",
      "text": "Партия \"Гражданская позиция\" и \"Рух новых сил\" не смогли договориться о совместном походе на выборы в Раду.\nКак заявил лидер Гражданской позиции Анатолий Гриценко, политсилы будут участвовать в выборах отдельно, сообщает Цензор.НЕТ со ссылкой на Интерфакс-Украина.\n\nГриценко отметил, что его партия и политическая сила Саакашвили договорились, что на выборах не будут \"нападать друг на друга\", потому что имеют общие ценности.\n\n\"Мы договорились, что в новоизбранном парламенте готовы сотрудничать\", - указал он. Источник: https://censor.net.ua/n3131536",
      "imageUrl": "https://storage1a.censor.net/images/b/0/9/b/b09b0c0eccae3938c5c5d368deac5e8d/censor_news_big3.jpg",
      "owner": {
        "_id": "5cfe99956cc62637fc27c277",
        "login": "qwert",
        "password": "$2a$10$9Dxn/Rp6zG1TGQDKnizRTueiJsx0jIJ1GlzHU7A4.q45XX/dzqPq6",
        "firstName": "Наташа",
        "lastName": "Наташа",
        "createdAt": "2019-06-10T17:55:34.187Z",
        "updatedAt": "2019-06-10T17:55:34.187Z",
        "__v": 0
      },
      "createdAt": "2019-06-10T17:57:30.931Z",
      "updatedAt": "2019-06-10T17:57:30.931Z",
      "__v": 0
    },
    {
      "_id": "5cfe57b230c7fa05b091f356",
      "title": "окаев победил на выборах президента Казахстана",
      "text": "Исполняющий обязанности президента Казахстана Касым-Жомарт Токаев набрал 70,76% голосов на прошедших 9 июня президентских выборах.\nКак  сообщает Цензор.НЕТ со ссылкой на \"Новую газету\", об этом объявил глава Центризбиркома Казахстана Константин Петров.\n\nЯвка на выборах составила 77,4%, самая высокая была в Алматинской области – 89%, а самая низкая – в Алма-Аты (52,2%).\n\nСогласно предварительным итогам, за Токаева проголосовали 6,5 млн миллионов человек. У выдвинутого движением \"Улт тагдыры\" и позиционировавшего себя кандидатом от оппозиции Амиржана Косанова – 16,2%. Источник: https://censor.net.ua/n3131508",
      "imageUrl": "https://storage1a.censor.net/images/a/1/6/3/a163c6218db5f86f4de7f59f49c1e40d/censor_news_big3.jpg",
      "owner": {
        "_id": "5cc01af7782c1523e032ef2b",
        "login": "shofulyahoocom",
        "password": "$2a$10$QxC9z3qrS5Jqf/SHJ7RNPe87SwRZTOnJZkim8Q3rczM3mXHRP2Pqq",
        "firstName": "Андрей",
        "lastName": "Шофул",
        "createdAt": "2019-04-24T08:14:47.306Z",
        "updatedAt": "2019-04-24T08:14:47.306Z",
        "__v": 0
      },
      "createdAt": "2019-06-10T13:14:26.834Z",
      "updatedAt": "2019-06-10T18:02:40.653Z",
      "__v": 0
    }
]

const  PostsList = () => 
	<div className = {classes.PostsList}>
		{!items ? 
      <Loader />: 
      items.map( item => (	
        <PostItem key = {item._id} 		
        {...item}
				 />	))
   } 
	</div>


export default PostsList;