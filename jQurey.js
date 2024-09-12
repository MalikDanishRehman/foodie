const search = document.querySelector('.fa-searchengin');
const arrow=document.querySelector('.arrow');
let searchbargenerated = false;
let optiongenerated = false;
let searchbar = document.createElement('input');
let images = ['images/mainslad.png', 'images/delivery.png'];
let index = 0;
let quantity=0;    


$(document).ready(function () {

    $('.space').hide(2000);
    $('.animate').slideUp(2000);


    
    // $('arrow').click( function() {
    //     index = index + 1;
    //     if (index >= images.length) {
    //         index = 0; // Reset index to 0 when the last image is reached
    //     }
    //     $('.mainimage').attr('src', images[index]);
    // });
    
    search.addEventListener('click', function () {
        if (!searchbargenerated) {
            search.classList.add('search');
            searchbar.classList.add('inputbar');
            document.querySelector('.Elementnav').append(searchbar);
            console.log(searchbar);
            searchbargenerated = true;

        }
    });
    searchbar.addEventListener('click', function () {
        if (!optiongenerated) {
            const createList = document.createElement('div')
            createList.innerHTML = `<div><ul>  
                               <ul class="listvalue  packet_Juice"> <a href="#image1">packet Juice</a></ul>
                               <ul class="listvalue   Annar_Fresh_Juice"><a href="#image2">Annar Fresh Juice</a></ul>
                               <ul class="listvalue  Zinger_Burger"><a href="#image3">Zinger Burger</a></ul>
                               <ul class="listvalue Bakery_Cookies"><a href="#image4">Bakery Cookies</a></ul>
                               <ul class="listvalue Ice_Cream"><a href="#image6">Ice Cream</a></ul>
                               <ul class="listvalue  Spagetti"><a href="#image9">Spagetti</a></ul>
                               <ul class="listvalue  Fruit_Juice"><a href="#image7">Fruit Juice</a></ul>
                               <ul class="listvalue  French_Fries"><a href="#image5">French Fries</a></ul>
                               <ul class="listvalue   Omlate"><a href="#image8"> Omlate</a></ul>
                                      </ul></div>`;

            console.log(createList);
            document.querySelector('.list').append(createList);
            optiongenerated = true;


            const PJ = document.querySelector(".packet_Juice");
            const AFJ = document.querySelector(".Annar_Fresh_Juice");
            const ZIN = document.querySelector(".Zinger_Burger");
            const C = document.querySelector(".Bakery_Cookies");
            const FF = document.querySelector(".French_Fries");
            const IC = document.querySelector(".Ice_Cream");
            const O = document.querySelector(".Omlate");
            const S = document.querySelector(".Spagetti");
            const FJ = document.querySelector(".Fruit_Juice");


            PJ.addEventListener('click', function () {
                searchbar.value = 'packet Juice';
            });
            AFJ.addEventListener('click', function () {
                searchbar.value = 'Annar Fresh Juice';
            });
            ZIN.addEventListener('click', function () {
                searchbar.value = 'Zinger Burger';
            });
            C.addEventListener('click', function () {
                searchbar.value = 'Bakery Cookies';
            });
            IC.addEventListener('click', function () {
                searchbar.value = 'Ice Cream';
            });
            S.addEventListener('click', function () {
                searchbar.value = 'Spagetti';
            });
            FJ.addEventListener('click', function () {
                searchbar.value = 'Fruit Juice';
            });
            FF.addEventListener('click', function () {
                searchbar.value = 'French Fries';
            });
            O.addEventListener('click', function () {
                searchbar.value = 'Omlate';
            });
            search.addEventListener('click', function () {


                if (searchbar.value === 'packet Juice') {
                    console.log('Juice ordered');
                }
                else if (searchbar.value === 'Annar Fresh Juice') {
                    console.log('Annar Juice ordered');
                }
                else if (searchbar.value === 'Zinger Burger') {
                    console.log('FastFood ordered');
                }
                else if (searchbar.value === 'Bakery Cookies') {
                    console.log('Cookies ordered');
                }
                else if (searchbar.value === 'French Fries') {
                    console.log('Fries ordered');
                }
                else if (searchbar.value === 'Ice Cream') {
                    console.log('IceCream ordered');
                }
                else if (searchbar.value === 'Fruit Juice') {
                    console.log('Fruit Juice');
                }
                else if (searchbar.value === 'Omlate') {
                    console.log('Omlate ordered');
                }
                else if (searchbar.value === 'Spagetti') {
                    console.log('Spagetti Ordered');
                }

                else {
                    console.log('No element with this name');
                }

            });

        }
    })

    document.querySelector(".btn-primary").addEventListener('click',function(){
        alert("Order placed");
    })
    
});
