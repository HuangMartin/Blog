let blogId = decodeURI(location.pathname.split("/").pop());

let decRef = db.collection("blogs").doc(blogId);

decRef.get().then((doc) => {
    if(doc.exists){
        setupBlog(doc.data());
    } else{
        location.replace("/");
    }
})

const setupBlog = (data) => {
    const banner = document.querySelector('.banner');
    const blogtitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');

    banner.style.backgroundImage = `url(${data.bannerImage})`;

    titleTag.innerHTML += blogtitle.innerHTML = data.titleTag;
    publish.innerHTML += data.publishedAt;

    const article = document.querySelector('.article');
    addArticle(article, data.article);
}

const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    // console.log(data);

    data.forEach(item => {
        if(item[0] == '#'){
            let hCount = 0;
            let i = 0;
            while(item[i] == '#'){
                hCount++;
                i++;
            }
            let tag = `h${hCount}`;
            ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`
        } 
        else if(item[0] == "!" && item[1] == "["){
            // 54:51
        }
        
        
        else{
            ele.innerHTML += `<p>${item}</p>`
        }
    })
}