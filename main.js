class Animal {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom(){
        console.log(`${this.nome} está fazendo barulho.`);
    }

    detalhes(){
        console.log(`${this.nome} tem ${this.idade} anos.`)
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, raca){
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom(){
        console.log(`${this.nome} está latindo`)
    }

    detalhes(){
        console.log(`${this.nome} tem ${this.idade} anos e é da raça: ${this.raca}`);
    }
}

class Gato extends Animal{
    constructor(nome, idade, cor){
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom(){
        console.log(`${this.nome} está miando`)
    }

    detalhes(){
        console.log(`${this.nome} tem ${this.idade} anos e tem a pele da cor: ${this.cor}`)
    }
}

const cachorro1 = new Cachorro("Tobby", 5, "Beagle");
const gato1 = new Gato("Leite", 3, "Rubro-Negro");
const cachorro2 = new Cachorro("Bolt", 2, "Golden Retriever");

cachorro1.emitirSom();
gato1.emitirSom();

cachorro1.detalhes();
gato1.detalhes();
cachorro2.detalhes();