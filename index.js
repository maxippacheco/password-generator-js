
const form = document.querySelector('#formulario');

form.addEventListener('submit', e => {
    e.preventDefault();

    console.log('Enviado')

    const addPassword = () => {
        let length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";

        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));

        }


        const html = `
                <ul>
                    <li>${retVal}</li>
                </ul>
                `

        form.insertAdjacentHTML('beforeend', html);




        return retVal;

    }




    console.log(addPassword());

    // if (input.length < 1) {
    //     console.log('valor < 1');

    // }


})

