   const allBtn = document.getElementsByClassName("add-btn");

   let count = 40;
  let seatcount = 0;
  let section  = 0;

const apply =document.getElementById('apply');
apply.disabled =  true;
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count - 1;
        setInnerText("ticket-number", count)
        seatcount = seatcount + 1
        setInnerText("seat-number", seatcount)

        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = 'white';
        const seatname =e.target.innerText
        const price =550;
        const sectedContainer =document.getElementById("sected-container-place");
        const li =document.createElement("li");

        const p =document.createElement('p');
        p.innerText =seatname;
        const p2 =document.createElement('p2');
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        sectedContainer.appendChild(li);

        const totalCost = document.getElementById("total-cost").innerText;
        const ConvertedTotalCost = parseInt(totalCost);
        
        section = section+1

    if(section == 4){
        apply.disabled = false;
    }
        document.getElementById("total-cost").innerText=ConvertedTotalCost + parseInt(price);



        const grandTotal = document.getElementById('grand-total').innerText;

        const ConvertedGrandTotalCost = parseInt(grandTotal);
        document.getElementById('grand-total').innerText =ConvertedGrandTotalCost+parseInt(price);


    })
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function play(){
    const allSection =document.getElementById('all-section');
    allSection.classList.add('hidden')
    const footer =document.getElementById('foot');
    footer.classList.add('hidden')


    const fullSuccess= document.getElementById('full-success');
 fullSuccess.classList.remove('hidden')

}

// apply button
const btn = document.getElementById("apply");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();

  if (couponCode === "NEW15" || couponCode === "COUPLE20") {
    //discount
    const totalCost = document.getElementById("total-cost").innerText;
    const totalCostNum = parseInt(totalCost);
    const discountPrice = totalCostNum * 0.2;
    //  grand change with coupon
    const grandTotal = document.getElementById("grand-total").innerText;
    const grandTotalNum = parseInt(grandTotal);
    document.getElementById("grand-total").innerText =
      grandTotalNum - discountPrice;
    document.getElementById("input-field").value = "";
  } else {
    alert("please enter valid coupon code");
    document.getElementById("input-field").value = "";
   }
});

// disable 

function toggleButtion(){
    const phoneNumber =document.getElementById('phone-number');
    const  submitmitButtion =document.getElementById('submit-Buttion')
    if(!isNaN(phoneNumber.value.trim() )){
        submitmitButtion.disabled = false;
    }else{
        submitmitButtion.disabled =true;
    }
}

function toggleButtiom(){
    const inputField =document.getElementById('input-field');
    const  applyButtion =document.getElementById('apply');
   
}
