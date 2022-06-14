class Contador {
    constructor (nombre){
        this.nombre = nombre;
        this.conteo = 0;

    }
    static conteoGlobal = 0;

    obtenerResponsable(){
        return this.nombre
    }

    obtenerCuentaIndividual(){
        return this.conteo
    }

    obtenerCuentaGlobal(){
        return Contador.conteoGlobal
    }

    contar(){
        this.conteo ++
        Contador.conteoGlobal ++
    }
}

const c1 = new Contador("Arturo")
const c2 = new Contador("El Paisa")

c1.contar();
c1.contar();
c1.contar();
c2.contar();
c2.contar();

console.log (c1.obtenerCuentaIndividual())
console.log (c2.obtenerCuentaIndividual())
console.log (`${c1.obtenerResponsable()} lleva el conteo en ${c1.obtenerCuentaIndividual()}`)
console.log (c1.obtenerCuentaGlobal())

console.log (c2.obtenerCuentaGlobal())