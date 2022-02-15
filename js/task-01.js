

console.log('Number of categories ', categoriesRef.length);

categoriesRef.forEach(
    function (ctg) 
{
    console.log('Category: ', ctg.firstElementChild.textContent);
    console.log('Element: ', ctg.lastElementChild.children.length);
});