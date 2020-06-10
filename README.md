# ThoughtWorks - Teste para desenvolvedor Front-end

Primeiramente, será necessário instalar as dependências do projeto. Para isto, basta executar o comando:


`npm install` se estiver utilizando npm

`yarn install` se estiver utilizando yarn

Feito isto, você poderá executar os seguintes scripts:

- `start`: inicia a aplicação em modo de desenvolvimento. A mesma ficará exposta na porta 3000
- `build`: constrói a aplicação em modo de produção. Todos os arquivos estarão disponíveis na pasta `dist`
- `docker-build`: constrói uma imagem Docker, contendo como tag o nome `tw-test-stephano`
- `docker-run`: cria um container e o inicializa. Ele estará disponível na porta 3000
- `test`: testa os componentes e funções da aplicação
- `test:watch`: testa a aplicação da mesma forma que `test`, porém fica 'escutando' por alterações no código. Realizando os testes novamente a cada alteração
- `deploy`: constrói a aplicação e realiza deploy utilizando `now`

## UX/UI

- As notícias foram dispostas em forma de lista vertical, sendo de fácil visualização independente do formato e tamanho da tela do usuário;
- Tanto título, quanto resumo da notícia, possuem uma cor de maior contraste que as demais informações como data e autor. Isso faz com que o foco da leitura fique voltado para o conteúdo mais relevante;
- Para as imagens, utilizei dois tamanhos diferentes de thumbnail:
    - standard: para quando a notícia não estiver 'aberta';
    - large: para quando o usuário clicar na notícia para visualizar mais informações;
- Nos dispositivos móveis, as imagens só são exibidas após clicar no título da notícia. A idéia é que o usuários consigam ver mais de uma notícia ao mesmo tempo na tela, ganhando agilidade na leitura e navegação. Além disso, também haverá uma economia no uso de dados, tendo em vista que usuários de telefone estarão utilizando a rede móvel na maior parte dos casos e só irá baixar as imagens de notícias que forem realmente relevantes para ele;
- Quando o usuário inserir uma rota que não existe na aplicação, ele será redirecionado para a rota padrão. No caso, a categoria Ciência e Tecnologia;
- Como não conhecia a quantidade máxima de items que a API do new york times poderia retornar, adicionei a opção de paginação. Evitando que o navegador tenha que processar uma quantidade muito grande de items, especialmente na categoria Ciência e Tecnologia, que possui o conteúdo de duas categorias. Além disso, a paginação torna a experiência do usuário mais agradável em diferentes tamanhos de tela;
- Se a requisição à API falha, o usuário é redirecionado para uma tela de erro, informando que algo inesperado aconteceu.


## Arquitetura do Projeto

- `React` como bilioteca principal para desenvolvimento da interface de usuário. Entre os principais motivos da escolha estão:
    - criação de componentes reutilizáveis, combináveis e que podem possuir seu próprio estado e ciclo de vida. Tornando o desenvolvimento mais dinâmico e de fácil entendimento;
    - Virtual DOM torna as alterações na árvore DOM muito mais velozes, alterando somente nós que foram realmente alterados, ao invés de toda a árvore;
    - melhorias constantes na bilioteca, com grande apoio da comunidade;
- `Atomic design` para a estruturação do projeto. Sua divisão de componentes em átomos, moléculas, organismos, layouts e páginas fornecem diversas vantagens como:
    - layout de fácil entendimento;
    - maior consistência no código, estimulando a criação de componentes usando a técnica de dividir para conquistar;
    - prototipação mais ágil, combinando componentes de forma simples;
    - funciona bem em conjunto com Reat, possuindo a mesma natureza de componentizaçao;
- Princípios `SOLID`:
    - Responsabilidade Única - cada componente possui sua responsabilidade. Recorrendo a funções utilitárias caso determinada tarefa esteja fora de seu escopo;
    - Princípio do Aberto/Fechado - o uso de `Atomic design` faz com que componentes possam ter suas funcionalidades extendidas sem a necessidade de reescrevê-los. O mesmo vale para funções utilitárias e serviços;
- `Programação funcional`:
    - `Functional components`, `utils` e `services` contendo funções puras, que não armazenam estado e consequentemente retornam sempre o mesmo resultado (dada a mesma entrada), evitando efeitos colaterais;
    - `Higher order functions` - funções que encapsulam outras funções ou as recebem como parâmetro. Permitindo fazer abstrações de valores e ações. Ex.: Componente de paginação, testes com Jest e diversos outros componentes que recebem funções como parâmetro;
- `Jest` como test runner e mocking library e `Enzyme` que fornece novos utilitários que facilitam a forma de interagir com os componentes React do teste;
- `Webpack` como ferramenta de build. Ele possui diversas features que otimizam o código e o deixam mais rápido, como por exemplo, minificação de arquivos e eliminação de assets que são importado mas não utilizados;
- `CSS modules` para a estilização dos componentes. Quando se adiciona estilo a um componente, é gerado um hash junto com o nome de cada classe, o que evita conflitos entre classes no projeto;
- `ESLint` como principal linter. Os motivos de seu uso são:
    - Já possui uma série de regras que cobrem as existentes no JSLint e JSHint;
    - Suas regras são configuráveis, dando maior liberdade de desenvolvimento;
    - Possibilidade de adicionar plugins e regras novas;
- `Babel` como transpiler para garantir melhor compatibilidade entre os navegadores e suas diferentes versões;
- `Now` para deploy de forma simples e ágil.

## Observações

- Cada componente possui também em sua pasta arquivos de teste e estilo, isso torna cada componente 'encapsulado' de tal forma que possa ser utilizado em outros projetos sem perder sua consistência;
- Ao executar os scripts de teste, é gerada uma pasta `coverage` contendo a cobertura de todos os teste da aplicação de forma mais detalhada;
- Componentes `React` que não possuem estado, foram desenvolvidos na forma de função. Isto foi feito para evitar renderizações desnecessárias e verificações de ciclo de vida. O que gera um aumento na performance;
- Não achei necessária a utilização de uma store para armazenar os dados, tendo em vista que os mesmos não precisavam ser persistidos na aplicação. Isso reduz a complexidade da aplicação e aumenta sua performance. Como a maioria dos componentes não armazenam estado, uma eventual migração utilizando um gerenciador de estado (`Redux`, `MobX` ou a própria `Context API` do React) não seria complexa de ser realizada.


## Links Úteis

- [Acesso à aplicação ](https://dist-kphhsgmfl.now.sh) no now
- [atomic design](http://bradfrost.com/blog/post/atomic-web-design/)
- [css modules](https://github.com/css-modules/css-modules)
- [enzyme](https://airbnb.io/enzyme/)
- [jest](https://jestjs.io/)
- [now](https://zeit.co/now)