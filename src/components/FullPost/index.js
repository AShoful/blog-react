import React from 'react';

import classes from './FullPost.module.css';

const FullPost = ({ text, createdAt }) => (
  
	<div className={classes.FullPost}>
	   <div className={classes.details}>
	       <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>
	    </div>
	    <p className={classes.text}>{text}</p>
	</div>
  
);

FullPost.defaultProps = {
	text: 'Гаагский суд опубликовал позиции Украины и России относительно юрисдикции суда по делу о правах прибрежного государства в Черном и Азовском морях и в Керченском проливе.\nОб этом сообщает пресс-служба Министерства внутренних дел Украины, передает Цензор.НЕТ.\n\nКак сообщается, 22 мая 2018 года РФ подала свои возражения относительно наличия у суда юрисдикции рассматривать дело, инициированное Украиной по Конвенции ООН по морскому праву. После этого Украина подала свои письменные объяснения и требования. Источник: https://censor.net.ua/n3131510',
	createdAt: Date.now()
	
};

export default FullPost;
