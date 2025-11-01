import redline, { question } from 'readline-sync'

let palavra1,palavra2,palavra3;

palavra1 = question("Digite a primeira opcao: Vertebrado ou Invertebrado ? ");

if (palavra1.toLocaleLowerCase() === "vertebrado"){
    palavra2 = question("Digite a segunda opção: Ave ou Mamifero ? ");
        if (palavra2.toLocaleLowerCase() === "ave"){
            palavra3 = question("Digite a terceira opção: Carnivoro ou Onivoro ? ")
            if (palavra3.toLocaleLowerCase() === "carnivoro") {
                console.log("O seu animal é uma Águia.")
            }else{
                console.log("O seu animal é uma Pomba")
            }
        }else {
            palavra3 = question("Digite a terceira palavra: Onivoro ou Herbivoro ? ")
            if (palavra3.toLocaleLowerCase() === "onivoro"){
                console.log("Seu animal é o Homem.")
            }else {
                console.log("Seu animal é uma Vaca.")
            }
            }
        }else {
            palavra2 = question("Digite a segunda opcao: Inseto ou Anelideo ? ")
            if (palavra2.toLocaleLowerCase() === "inseto") {
                palavra3 = question("Digite a terceira opcao: Hematofago ou Herbivoro ? ")
                if (palavra3.toLocaleLowerCase() === "hematofago"){
                    console.log("Seu animal é uma Pulga.")
                }else{
                    console.log("Seu animal é uma Lagarta.")
                }
            } else {
                palavra3 = question("Digite a terceira opcao: Hematofago ou Onivoro ? ")
                if (palavra3.toLocaleLowerCase === "hematofago"){
                    console.log("Seu animal é um Sanguessuga.")
                }else{
                    console.log("Seu animal é uma Minhoca.")
                }
            }
        }