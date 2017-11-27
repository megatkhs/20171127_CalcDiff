function calcDiff() {
  let bir = {
    Year : parseInt(document.getElementById('birY').value),
    Month : parseInt(document.getElementById('birM').value),
    Day : parseInt(document.getElementById('birD').value)
  };
  let now = {
    Year : parseInt(document.getElementById('nowY').value),
    Month : parseInt(document.getElementById('nowM').value),
    Day : parseInt(document.getElementById('nowD').value)
  };
  let oD = document.getElementById('outputDiff');

  let diff = 0;
  console.log(diff);

  //1.うるう年の時を判別して去年までの総日数を求める
  for(let i = bir.Year; i < now.Year; i++){
    if(i % 100 == 0 && i % 400 != 0){
      diff += 365;
    } else if(i % 4 == 0) {
      diff += 366;
    } else {
      diff += 365;
    }
    console.log(diff);
  }

  //2.先月までの日数を求める,今年がうるう年か判別して1を足すか判断する
  for(let i = 1; i < now.Month; i++){
    if(i == 4 || i == 6 || i == 9 || i == 11){
      diff += 30;
    } else if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
      diff += 31;
    } else {
      diff += 28;
    }
    console.log(diff);
  }

  if(!(now.Year % 100 == 0 && now.Year % 400 != 0)&&now.Year % 4 == 0){
    diff += 1
    console.log('うるう年' + diff);
  }

  //3.今月の分の日付を足す 今日はまだ終わっていないので-1します
  diff = diff + now.Day - 1;

  //4.生まれる前の月までの日数を引く,生まれ年がうるう年か判別して1を引くか判断する
  for(let i = 1; i < bir.Month; i++){
    if(i == 4 || i == 6 || i == 9 || i == 11){
      diff -= 30;
    } else if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
      diff -= 31;
    } else {
      diff -= 28;
    }
    console.log(diff);
  }

  if(bir.Month > 2){
    if(!(bir.Year % 100 == 0 && bir.Year % 400 != 0)&&bir.Year % 4 == 0){
      diff -= 1;
      console.log('うるう年' + diff);
    }
  }
  //5.生まれた日までの日数を引く 生まれた日は始まったばかりなので1日増やす
  diff = diff - bir.Day + 1;

  //3.出力しよう

  oD.innerHTML = diff + 1 + "日前";

}
//現在の日付を入力するのがめんどくさいので追加
window.onload = function(){
  let nowDate = new Date();
  document.getElementById('nowY').value = nowDate.getFullYear();
  document.getElementById('nowM').value = nowDate.getMonth() + 1;
  document.getElementById('nowD').value = nowDate.getDate();
};
