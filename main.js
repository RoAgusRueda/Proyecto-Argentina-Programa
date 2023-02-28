const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const hamburger = document.querySelector('#hamburger');
const sidebar = document.querySelector ('#sidebar');
const cerrar = document.querySelector ('#cerrar');
const nameForm = document.querySelector ('#name');
const emailForm = document.querySelector ('#email');
const subjectForm = document.querySelector ('#subject');
const messageForm = document.querySelector ('#message');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    subject: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	message: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

}


const openMenu = ()=>{
    sidebar.classList.toggle('d-sm-block')
}
hamburger.addEventListener('click', () =>{
    openMenu();
})

cerrar.addEventListener('click', () =>{
    openMenu();
})

const campos = {
	name: false,
	email: false,
    subject: false,
    message: false
}

const validarForm = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;

		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group__${campo}`).classList.remove('form__group-incorrecto');
		document.getElementById(`group__${campo}`).classList.add('form__group-correcto');
        document.querySelector(`#group__${campo} i`).classList.add('bi-bi-exclamation-lg');
		document.querySelector(`#group__${campo} i`).classList.remove('bi-bi-x-circle');
		document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`group__${campo}`).classList.add('form__group-incorrecto');
		document.getElementById(`group__${campo}`).classList.remove('form__group-correcto');
        document.querySelector(`#group__${campo} i`).classList.add('bi-bi-x-circle');
		document.querySelector(`#group__${campo} i`).classList.remove('bi-bi-exclamation-lg');
		document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarForm);
	input.addEventListener('blur', validarForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	form.reset()
	document.querySelector(`#group__name`).classList.remove('form__group-correcto');
	document.querySelector(`#group__email`).classList.remove('form__group-correcto');
    }
);
