let outpotFlid = $('.outpotFild');

function number(num){
  let curentNumber =  outpotFlid.val(); 
  outpotFlid.val(curentNumber+num);
}
$('#clin').click(()=>{
   outpotFlid.val('');
})
function clacolate(){
   var calcolate = eval(outpotFlid.val());
   outpotFlid.val(calcolate);
}
function del(){
  let deletNumber = outpotFlid.val();
  outpotFlid.val(deletNumber.slice(0,-1));
}