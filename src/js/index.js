/**
 * Is click at the search button
 */
document.getElementById("action-btn").addEventListener("click", event => {
    //Get the name written in the input value.
    const name = document.getElementById('name').value||"desconocido";
    //Set the name in the title.
    document.getElementById('user-name').textContent = name;
});
