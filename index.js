const color1=document.getElementById("input1");
const color2=document.getElementById("input2");
const generate=document.getElementById("generatebtn");
const gradientcode = document.getElementById("grdcode");
const copyb=document.getElementById("copybtn");
const lineargrd=document.getElementById("lineargradtype");
const radialgrd=document.getElementById("radialgradtype");
const bothgrd=document.getElementById("bothgradtype");

generate.addEventListener("click",() => {
    const selectcolor1 = color1.value;
    const selectcolor2 = color2.value;
    const selectgrdtype= getSeelectedGrdType();

    let grdvalue = "";

    if(selectgrdtype==="both")
    {
        grdvalue = `linear-gradient(${selectcolor1},${selectcolor2}),radial-gradient(${selectcolor1},${selectcolor2})`;
    }
    else{
        grdvalue=`${selectgrdtype}-gradient(${selectcolor1},${selectcolor2})`;
    }

    document.body.style.background = grdvalue;
    gradientcode.textContent= grdvalue; 
});

copyb.addEventListener("click" , () => {
    const selectcolor =gradientcode.textContent;
    const textarea = document.createElement("textarea");
    textarea.value = selectcolor;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Copy to Clipboard : "+selectcolor);
});

function getSeelectedGrdType()
{
    if(lineargrd.checked)
    {
        return "linear";
    }
    else if(radialgrd.checked)
    {
        return "radial";
    }
    else{
        "both";
    }
}