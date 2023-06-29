### GitHub Pages
https://gabrielhenriqueribas.github.io/Violao.ON./


### Projeto de web2 (Protótipo):
https://www.figma.com/file/KGdfDkh97lrIJkWOJ2dEeP/Untitled?node-id=0%3A1&t=KFevlEAFln9sFscH-1

# Checkist
### Caixas de Diálogo

### Caixas de Diálogo
- [X] prompt
- [X] alert
- [X] confirm

### Temporizadores
- [X] setInterval
- [X] setTimeout

### Funções
- [X] Função anônima com argumento
- [X] Função anônima sem argumento
- [X] Função anônima com retorno
- [X] Função auto-executável - não será aceita a mesma do Module Pattern
- [X] Função com nome
- [X] Função aninhada/local - declarar uma função dentro de outra
- [X] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [X] Função Flecha - Arrow Function

### Eventos
- [X] Evento de carregamento do documento - onload
- [X] Evento de movimento do mouse
- [X] Evento de teclado - usar charCode ou keyCode
- [X] Eventos de formulário - usar onfocus e onblur
- [X] Imprimir alguma propriedade/atributo do objeto event recebido como parâmetro na função tratadora de evento


### Acesso aos elementos DOM do HTML
- [] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [X] Via getElementByID()
- [X] Via getElementsByName()
- [X] Via getElementsByTagName()
- [X] Via seletores CSS usados na função querySelector() ou querySelectorAll()

### Tratadores de Evento
- [X] Especificar o tratador de evento inline - registro do evento no HTML
- [] Especificar o tratador de evento no modo tradicional - registro do evento no JS com prefixo on via atributo de um objeto DOM
- [] Especificar o tratador de evento com a função addEventListener - registro do evento no JS
Usar o operador this em funções tratadoras de eventos.

### Objetos Nativos
- [] Usar pelo menos 3 métodos de manipulação de array
- [] Usar laço de repetição (for..in ou for..of ou forEach)
- [] Usar pelo menos 3 métodos para manipulação de string
- [X] String Template - a String com crase e ${}
- [] Manipulação do CSS de forma nativa via atributo style e classList

### Objetos
- [X] Criar objeto usando função construtora ou notação literal
- [X] (Obrigatório) Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da classe em UpperCamelCase
- [] Usar herança prototipal nativa ou herança de classes do ES6


### Qualidade do código
- [X] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
- [X] Usar um Lint - corrigir todos os problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [X] Usar strict mode - em todos os arquivos
- [X] Usar Module Pattern com função auto-executável ou o conceito de módulo do ES6 com operadores export e import
- [X] Usar pasta assets e subpastas resources e libraries para organizar o código
- [X] Usar let ou const ao invés de var
- [X] Nomes de arquivos HTML, JS e CSS minúsculos e separados por hífen (dashed-case)
### Formulário
- [X] Validação de formulário com onsubmit usando os métodos tradicionais - é a fase executada após a validação via HTML5
- [X] Validação de formulário com HTML5 API
- [X] Customizar as mensagens nos balões de mensagem
- [X] Usar os atributos de validação dos inputs - required ou type="email" ou outros
- [X] Usar expressões regulares para validação - usar no atributo pattern do respectivo input
- [X] Ler e escrever em elementos input com a propriedade value
- [X] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [X] Manipulação de elemento de listagem, como checkbox, radio ou select
- [X] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements


### jQuery
- [X] Uso de seletores CSS - id, classe e tag
- [] Uso de seletores CSS hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [] Uso de seletores hierárquicos dinâmicos, ou seja, via métodos do JQuery - parent/children/next
- [X] Efeitos fade ou slide
- [X] Especificar o tratador de algum evento para um elemento DOM via jQuery - deve ser um evento diferente do ready
- [X] Manipulação do CSS via função css() e addClass() ou removeClass()
- [X] Manipulação do conteúdo de um input e div usando jQuery
- [X] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

### Web Storage - LocalStorage ou SessionStorage
- [X] Leitura e escrita de dados simples - dados primivos como string, number, boolean
- [X] Leitura e escrita de JSON - dado transformado a partir de um objeto
- [] Criar e guardar um dado em um Cookie

### Requisições assíncronas
- [] Requisições AJAX para uma implementação funcional do backend em ExpressJS na plataforma Node
- [X] (Obrigatório) Requisições AJAX para uma API Fake - JSON Server 
- [X] Requisições AJAX para uma API Rest pública qualquer (Busca CEP API ou IBGE API ou outra).
