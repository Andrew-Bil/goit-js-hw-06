const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const containerRef = document.querySelector(".gallery");


const galleryArr = images.map(image => {
  const listEl = `<li><img src=${image.url} alt = ${image.alt} height=250></img></li>`;
  //console.log(listEl)
  return listEl;
})
const galleryUpd = galleryArr[0] + galleryArr[1] + galleryArr[2];
//console.log(galleryArr)
containerRef.insertAdjacentHTML('beforeEnd', galleryUpd);
console.log(containerRef)
containerRef.style.display = "flex";
containerRef.style.listStyleType = "none";