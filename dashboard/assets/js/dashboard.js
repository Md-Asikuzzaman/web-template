const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinksFade = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinksFade.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }

        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();


// let userDashboard = document.querySelectorAll('.about-distributor-section .body .dashboard .left input[name="Dashboard"]');
// userDashboard.forEach(function (item, index) {
//     item.addEventListener('change', function () {
//         // console.log(index); 
//         if (index == 0) {
//             removeClass();
//             document.querySelector('.about-distributor-section .body .dashboard .head-dash .title1').classList.add('active');
//             document.querySelector('.about-distributor-section .body .dashboard .body-dash .home').classList.add('active');
//         }
//         else if (index == 1) {
//             removeClass();
//             document.querySelector('.about-distributor-section .body .dashboard .head-dash .title2').classList.add('active');
//             document.querySelector('.about-distributor-section .body .dashboard .body-dash .job').classList.add('active');
//         }
//         else if (index == 2) {
//             removeClass();
//             document.querySelector('.about-distributor-section .body .dashboard .head-dash .title3').classList.add('active');
//             document.querySelector('.about-distributor-section .body .dashboard .body-dash .device').classList.add('active');
//         }
//         else {
//             removeClass();
//             document.querySelector('.about-distributor-section .body .dashboard .head-dash .title4').classList.add('active');
//             document.querySelector('.about-distributor-section .body .dashboard .body-dash .profile').classList.add('active');
//         }
//     });
// });

// function removeClass() {
//     let titleBar = document.querySelectorAll('.about-distributor-section .body .dashboard .head-dash h5');
//     titleBar.forEach(function (item, index) {
//         item.classList.remove('active');
//     });

//     let dashboardBar = document.querySelectorAll('.about-distributor-section .body .dashboard .body-dash .board');
//     dashboardBar.forEach(function (item, index) {
//         item.classList.remove('active');
//     });
// }



let userDashboard = document.querySelectorAll('.left input[name="Dashboard"]');
userDashboard.forEach(function (item, index) {
    item.addEventListener('change', function () {
        // console.log(index); 
        if (index == 0) {
            removeClass();
            document.querySelector('.head-dash .title1').classList.add('active');
            document.querySelector('.body-dash .home').classList.add('active');
        }
        else if (index == 1) {
            removeClass();
            document.querySelector(' .head-dash .title2').classList.add('active');
            document.querySelector(' .body-dash .job').classList.add('active');
        }
        else if (index == 2) {
            removeClass();
            document.querySelector('.head-dash .title3').classList.add('active');
            document.querySelector('.body-dash .device').classList.add('active');
        }
        else {
            removeClass();
            document.querySelector('.head-dash .title4').classList.add('active');
            document.querySelector('.body-dash .profile').classList.add('active');
        }
    });
});




function removeClass() { 

    let titleBar = document.querySelectorAll('.head-dash h5');
  
       titleBar.forEach(function (item, index) {

        item.classList.remove('active');
    });

    let dashboardBar = document.querySelectorAll('.board');

    dashboardBar.forEach(function (item, index) {

        item.classList.remove('active');
    });
}