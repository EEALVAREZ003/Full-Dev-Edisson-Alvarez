const usuarios = [
    { id: 1, usuario: 'usuario1', clave: '1234'},
    { id: 2, usuario: 'usuario2', clave: '5678'},
    { id: 3, usuario: 'usuario3', clave: '9101'},
    { id: 4, usuario: 'usuario4', clave: '1121'},
    { id: 5, usuario: 'usuario5', clave: '3141'}
]

const logueo= usuarios.find(usuario=> usuario.usuarios === usuario);





function pruebaboton() {

    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value


    if (usuarios.toLocaleUpperCase() == logueo) {
        //en esta parte el usuario se encuentra logueado
        setUser()
        window.open('localstorage.html')
    } else {

        bloquearcuenta()
        console.log('error de contraseña');
    }
}
//bloquear el acceso del usuario
function bloquearcuenta(){
    
    
    let contadorstorage =getstorage()
    console.log(`valor inicial de storage ${contadorstorage})}`);
    if (contadorstorage==3){
        console.log('cuenta bloqueada');
    }else {
        contarintentos()
    }

}
function getstorage(){
    return localStorage.getItem('contador') || 0
}
//contar cada vez que ingresa la contraseña mal

function contarintentos(){
    let contadorstorage = getstorage()
    contadorstorage++
    //console.log(`contador antes de sumar ${contadorstorage}`);
    imprimir('contador antes de sumar', contadorstorage)
    setcontador(contadorstorage)
}

function imprimir(mensaje,valor){
console.log(`${mensaje} ${valor}`)
}

function setUser(){
    localStorage.setItem('usuario', usuarios)
}

function setcontador(contador){
    localStorage.setItem('contador', contador)
}
