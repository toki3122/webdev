let juxta = document.querySelector('button')
//juxta.addEventListener('click', showMsg);
juxta.addEventListener('click', inputMsg);
//function showMsg()
function inputMsg()
{
    //alert("heyo!!");
    let name=prompt('test subject name: ');
    juxta.textContent='test subject:'+name;
}
