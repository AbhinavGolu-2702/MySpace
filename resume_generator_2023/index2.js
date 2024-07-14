function addnewWEField()
{
    //console.log("Adding new field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter Here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addnewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter Here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

//Generating CV
function GenerateCV()
{
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("LinkedField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("InstagramField").value;


    //Objective Value 

    document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    //Work Experience Field 

    let wes=document.getElementsByClassName("weField");

    let str="";
    for(let e of wes)
    {
        str=str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;


    //Academic Qualification   

    let aqs=document.getElementsByClassName('aqField');
    let str1="";

    for(let e of aqs)
    {
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-tempelate').style.display='block';
}

function PrintCV()
{
    window.print();
}