export default function phonemask() {
    const inputs = document.querySelectorAll('input[type="tel"]');

    //Only numbers
    const getInputNumbersValue = (input) => {
        return input.value.replace(/\D/g, "");
    };

    function onPhoneInput(e) {
        let input = e.target;
        input.value = getInputNumbersValue(input);
    }


    inputs.forEach(input => {
        input.addEventListener('input', onPhoneInput);
    });
}