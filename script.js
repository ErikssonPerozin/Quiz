document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter respostas selecionadas
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    
    // Verificar respostas
    var correctAnswers = ["a"]; // Defina as respostas corretas
    var userAnswers = [q1Answer]; // Coloque todas as respostas do usuário aqui
    
    var score = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score += 1;
        }
    }
    
    // Exibir resultado
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Você acertou ${score} de ${correctAnswers.length} questões.`;
});
