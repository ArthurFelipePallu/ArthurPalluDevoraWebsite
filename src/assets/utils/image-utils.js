
function getImageURL(name){
    const dir = '../imgs/'+[name];
    return new URL(dir, import.meta.url).href;
}
export{getImageURL}