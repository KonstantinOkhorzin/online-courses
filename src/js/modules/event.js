export default function() {
    const mounts = document.querySelectorAll('.card-events__month');
    mounts.forEach((month) => {
        month.innerHTML = month.innerHTML.slice(0, 3);
    });
}