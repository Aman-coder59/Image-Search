const accessKey = "oR326-M8C3NemIBFPzm1rY0C9KIFdbn1S3Uv5H-_DWQ";
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("show-more-btn");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");

let keyWord = "";
let page = 1;

async function searchImages(){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const results = data.results;

    if(page===1){
        searchResult.innerHTML = "";
    }
    results.map((result)=>{
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imagelink = document.createElement("a");
      imagelink.href = result.links.html
      imagelink.target = "_blank";
      imagelink.appendChild(image);
      searchResult.appendChild(imagelink);

    })
    searchBtn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})
searchBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
