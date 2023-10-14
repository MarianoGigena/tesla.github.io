import { API_URL } from "./formApiConfig.js";

const botonMostrarModal = document.getElementById('mostrarModal');
const modal = document.getElementById('dialog');
const botonCerrarModal = document.getElementById('cerrarModal');
const botonCerrarModal2 = document.getElementById('cerrarModal2');
const botonEnviar = document.getElementById('sumbit-button');
const check = document.getElementById('check');

const showFormModal = ()=> 
{
    botonMostrarModal.addEventListener('click', () => {
        modal.showModal();
    });

    botonCerrarModal.addEventListener('click', () => {
        modal.close();
    });

    botonCerrarModal2.addEventListener('click', () => {
        modal.close();
    });
}

const formFunction = ()=>
{
    document.querySelector("form").addEventListener("submit", async (e) =>
    {
        e.preventDefault();

        const form = document.querySelector("form");

        let dataForm = new FormData(form);

        dataForm.append("ticket_time", new Date().toString());

        await fetch(API_URL, {

            method:"POST",
            body: dataForm,
        });

        check.classList.add("check");

        alert("Su consulta fue enviada con éxito.");

        const hidebuttons = () =>
        {
            botonCerrarModal.style.display = 'none';
            botonCerrarModal2.style.display = 'none';
            botonEnviar.style.display = 'none';
        }

        hidebuttons();

        const endForm = ()=> { 
            
            modal.close();
            check.classList.remove("check");
            form.reset();
            botonCerrarModal.style.display = 'inline';
            botonCerrarModal2.style.display = 'inline';
            botonEnviar.style.display = 'inline';
        };

        setTimeout(endForm,2000);
    })
}

export { showFormModal, formFunction };
