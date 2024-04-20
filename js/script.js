

function sacarSidebar(){
    const sideBar = document.getElementById('sidebar');

    sideBar.style.display = 'none';
}

function mostrarSidebar(){
    const sideBar = document.getElementById('sidebar');
    const body = document.getElementsByTagName('body');
    sideBar.style.display = 'flex';

    body.style.backgroundColor = 'gray';


}
