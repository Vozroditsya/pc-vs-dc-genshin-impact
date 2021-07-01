
/* Obtener los valores de ataque, prob. crit., y daño crit. para calcular su promedio de daño critico */
const calcularPromedioCrit = () => {
    let ataque = document.getElementById('ataque').value;
    let probCrit = document.getElementById('probCrit').value / 100;
    let dmgCrit = document.getElementById('dmgCrit').value / 100;

    let critPromedio = ataque * (1 + probCrit * dmgCrit);

    document.getElementById('resultado').innerHTML = 'El promedio del daño critico es: ' + critPromedio;
}


