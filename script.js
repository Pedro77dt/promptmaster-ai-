function gerarPrompt() {

    const ideia = document.getElementById("idea").value;

    const tipo = document.getElementById("type").value;

    if (ideia.trim() === "") {

        alert("Digite uma ideia primeiro!");

        return;
    }

    const resultado =
        `Crie um prompt profissional para ${tipo}.

Objetivo:
${ideia}

O prompt deve ser claro,
detalhado e específico.`;

    document.getElementById("resultado").textContent = resultado;
}


function copiarPrompt() {

    const texto =
        document.getElementById("resultado").textContent;

    navigator.clipboard.writeText(texto);

    alert("Prompt copiado!");
}
