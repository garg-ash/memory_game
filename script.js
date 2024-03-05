const cards = document.querySelectorAll(".card")

const temp = [
  "ada sharma.jpg",
  "aishwarya rai.jpg",
  "anne hathaway.jpg",
  "Chris Evans.jpg",
  "daniel radcliffe.webp",
  "dwayne johnson.jpg",
];

const actualPhotos = [...temp, ...temp]
const already = []
let count = ""
const openPhoto = []


for (let i = 0; i < actualPhotos.length; i++) {
  const img = document.createElement("img")
  img.src = 'assets/' + actualPhotos[getARandomValue()];
  cards[i].children[0].children[1].append(img)
}


function getARandomValue() {
  let randomValue = Math.floor(Math.random() * actualPhotos.length);
  if(already.includes(randomValue)) return getARandomValue();
  else{
    already.push(randomValue)
  }
  return randomValue
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.children[0].style.transform = "rotateY(180deg)"
    


    //store the photo
    openPhoto.push(card.children[0].children[1].children[0]);


    //Increment open photo counter
    count++;

    //if 2 photos are open, start matching
    setTimeout(()=>{

    if(count>1){
      if(openPhoto[0].src===openPhoto[1].src){
        console.log("Match");

        //reset open photo counter, empty store

        count = 0;
        openPhoto.length=0;
      }else{
        console.log("Not Match")

        //reset photo,
        //empty store

        count = 0;
        openPhoto.forEach((openPhotos)=>{
          openPhotos.parentElement.parentElement.style.transform = "rotate(0)"
        })
        openPhoto.length= 0;
      }
    }
  },500)
  })

})


