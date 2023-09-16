// import React from "react";
// import InputMask from 'react-input-mask';

// export default function PhoneBox() {
//     const[name,setName] = React.useState("");
//     const[phone,setPhone] = React.useState("");

//     async function sendMessage (){
//         if(name!==""&&phone!=="")
//         {
//             await fetch("");
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
