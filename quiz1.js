    var i=0;
    var score=0;
    let q=quiz;
    var len=q.length;

function check()
{
const rbtn=document.querySelectorAll('input[name="fname"]');
let r;
let rid;
for(const rb of rbtn)
{
    if(rb.checked)
    {
        r=rb.value;
        rid=rb.id;
        rb.checked="false";
        break;
    }
}
if(r==null)
alert("please select one option");
else{
    if(r==q[i].answer)
    {
        score++;
        var s=document.getElementById("show");
        s.innerHTML="Correct"
        s.style.display="block";
        s.style.background="green";
    }
    else
    {
        document.getElementById("show").innerHTML="Incorrect";
        document.getElementById("show").style.display="block";
        document.getElementById("show").style.background="red";
        
    }
    i++;
    
    console.log(i);
    document.getElementById("sub").style.display="none";

    if(i==len)
    {
        
        var result=document.createElement("BUTTON");
             result.style.background="lightcoral";
             result.style.marginLeft="20px";
             result.innerText="show results";
             result.addEventListener("click",function()
             {
                 document.getElementById("show").style.display="none";
                document.getElementById("boxx").style.display="none";
                document.getElementById("box").style.display="none";
                document.getElementById("boxxx").style.display="none";
                document.getElementById("bottm").style.display="none";
                document.getElementById("aa").removeChild(restart);
                document.getElementById("aa").removeChild(result);
               var j=0;
               var bod=document.getElementById("form");
               var head=document.createElement("H");
               head.style.background="pink";
               head.innerHTML="Score:"+score;
               head.style.marginLeft="285px";
            //    head.style.marginTop="200px";
            head.style.fontSize="2em";
            // head.style.textAlign="center";
               bod.appendChild(head);
               while(j<len)
               {
                   var answ=q[j].answer-1;
                  
                   var p=document.createElement("P");
                   p.innerText=q[j].question;
                //    document.body.appendChild(p);
                   bod.appendChild(p);
                var pp=document.createElement("P");
                pp.innerText=q[j].options[answ];
                pp.style.background="lightblue";
                pp.style.width="max-content"
                // document.body.appendChild(pp);
                bod.appendChild(pp);
                   j++;
               }
            var enddiv=document.createElement("DIV");
            var span=document.createElement("SPAN");
            span.innerHTML="dc";
            span.style.color="khaki";
            enddiv.appendChild(span);
            enddiv.style.innerHTML="khaki";
            enddiv.style.background="khaki";
            bod.appendChild(restart);
            bod.appendChild(enddiv);
            
             
            
             })
             document.getElementById("aa").appendChild(result);
        var restart=document.createElement("BUTTON");
        restart.style.background="lightcyan";
        restart.innerText="restart";
        restart.marginLeft="30px";
        restart.addEventListener("click",function(){
             location.reload();
             w.style.display="none";         
        })
        document.getElementById("aa").appendChild(restart);
    }
    else{
    var w = document.createElement("BUTTON");
    w.style.background="lightgreen";
    w.style.marginLeft="20px";
    w.innerText="next";
    w.addEventListener("click",function()
    {
       document.getElementById("sub").style.display="block";
        document.getElementById("show").style.display="none";
      var x=document.getElementById("qu");
      x.innerHTML=q[i].question;
      document.getElementById("e").innerHTML =q[i].options[0];
      document.getElementById("f").innerHTML =q[i].options[1];
      document.getElementById("g").innerHTML =q[i].options[2];
      document.getElementById("h").innerHTML =q[i].options[3];
      w.style.display="none";
      document.getElementById(rid).checked=false;
     })
    document.getElementById("aa").appendChild(w);}
    }}
