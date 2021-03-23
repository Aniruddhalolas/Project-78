var images = ["img src= dadu.jpg",
             "img src= thammu.jpg",
             "img src=jethu.jpg",
             "img src=DSC04870.JPG",
             "img src=20210221_160510.jpg",
             "img src=20210116_122053.jpg",
             "img src=dada.jpg",
             "img src=20210116_112217.jpg"
            ];

var names = ["Giridhari Lal De",
             "Krishna De",
             "Amit De",
             "Madhumita De",
             "Anjan De",
             "Anasua De",
             "Anshu De",
             "Aniruddha De"
            ];

function change_name() {
    images=images+1;
    document.getElementById("image").innerHTML = images;

    names=names+1;
    document.getElementById("name").innerHTML = names;
}