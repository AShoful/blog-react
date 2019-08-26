import React from 'react'

export const renderPaginationBtns = (onClick, page, lastPage) => {
 
let res = []

const activeStyle = {
  backgroundColor: 'rgb(233, 239, 234)',
  fontWeight: '700'
}

if( lastPage < 9 ) {
for ( let i = 1; i <= lastPage; i++ ){
  res.push(i)
}} else {
  
  const startBtns = [ 1, 2 , 3]
  const endBtns = [lastPage-2, lastPage - 1, lastPage]
  const middleBtns = ['...']
  const gapBtns = [ page-1, page, page + 1]
  
  if ( page < 4 || page > lastPage - 3 ) {
    res = [...startBtns, ...middleBtns, ...endBtns]
  }   
  if ( page >= 4 && page <= lastPage - 3 ) {
    res = [...[1], ...middleBtns, ...gapBtns, ...middleBtns, ...[lastPage]]
  }
  
}
  return res.map(num => {
    return num === '...' ? num : 
    <button
      key={num}
      onClick={onClick}
      data-name={num}
      style={num === page ? activeStyle : null}
      disabled={num === page}  
    >{num}</button>
  });
};

