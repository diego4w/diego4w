document.addEventListener('DOMContentLoaded', function() {
    const msdosInput = document.querySelector('.msdos-input-field');
    const outputDiv = document.querySelector('.msdos-output');
    let currentDirectory = '~'; // Define o diretório inicial

    msdosInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = msdosInput.value.trim();
            msdosInput.value = ''; // Limpa o campo de entrada

            processCommand(command);
        }
    });

    function processCommand(command) {
        const commandMap = {
            'ls': listDirectories,
            'cd redesSociais': changeDirectoryRedesSociais,
            'whoami': whoAmI,
            'help': showHelp
        };

        if (command in commandMap) {
            commandMap[command]();
        } else {
            outputDiv.innerHTML = `Comando "${command}" não reconhecido<br>`;
        }
    }

    function listDirectories() {
        outputDiv.innerHTML = 'redesSociais<br>projetos<br>';
    }

    function changeDirectoryRedesSociais() {
        outputDiv.innerHTML = 'instagram<br>github';
        currentDirectory = '/redesSociais';
        updatePrompt();
    }

    function whoAmI() {
        outputDiv.innerHTML = 'Meu nome é Diego Francisco, comecei a estudar programação com 12 anos e atualmente estou cursando Ciência da Computação.';
    }

    function showHelp() {
        outputDiv.innerHTML = 'cd -- mudar o diretório atual da área de trabalho para um outro especificado<br>ls -- listar os diretórios<br>whoami -- exibir informações sobre o usuário atual<br>help -- exibir esta mensagem de ajuda<br>';
    }

    // Função para atualizar o prompt com o diretório atual
    function updatePrompt() {
        document.querySelector('.prompt').textContent = `me@host:${currentDirectory}$`;
    }
});
