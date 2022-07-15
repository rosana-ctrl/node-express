import prompt from "prompt-sync";

const input = prompt()

function lista() {
    let listaArray = []
    let propriedade = ""

    while (propriedade != "sair") {
        propriedade = input("Digite a propriedade: ")

        if (propriedade == "") {
            console.log("digite algo")
        } else if (propriedade.trim().toLowerCase() != "sair") {
            listaArray.push(propriedade)
        }
    }

    listaArray.sort()

    console.log(listaArray)
}

lista()