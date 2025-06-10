# Gestão de Biblioteca
Aplicativo para estudo de desenvolvimento de Gestão de Biblioteca.

## Pré-requisitos
Para compilar e executar este projeto, você precisa do Node.js versão 10 ou posterior e uma versão compatível do NPM (Node Package Manager) instalada. Para informações sobre como verificar sua versão do Node e do NPM, consulte a página NPMJS (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) sobre como baixar e instalar Node.js e npm.

## Começando
As instruções a seguir explicam como conectar seu projeto à sua instância do MongoDB Atlas.

### 1. Baixe o repositório
Para começar a usar este projeto, baixe este repositório para seu ambiente de programação. Você pode clonar este projeto usando o controle de versão do Git:
git clone https://github.com/profwagnerberto/GestaoBiblioteca.git
Ou você pode baixar o arquivo ZIP usando seu navegador. Se você baixar como um arquivo ZIP, descompacte o arquivo antes de prosseguir.

### 2. Instalar Depedências
Navegue até o diretório que contém o projeto em seu terminal ou abra-o em seu IDE preferido.
Em seguida, use o arquivo NPM de dependência (package.json), que foi incluído no projeto, baixe e instale suas dependências:
npm install
Este comando lê o arquivo package.json, baixa e salva os arquivos de dependência, definidas dentro dele, para um diretório chamado node_modules. Ela também cria um arquivo package-lock.json que define as informações de versão para cada um dos módulos, necessários para construir seu projeto.
Neste ponto, você deve ter versões apropriadas do Node.js e do NPM instalado, bem como um diretório de projeto que contém as dependências que você precisa para usar o driver do MongoDB para o Node.js.

### 3. Configure your Atlas Credentials
Open the app.js file.

Search for the variable uri near the top which is assigned placeholder text. Replace the placeholder text with the connection string for your Atlas cluster. For more information on finding the connection string, see Connect via Driver in the Atlas documentation.

    const uri = 
      "<Your Atlas Connection String>";
Save the changes to your app.js file.
4. Run the Project
If you are running from the shell, you can run the application from the directory that contains it with the following command:

node app
If you are running it from the IDE, use the appropriate command to run the contents of the app.js file.

Click the Run icon, or from the Run menu, choose Start Debugging.
Assuming you have the correct connection string, you have now connected the Node app to your MongoDB Atlas datastore. Have fun modifying the code to experiment with the Node driver and MongoDB.

Troubleshooting
Are you having trouble getting connected to your MongoDB Atlas instance? Double-check the following:

Have you replaced the uri variable with a valid connection string provided by the Atlas UI? Read more here for further context.

Have you added your current IP address to the access list in the Atlas UI?
