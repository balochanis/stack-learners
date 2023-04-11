var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta tenetur officia quos ea consequatur a, libero, inventore id minima rem maiores enim cupiditate excepturi! Reprehenderit, eveniet. Voluptates, totam hic laudantium nobis atque natus saepe laboriosam reiciendis molestias optio earum obcaecati, beatae omnis provident illo inventore? Optio numquam aspernatur repellendus totam exercitationem suscipit dolore in ab quia reprehenderit adipisci cupiditate illum eveniet, repellat quibusdam dolorem laborum corrupti labore esse quasi soluta! Molestiae possimus voluptatum assumenda ratione corporis quo dolor molestias accusamus World War II et repellendus quos, numquam quia minus beatae est ex ducimus neque rem quae, omnis iste odit nobis animi anis sequi. Nemo vitae voluptates dignissimos aut, illo exercitationem, quos doloremque iure id, iste perferendis corrupti vero ut provident veniam esse illum quas odio sapiente iusto ipsam autem hic tenetur culpa. Nulla hic velit reiciendis quam fugiat. Ratione nemo pariatur quae corporis modi iure labore voluptates debitis, voluptatum quod ducimus dolorum ex quasi, fugiat voluptas sunt, quos hic culpa repellendus libero molestiae error nihil reprehenderit. Tenetur nam aut doloremque est culpa sapiente quos hic magnam esse voluptatem molestiae exercitationem harum, maxime minus expedita consequuntur labore! Accusantium, aliquid officiis ad et excepturi iusto laudantium corporis provident! Delectus consectetur veniam obcaecati dolorum aspernatur sunt?";

console.log(text);

for(var i=0; i< text.length; i++)
{
    if(text.slice(i,i + 12) === "World War II")
    {
        text = text.slice (0,i) + "the Second World War" + text.slice(i + 12);
    }
}

console.log(text);
