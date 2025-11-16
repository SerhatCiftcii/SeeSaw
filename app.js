const seesaw = document.getElementById('seesaw');
const seesawLength = 400;  //tascde istenilen uzunluk 400'dü
const maxAngle = 30;  // tascde istenilen açı angle değerinde içine yazcam.
const tiltSpeed = 0.1;  //// anamiasyın hızını şuanlık 0.1 yaptim ama değistirebilirim**: **kendime not
//boş list ağırlık tutumu olcak
let objects = [];
let currentAngle = 0;
let targetAngle = 0;

seesaw.addEventListener('click', e => {

  const rect = seesaw.getBoundingClientRect();
  const x = e.clientX - rect.left;

  // Merkez noktasına göre ofsetimizi ayarlıyor.

  const offsetX = Math.floor(x - rect.width / 2); 
  const weight = Math.floor(Math.random() * 10) + 1; // 1 ile 10 arası ağırlık ekleme buda tascde istenilen değer.



  const obj = { weight, offsetX };
  objects.push(obj);
  addWeightElement(obj);
  updateView();

});


function addWeightElement(obj) {
  const weightDiv = document.createElement('div');
  weightDiv.className = 'weight';
  weightDiv.textContent = obj.weight;
  // Konumu,tahterevalli uzunluğunun ortasına ayarlıyoruz..
  weightDiv.style.left = `${seesawLength / 2 + obj.offsetX}px`;
  weightDiv.style.bottom = '5px';
  seesaw.appendChild(weightDiv);
  obj.element = weightDiv; 

}

function updateView() {

  let leftTorque = 0, rightTorque = 0;

  objects.forEach(o => {

    // Tork = Ağırlık * mesefa

    if (o.offsetX < 0) leftTorque += o.weight * Math.abs(o.offsetX);

    else rightTorque += o.weight * o.offsetX;

  });
  // torka göre hedef açımızı hesaplıcaz pdf core logicteki madde tanımlamasına uygun yaptım.

  targetAngle = Math.max(-maxAngle, Math.min(maxAngle, (rightTorque - leftTorque) / 10));

  console.log(`Target Angle: ${targetAngle}`);  //TEST ETMEK İÇİN CONSOLE LOG app.js:86 Target Angle: -30 gelen değer 

}

function animate() { // tahterevalliyi animasyonla döndürme
  // açıya göre geçiş titltSpeed
  if (currentAngle !== targetAngle) {
    currentAngle = currentAngle + (targetAngle - currentAngle) * tiltSpeed;
  }
  // tahterevalliyi  yeni açıyla döndürmeyi burda sağlıycaz.
  seesaw.style.transform = `translateX(-50%) rotate(${currentAngle}deg)`;

  objects.forEach(obj => {

    obj.element.style.transform = `translate(-50%, -50%) rotate(${-currentAngle}deg)`;
  });
  requestAnimationFrame(animate);
}
animate();