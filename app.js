function getNum(num){
          var a  = document.getElementById('input');
          a.value += num;
}
function clearField(){
          var b = document.getElementById('input');
          b.value = "";

}
function result(){
          var r = document.getElementById('input');
          var result = r.value;
          r.value = eval(result);
}
