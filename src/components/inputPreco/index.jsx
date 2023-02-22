function Combustivel() {
    const Calcular = (valor, valor5) => {
        var valoFinal = (valor / valor5).toFixed(2)

        if (valoFinal < 0.7) {
            alert(`O resultado foi de: R$${valoFinal}, assim será mais vantajodo abastecer é com o alcool!!`)
        } else {
            alert(`O resultado foi de: ${valoFinal}, assim será mais vantajodo abastecer é com a gasolina!!`)
        }

    }
    const Guarda = (evento) => {
        evento.preventDefault();
        const v1 = document.getElementById("valor1").value
        const v2 = document.getElementById("valor2").value
        Calcular(v1, v2)
    }
}