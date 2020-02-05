Now = new Date();
const mpo = Now.getMonth();
const mpo1 = mpo + 1;
document.write("<font color='green'>Сегодня " + Now.getDate() + "/" + mpo1 + "/" + Now.getFullYear() + ". Вы нафига сюда приперлись в: " + Now.getHours() + ":" + Now.getMinutes() + ":"+ Now.getSeconds() + " секунд");
