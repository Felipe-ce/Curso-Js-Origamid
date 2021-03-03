let quadrado = {
  lados: 4,
  area(lado){
    return lado*lado;
  },
  perimetro(lado){
    return this.lados * lado;
  },
}