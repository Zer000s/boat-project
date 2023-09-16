// import React from "react";
// import InputMask from 'react-input-mask';

// export default function PhoneBox() {
//     const[name,setName] = React.useState("");
//     const[phone,setPhone] = React.useState("");

//     async function sendMessage (){
//         if(name!==""&&phone!=="")
//         {
//             await fetch(`https://api.telegram.org/bot6195321216:AAHf6N6e3629kcH6nckkaIwTnOkHz3rjzsA/sendMessage?chat_id=630586593&parse_mode=html&text=Имя:${name} Телефон:${phone}`);
//             setName("")
//             setPhone("")
//             alert("Мы вам перезвоним!")
//         }
//         else
//         {
//             alert("Вы не внесли данные!")
//         }
//     }

//     return (
//         <div className="header-box-phone">
//             <h1>ОСТАВИТЬ ЗАЯВКУ</h1>
//             <input placeholder="Имя:" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//             <InputMask placeholder="Номер:" mask="+9 999 999 99 99" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
//             <div onClick={()=>{sendMessage()}}>ОТПРАВИТЬ</div>
//         </div>
//     );
// }