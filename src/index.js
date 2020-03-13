module.exports = function check(str, bracketsConfig) {
  let br;
  br = bracketsConfig.map(function(a){ return a.join("") });
  for (let i = 0; i < br.length; i++) {
    if (str.includes(br[i])) {
      str = str.replace(br[i], "");
    i=-1;}
  }
  if(str.length == 0) {return true}else{return false}
}
