function adicionaLinha() {
    const inputNomeatividade = document.getElementById('nome-atividade');
    const inputNotaatividade = document.getElementById('nota-atividade');
if (atividade.includes(inputNomeatividade.value)) {
        alert(`A atividade ${inputNomeatividade.value} já foi inserida.`);
} else {atividade.push(inputNomeatividade.value);
        notas.push(parseFloat(inputNotaatividade.value));
    
        let linha = '<tr>';
        linha += '<td>'+inputNomeatividade.value+'</td>';
        linha += '<td>'+inputNotaatividade.value+'</td>';
        linha += `<td>${inputNotaatividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; 
        linha += '</tr>';
        linhas += linha;}    

        

    

    inputNomeatividade.value='';
    inputNotaatividade.value='';
}