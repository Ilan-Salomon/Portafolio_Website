let view_1 = document.getElementById('view-button_1');
let img_project_1 = document.getElementById('img_project_1');
 	let open = function() {
        img_project_1.style.display = 'block';
        view_1.removeEventListener('click', open)
        view_1.addEventListener('click', close);
    };
    let close = function() {
        img_project_1.style.display = 'none';
        view_1.removeEventListener('click', close)
        view_1.addEventListener('click', open);
    };

    view_1.addEventListener('click', open);



let view_2 = document.getElementById('view-button_2');
let img_project_2 = document.getElementById('img_project_2');
 	let open2 = function() {
        img_project_2.style.display = 'block';
        view_2.removeEventListener('click', open2)
        view_2.addEventListener('click', close2);
    };
    let close2 = function() {
        img_project_2.style.display = 'none';
        view_2.removeEventListener('click', close2)
        view_2.addEventListener('click', open2);
    };

    view_2.addEventListener('click', open2);


