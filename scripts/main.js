window.onload = function()
{

var brands = [{brand:"Extra", price:1.50},{brand:"DoubleMint", price:1.25},{brand:"Trident", price:1.00},{brand:"BubbleGum", price:0.75}];

var addPrice = function(str) {

    for(i=0;i<=3;i++){
    if (str==brands[i].brand){
    var item_no = parseFloat(document.getElementById("item_no").innerHTML);
    document.getElementById("item_no").innerHTML=item_no+1;
    var price = parseFloat(document.getElementById("price").innerHTML);
    document.getElementById("price").innerHTML=price+brands[i].price; }
	}

}

var clear = function() {
    document.getElementById("item_no").innerHTML=0;
    document.getElementById("price").innerHTML=0; }

document.getElementById("Extra").addEventListener("click", function(){addPrice("Extra");} );
document.getElementById("DoubleMint").addEventListener("click", function(){addPrice("DoubleMint");} );
document.getElementById("Trident").addEventListener("click", function(){addPrice("Trident");} );
document.getElementById("BubbleGum").addEventListener("click", function(){addPrice("BubbleGum");} );
document.getElementById("clear").addEventListener("click", function(){clear();} );

}