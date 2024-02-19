const allBtn = document.getElementsByClassName("add-btn");

let count = 40;
let seatcount = 0;
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


    const fullSuccess= document.getElementById('full-success');
 fullSuccess.classList.remove('hidden')

}