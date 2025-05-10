export function setImage(idImg, srcImg) {
  const img = document.createElement('img')
  img.src = srcImg
  
  document.getElementById(idImg).appendChild(img)
}