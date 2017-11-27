function calcDiff() {
  let bir = {
    Year : document.getElementById('birY').value,
    Month : document.getElementById('birM').value,
    Day : document.getElementById('birD').value
  };
  bir.Date = new Date(bir.Year + '/' + bir.Month + '/' + bir.Day);
  let now = {
    Year : document.getElementById('nowY').value,
    Month : document.getElementById('nowM').value,
    Day : document.getElementById('nowD').value
  };
  now.Date = new Date(now.Year + '/' + now.Month + '/' + now.Day);
  console.log(bir.Date);
  console.log(now.Date);
  let oD = document.getElementById('outputDiff');

  let diff = now.Date - bir.Date;
  diff = diff / (1000 * 60 * 60 * 24);

  oD.innerHTML = diff + "日前";

}

window.onload = function(){
  let now = {
    Date : new Date()
  };
  document.getElementById('nowY').value = now.Date.getFullYear();
  document.getElementById('nowM').value = now.Date.getMonth() + 1;
  document.getElementById('nowD').value = now.Date.getDate();
};
