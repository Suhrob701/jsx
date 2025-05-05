import React from 'react';

const App = () => {
  const username = prompt("Ismingizni yozing");
  const vaqt = new Date();
  const soat = vaqt.getHours();
  const sana = vaqt.toLocaleDateString();
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  let text = "";

  if (soat >= 6 && soat < 18) {
    document.body.style.backgroundColor = "white";  
    document.body.style.color = "black";  
    text = "Light";  
  } else {
    document.body.style.backgroundColor = "black";  
    document.body.style.color = "white";  
    text = "Dark";  
  }

  return (
    <div className='text-center mt-[250px]'>
      <h1 className='text-3xl font-bold'>Salom, <span className='text-yellow-500'>{username}</span>!</h1>
      <p className='text-xl mt-2'>Bugungi sana, <span className='text-yellow-500'>{sana}</span></p>
      <p className='text-xl mt-2'>Random raqam, <span className='text-yellow-500'>{randomNumber}</span></p>
      <p className='text-xl mt-2'>Rejim, <span className='text-yellow-500'>{text}</span></p>
    </div>
  );
};

export default App;
