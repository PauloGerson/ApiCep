document.querySelector('#cep').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g,'')
    .replace(/([\d]{5})(\d)/,'$1-$2')
    .replace(/(-[\d]{3})\d+?$/,'$1')
})

async function request(cep){
const response = await fetch(`http://viacep.com.br/ws/${cep}/json`);
const object = await response.json();
console.log(object);
for(let i in object){
    if(document.querySelector(`#${i}`)){
        document.querySelector(`#${i}`).value = object[i];
    }
}
//document.querySelector("#dados").innerHTML = JSON.stringify(object);
}
document.querySelector('#enviar').addEventListener("click",() =>{
request(document.querySelector('#cep').value.replace('-', ''));
});