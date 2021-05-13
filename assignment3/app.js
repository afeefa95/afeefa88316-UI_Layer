$(function(){
    $.get("product.json",function(data,status){
        console.log(data);
        data.forEach(iterateFunc);

        function iterateFunc(value){
            console.log(value.pid);
            let div=document.createElement("div");
            let img=document.createElement("img");
            let h4_pname=document.createElement("h4");
            let h4_unitPrice=document.createElement("h4");
            let p=document.createElement("p");

            img.setAttribute("width","100px");
            img.setAttribute("height","100px");
            img.setAttribute("src", value.img);
            img.setAttribute("alt", value.img); 
            div.appendChild(img);
            h4_pname.innerHTML=value.pname;
            div.appendChild(h4_pname);
    
            h4_unitPrice.innerHTML=value.unitPrice;
            div.appendChild(h4_unitPrice);
            $("body").append(div);
        }
        
    })
});