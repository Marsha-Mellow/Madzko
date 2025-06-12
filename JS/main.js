//SIDEBAR
function showSidebar(){
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `flex`;
}
function hideSidebar(){
    const sidebar = document.querySelector(`.sidebar`);
    sidebar.style.display = `none`;
}
//END SIDEBAR
//FORM AUTOCLEAR
function handleSubmit() {
    setTimeout(() => {
        document.getElementById('myForm').reset();
    }, 1000);
}
//END FORM AUTOCLEAR