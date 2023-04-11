var listing = document.getElementById('container');

function filterSelection(category)
{
    var listingNode = listing.childNodes;

    for(var i = 0; i < listingNode.length; i++)
    {
        if(listingNode[i].nodeType === 1)
        {
            var elClassName = listingNode[i].className;
            if(category === "all")
            {
                listingNode[i].style.display = "";
            }
            else
            {
                if(elClassName.indexOf(category) !== -1)
                {
                    listingNode[i].style.display = "";
                }   
    
                else
                {
                    listingNode[i].style.display = "none";
                }
            }
        }
    }

}