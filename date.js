
exports.getDate= function () { //للتلخيص
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date();

   // 9/17/2016

return today.toLocaleDateString("en-US",options);

}


module.exports.getDay= getDay;
function getDay() {
  let today  = new Date();
  let options = { weekday: 'long' };


  //let day=today.toLocaleDateString("en-US")); // 9/17/2016

//return today;
return today.toLocaleDateString("en-US",options);
}
