export const inputConversor = document.getElementById("input-convertir")
export const btnConversor = document.querySelector(".btn-convertir")
export const borrarHistorial = document.querySelector(".borrar-historial")
export const divContenedorFichas = document.querySelector(".fichas-container")
export const divContenedorHistorialConversion = document.querySelector(".historial-conversiones")
export const divContenedorHistorialtotal = document.querySelector(".total-historial")
export const historial = JSON.parse(localStorage.getItem("conversion")) ?? [];
export let parrafoHistorialVacio = document.createElement("p")