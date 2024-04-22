function test(obj, data) {
    $('#stage').html('<nav aria-label="breadcrumb">'+
       '<ol class="breadcrumb">'+
          '<li class="breadcrumb-item"><a href="#">Home</a></li>'+
          '<li class="breadcrumb-item"><a href="#">Biblioteca</a></li>'+
          '<li class="breadcrumb-item active">Livros</li>'+
       '</ol>'+
    '</nav>'
    );


    data.forEach(function (value) {
        $('#stage').append(
           '<div class="card">'+
           '<div class="card-header">'+
           '<h3><i class="bi bi-eye-fill"></i> ' + value.name + ' <strong><i class="fas fa-angle-right"></i>'+
           'R&dollar;  ' + value.price + '</strong></h3>'+
           '</div>'+
           '<div class="card-body">'+
              '<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">'+
                 '<div class="carousel-inner">'+
                    '<div class="carousel-item active">'+
                       '<img src="' + value.image + '" class="d-block w-100" alt="..." height="300">'+
                    '</div>'+
                 '</div>'+
                 '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">'+
                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                    '<span class="visually-hidden">Previous</span>'+
                 '</button>'+
                 '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">'+
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    '<span class="visually-hidden">Next</span>'+
                 '</button>'+
              '</div><br>'+
              '<h4 class="card-title">' + data[0].name + '</h4>'+
              '<p class="card-text">' + data[0].description + '</p>');

        if(obj.name == '/store/cart'){
            $('#stage').append(
               '<br><div class="row justify-content-xcenter">'+
                  '<a class="btn btn-danger" href="/store/remove-from-cart/' + data[0].index + '">'+
                  '<i class="bi bi-trash"></i> Remover do Carrinho</a>'+
               '</div><hr>'
            );
        }else{
            $('#stage').append(
               '<br><div class="row justify-content-xcenter">'+
                  '<a class="btn btn-light" href="/store/quick-add/' + data[0].id + '">'+
                  '<i class="bi bi-cart"></i> Adicionar ao Carrinho</a>'+
               '</div><hr>');
        };
    });
};


//<script>
$('.test').on('click', 'button', function() {
    var itemId = $(this).attr('id');

    let obj = {
        name: itemId,
    };

    //console.log(obj);

    $.getJSON(obj.name, function(data) {
        if (obj.name != '/store/cart'){
            var data2 = data;
            test(obj, data2);

            $('#stage').append(
                '<!-- FAQ Accordion 1-->'+
                '<h2 class="fw-bolder mb-3"><i class="bi bi-card-checklist"></i> Mais Informações</h2>'+
                '<div class="accordion mb-5" id="accordionExample">'+
                    '<div class="accordion-item">'+
                        '<h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong><i class="bi bi-book"></i> Descrição do Produto</strong></button></h3>'+
                        '<div class="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<strong>' + data[0].name + '</strong>'+
                                 '<p>' + data[0].description + '</p>'+
                                 '<p>' + data[0].price + '</p>'+
                            '</div>'+
                        '</div>'+
                     '</div>'+
                '</div>'
            );
        }else{
            var data2 = data[0];
            test(obj, data2);
            $('#stage').append(
                '<!-- FAQ Accordion 1-->'+
                '<h2 class="fw-bolder mb-3"><i class="bi bi-card-checklist"></i> Mais Informações</h2>'+
                '<div class="accordion mb-5" id="accordionExample">'+
                    '<div class="accordion-item">'+
                        '<h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong><i class="bi bi-book"></i> Resumo das Compras</strong></button></h3>'+
                        '<div class="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<strong>This is the first items accordion body.</strong>'+
                                 '<p>' + data[3] + '</p>'+
                                 '<p>' + data[1] + '</p>'+
                                 '<p>' + data[2] + '</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="accordion-item">'+
                        '<h3 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong><i class="bi bi-download"></i> Detalhes do Envio</strong></button></h3>'+
                        '<div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<strong>This is the second items accordion body.</strong>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="accordion-item">'+
                        '<h3 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><strong><i class="bi bi-currency-dollar"></i> Opções de Pagamento</strong></button></h3>'+
                        '<div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<strong>This is the third items accordion body.</strong>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
            );
        };
    });
});

//</script>


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });



})(jQuery);

