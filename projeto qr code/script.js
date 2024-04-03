const conteiner= document.querySelector(".conteiner")
const qrCodeBtn= document.querySelector("#qr-form button")

const inputValue = document.querySelector("#qr-form input")

const imagem = document.querySelector("#qr-code img")

const degrade = document.querySelector(".box-degrade")


//eventos
function generateQrCode(){
    const valueInput = inputValue.value
    if (!valueInput)return;
    qrCodeBtn.innerHTML ="Gerando Codigo..."
    imagem.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueInput}`;

    imagem.addEventListener("load", ()=>{
        conteiner.classList.add("active");
        qrCodeBtn.innerHTML ="Codigo Criado"
        degrade.style.height = "510px"
        
    })
    
}




qrCodeBtn.addEventListener("click",()=>{
    generateQrCode()
    
})
inputValue.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
        generateQrCode()
    }
    
})


//limpar area 

inputValue.addEventListener("keyup", ()=>{
    if(!inputValue.value){
        conteiner.classList.remove("active")
        qrCodeBtn.innerHTML ="Gerar QR Code"
        degrade.style.height="270px"
    }
})