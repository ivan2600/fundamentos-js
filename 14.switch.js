let bandas = prompt("Elije una banda");

switch (bandas) {
  case "Megadeth":
    console.log("Album: Rust in Peace");
    break;
  case "Pantera":
    console.log("Album: Cowboys from Hell");
    break;  
  case "Metallica":
    console.log("Album: Master of Puppets");
    break;            
  default:
    console.log("No se encuentra esa banda");
}