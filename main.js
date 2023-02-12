const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.clsslist.add('show');
        }else{
            entry.target.clsslist.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.centered');
hiddenElements.forEach((el) =>observer.observe(el));