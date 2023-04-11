var filterText = document.getElementById('filterText');
var listing = document.getElementById('listing');

function filterList()
{
    var filter = filterText.value
    var listingText = listing.childNodes;

    for(var i=0; i< listingText.length; i++)
    {
        if(listingText[i].nodeType === 1)
        {
            var oneListTest = listingText[i].innerHTML.toLowerCase();

            if(oneListTest.indexOf(filter) != -1)
            {
                listingText[i].style.display = "";

            }

            else
            {
                listingText[i].style.display = "none";
            }
        }
    }
}