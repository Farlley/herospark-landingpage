# HeroSpark Landing Page Theme
Tema de landing page para skills test da HeroSpark

## Dependências
- NodeJS estável e no Path
- NPM Atualizado

## Instalação
- Baixe o repositório
- Baixe os módulos com o comando `npm install`

## Gerar dist
Para gerar os arquivos, rode o comando `npm run build`. Os arquivos serão gerados na pasta **/dist**.

## Iniciar Server Local
Para iniciar o server local basta rodar `npm run server`.

### Server próprio
Se for rodar a partir de server próprio (NGINX, Apache, Node.js, etc.), basta rodar o comando `npm run build` e apontar no seu servidor para o caminho `dist/index.html` na pasta do projeto.