# Sistema de Controle de Presença

Este projeto é um sistema para controlar a presença de salas de uma igreja, desenvolvido com Node.js, Sequelize e PostgreSQL. Ele possui uma arquitetura organizada em pastas para facilitar a manutenção e escalabilidade.

---

## 🔌 Estrutura do Projeto

### `src/`

- **`controllers/`**  
  Contém os controladores responsáveis pela lógica de negócio. Atualmente, há o controlador `personControllers` com funcionalidades como:
  - Criar uma pessoa (`createPerson`)
  - Deletar uma pessoa por ID (`deletePersonById`)
  - Buscar todas as pessoas (`getAllPersons`)
  - Buscar uma pessoa por ID ou nome (`getPersonById`, `getPersonByName`)
  - Buscar pessoas por classe (`getAllPersonsByClassName`)
  - Atualizar uma pessoa por ID (`updatePersonById`)

- **`db/`**  
  Contém a configuração da conexão com o banco de dados utilizando o Sequelize. O arquivo principal é `connection.js`.

- **`models/`**  
  Contém os modelos do banco de dados. Inclui as seguintes entidades:
  - `Year`: Representa um ano.
  - `Month`: Representa um mês.
  - `Day`: Representa um dia.
  - `ClassGroup`: Representa um grupo de classes.
  - `Persons`: Representa uma pessoa.
  - `Attendance`: Representa o registro de presença.

  Os modelos possuem relacionamentos configurados, como `hasMany` e `belongsTo`, para mapear as relações entre as tabelas.

- **`routes/`**  
  Atualmente está vazio, mas será usado para definir as rotas relacionadas aos controladores.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão >= 18.17.1)
- PostgreSQL
- Arquivo `.env` configurado com variáveis privadas.
 

### Instalação
1. Clone este repositório:
   ```bash
   git clone <https://github.com/JonTalmon/controleDePresenca>
   cd <controleDePresenca>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`.

4. Execute a aplicação:
   ```bash
   npm start
   ```

## 🔧 Funcionalidades Implementadas

1. **Pessoas**
   - Criar, deletar, buscar e atualizar pessoas.
   - Associar pessoas a grupos de classe.

2. **Estrutura Hierárquica**
   - Relacionamentos entre ano, mês, dia, presença e grupos de classe.

3. **Conexão com Banco de Dados**
   - Configurada com Sequelize e PostgreSQL, utilizando SSL.

---

## 🌄 Trabalhos em Progresso

- **Rotas**: Criação das rotas correspondentes a todos os controladores.
- **Controladores Adicionais**: Implementação dos controladores para os modelos restantes:
  - `Attendance`
  - `Year`
  - `Month`
  - `Day`
  - `ClassGroup`
- **Melhorias no Sistema de Presença**:
  - Implementação de endpoints para registrar e consultar presenças por data, classe ou pessoa.

---

## 🔠 Estrutura do Banco de Dados

Os modelos são mapeados no Sequelize com os seguintes relacionamentos:
- `Year` -> tem muitos `Month`
- `Month` -> tem muitos `Day`
- `ClassGroup` -> tem muitas `Attendance`
- `Persons` -> tem muitas `Attendance`
- `Day` -> tem muitas `Attendance`

---

## 🛡️ Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👥 Contribuições

Sinta-se à vontade para contribuir com o projeto enviando pull requests ou relatando problemas na aba de Issues.

---

## 📞 Contato

Entre em contato para sugestões ou dúvidas:  
- Email: [jonatas_talmon@hotmail.com](mailto:jonatas_talmon@hotmail.com) 
- GitHub: [JonTalmon](https://github.com/JonTalmon)