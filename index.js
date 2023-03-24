function total(){
    const sub1 = parseInt(document.getElementById("eng").value)
    const sub2 = parseInt(document.getElementById("mat").value)
    const sub3 = parseInt(document.getElementById("phy").value)
    const sub4 = parseInt(document.getElementById("che").value)
    const sub5 = parseInt(document.getElementById("com").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("enter marks in range of 100")
    }
    else{
      const  totol = sub1+sub2+sub3+sub4+sub5;
      document.getElementById("total").innerHTML = "English marks :"+sub2+ "<br> Math marks :"+sub3+"<br> Physic marks :"+sub4+ "<br> Chemistry marks :"+ sub5+" Computer "+sub1+"<br>         <br> Total marks"+total;
    }
}
function Average(){
    const sub1 = parseInt(document.getElementById("eng").value)
    const sub2 = parseInt(document.getElementById("mat").value)
    const sub3 = parseInt(document.getElementById("phy").value)
    const sub4 = parseInt(document.getElementById("che").value)
    const sub5 = parseInt(document.getElementById("com").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("enter marks in range of 100")
    }
    else{
        const totol = sub1+sub2+sub3+sub4+sub5;
        const Ave = total/5
        document.getElementById("ave").innerHTML="your average marks is :"+Ave;
    }
}
function grade(){
    const sub1 = parseInt(document.getElementById("eng").value)
    const sub2 = parseInt(document.getElementById("mat").value)
    const sub3 = parseInt(document.getElementById("phy").value)
    const sub4 = parseInt(document.getElementById("che").value)
    const sub5 = parseInt(document.getElementById("com").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("enter marks in range of 100")
    }
    else{
        const total = sub1+sub2+sub3+sub4+sub5;
        const Ave = total/5;
        if(Ave>=80 && Ave<=100){
            document.getElementById("grade").innerHTML="your grade is A"
        }
        else if(Ave>=75 && Ave<=80){
            document.getElementById("grade").innerHTML="your grade is B+"
        }
        else if(Ave>=65 && Ave<=70){
            document.getElementById("grade").innerHTML="your grade is C+"
        }
        else if(Ave>=60 && Ave<=65){
            document.getElementById("grade").innerHTML="your grade is D+"
        }
        else if(Ave>=50 && Ave<=60){
            document.getElementById("grade").innerHTML="your grade is D";
        }
        else{
            document.getElementById("grade").innerHTML="you grade is F";
        }
    }
}
