const imageTime = document.getElementById("imageTime");
const main = document.getElementsByTagName("main")[0];
const hours = document.getElementById("hours");

const date = new Date();
const timeOfDay = date.getHours();
hours.innerText = `Agora são ${timeOfDay} horas`;

if (timeOfDay > 6 && imageTime < 12) {
  main.style.backgroundColor = "grey";
  imageTime.src =
    "https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/09/bom-dia1.jpg?resize=1024%2C768&ssl=1";
} else if (timeOfDay > 12 && timeOfDay < 18) {
  main.style.backgroundColor = "brown";
  imageTime.src =
    "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
} else {
  main.style.backgroundColor = "blue";
  imageTime.src =
    "https://img.freepik.com/fotos-gratis/ilha-no-mar-contra-um-ceu-enluarado_1048-14252.jpg?w=740&t=st=1690222660~exp=1690223260~hmac=b5252139b4919f8c5f31f746ea71f4ea80c0a6edb598df7e6ce2051005044724";
}
