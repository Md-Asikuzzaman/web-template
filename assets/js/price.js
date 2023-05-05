const btn=document.querySelectorAll('.btn');
const container=document.querySelector('.content-container');
const card=document.querySelectorAll('.card');
const button=document.querySelector('#every')


container.addEventListener('click',function(e){
 const id=e.target.dataset.id;
 if(id){
     btn.forEach(function(btns){
         btns.classList.remove('active');
         e.target.classList.add('active');
     })
 }
})




jQuery(function(){

    $('#btn').click(function(){
        $('.holder').show();
    })
    
    $('.single').click(function(){
        $('.holder').hide();
        if($(this).attr('data-id') === 'monthly') {
            $('.monthly').each(function() {
                $(this).show();
            });
        }
        else {
            $('.yearly').each(function() {
                $(this).show();
            });    
        }
    })
})





