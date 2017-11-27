function getElById(id) {
  return document.getElementById(id);
}

function CalcDiff(el) {
  this.init(el);
}

CalcDiff.prototype.init = function(el) {
  this.BTN = el;
  this.month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  this.handleEvents();
}

CalcDiff.prototype.handleEvents = function() {
  let self = this;
  this.BTN.addEventListener('click', function(){
    self.show();
  }, false);
};

CalcDiff.prototype.show = function() {
  this.diff = 0;
  this.calc();
  getElById('outputDiff').innerHTML = (this.diff + 1) + "日前";
};

CalcDiff.prototype.calc = function() {
  this.birDate = {};
  this.nowDate = {};
  this.birDate.Y = parseInt(getElById('birY').value);
  this.birDate.M = parseInt(getElById('birM').value);
  this.birDate.D = parseInt(getElById('birD').value);
  this.nowDate.Y = parseInt(getElById('nowY').value);
  this.nowDate.M = parseInt(getElById('nowM').value);
  this.nowDate.D = parseInt(getElById('nowD').value);
  this.calcYear();
}

CalcDiff.prototype.calcYear = function() {
  for(i = this.birDate.Y; i < this.nowDate.Y; i++){
    this.diff += this.uruu(i, 366, 365);
  }
  this.calcMonth();
};

CalcDiff.prototype.calcMonth = function() {
  for(i = 1; i < this.birDate.M; i++){
    this.diff -= this.month[i];
  }
  if( this.birDate.M > 2 ) {
    this.diff -= this.uruu(this.birDate.Y, 1, 0);
  }
  for(i = 1; i < this.nowDate.M; i++){
    this.diff += this.month[i];
  }
  if( this.nowDate.M > 2 ) {
    this.diff += this.uruu(this.nowDate.Y, 1, 0);
  }
  this.calcDay();
};

CalcDiff.prototype.calcDay = function() {
  this.diff -= this.birDate.D;
  this.diff += this.nowDate.D;
}

CalcDiff.prototype.uruu = function(i, a, b) {
  if((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
    return a;
  } else {
    return b;
  }
}

let calcDiff = new CalcDiff(document.getElementById('strBtn'));


//現在の日付を入力するのがめんどくさいので追加
window.onload = function(){
  let nowDate = new Date();
  getElById('birY').value = 1998;
  getElById('birM').value = 5;
  getElById('birD').value = 26;
  getElById('nowY').value = nowDate.getFullYear();
  getElById('nowM').value = nowDate.getMonth() + 1;
  getElById('nowD').value = nowDate.getDate();
};
