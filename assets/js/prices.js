const price=document.querySelector('.price');
const btns=document.querySelectorAll('.tab-btn')
const left=document.querySelectorAll('.left')
price.addEventListener('click',function(e){
    const id=e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        left.forEach(function(article){
            article.classList.remove('active')
        })
        const element=document.getElementById(id);
        element.classList.add('active');
    }
})