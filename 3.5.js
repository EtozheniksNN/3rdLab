Now = new Date();
const mpo = Now.getMonth();
const mpo1 = mpo + 1;
document.write("<font color='green'>Today " + Now.getDate() + "/" + mpo1 + "/" + Now.getFullYear() + ". Why are you here : " + Now.getHours() + ":" + Now.getMinutes() + ":"+ Now.getSeconds() + " seconds");
