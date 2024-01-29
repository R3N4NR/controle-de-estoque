# Controle de Estoque API

Este projeto é uma API construída com Prisma, PostgreSQL e TypeScript, oferecendo um robusto controle de estoque. A seguir estão instruções detalhadas sobre como configurar, executar e contribuir para este projeto.

## Configuração do Projeto

1. *Instalação de Dependências:*
   Execute o seguinte comando para instalar todas as dependências necessárias:

   bash
   npm install
   

2. *Configuração do Banco de Dados:*
   Certifique-se de configurar suas credenciais no arquivo .env. Execute as migrações do Prisma para criar o esquema do banco de dados:

   bash
   npx prisma migrate dev
   

## Executando a API

Inicie a API localmente com o seguinte comando:

bash
npm run dev


A API estará disponível em http://localhost:3333.

## Documentação da API

A API oferece funcionalidades para o controle de estoque, incluindo:

- *Categorias:*
  - Gerenciamento de categorias de produtos.

- *Produtos:*
  - Registro e gestão de produtos no estoque.

- *Vendas:*
  - Controle de vendas de produtos.

- *Usuários:*
  - Autenticação e gerenciamento de usuários.

## Documentação Swagger

A documentação detalhada da API é fornecida através do Swagger. Após iniciar a API localmente, acesse a documentação em:

bash
http://localhost:3333/api-docs


Explore e teste os endpoints diretamente na interface do Swagger para entender e utilizar os recursos disponíveis.

## Contribuição

Se desejar contribuir para o desenvolvimento deste projeto:

1. Siga as práticas comuns de desenvolvimento.
2. Crie branches específicas para suas features ou correções.
3. Envie pull requests para revisão.

## Versionamento

Este projeto utiliza o [Versionamento Semântico](https://semver.org/). Ao realizar alterações significativas, lembre-se de incrementar a versão conforme as diretrizes.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

Aproveite o controle de estoque eficiente com esta API!
