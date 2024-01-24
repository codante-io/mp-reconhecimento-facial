# Feely - Reconhecimento Facial com TensorFlow e React

Você faz parte da equipe da _Feely_ 🟡, uma hipotética _startup_ cujo produto principal é um reconhecimento facial que capta as expressões e emoções dos seus usuário. 😃

Neste projeto prático e divertido, usaremos como tecnologias o **React** com **Typescript**, **Vite**, **TailwindCSS**, junto com a **Face Api**, uma biblioteca JavaScript de código aberto construída com base no famoso **TensorFlow**.

Com esta aplicação, você poderá ver em tempo real, por meio de sua webcam, como as expressões faciais se relacionam com diferentes emoções, como felicidade, tristeza, surpresa e raiva. É uma oportunidade para aprender e se divertir explorando o mundo do reconhecimento facial de maneira prática e interativa.

## 🤓 Antes de começar

Esse Mini Projeto contém um template inicial para você focar nas tecnologias principais. Dessa forma você não precisará de muito tempo para a parte de HTML e CSS.

As duas fontes que serão utilizadas (_Fresca_ e _Roboto Condensed_) já estão instaladas e configuradas como `display` e `secondary`. Dá uma olhada no `tailwind.config.js` quando for utilizá-las 

Caso você prefira começar do zero, não tem problema, basta apagar os arquivos.

## 🔨 Requisitos

- Exiba a Webcam do usuário na tela.

  - Este é o primeiro requisito básico.
  - A webcam deverá ser exibida no local determinado no projeto.

  > 👀 **Dicas:**
  >
  > - Utilize a `Media Stream API` do browser, a implementação é relativamente simples.

- Exiba um _spinner_ enquanto a `FaceAPI` não detecta o rosto.
- Utilize a `FaceAPI` para reconhecer a face do usuário e exibir seus contornos de forma dinâmica.
  
  - Existem alguns passos para que a `FaceAPI` funcione corretamente:
  
    - 1. Você precisará carregar os modelos do TensorFlow usando a `FaceAPI`. Os modelos já estão no respositório no caminho `/public/models`
    - 2. Em seguida, você irá fazer a detecção do rosto usando o método correspondente da `FaceAPI`  
    - 3. Você também deverá usar o método da `FaceAPI` que "desenha" o a captura na tela. O desenho será feito em um `<canvas>` que estará sobreposto ao vídeo.
    - 4. Por fim, você deverá capturar a expressão mais provável da face detectada para que ela seja utilizada no card de resultado da aplicação.
    - 5. Não se esqueça que a detecção deve ocorrer em _tempo real_, isto é, deverá ocorrer a cada X segundos (ou milissegundos, como preferir).

  > 👀 **Dicas:**
  >
  > - Tire as dúvidas de uso na documentação [Reconhecendo Expressões](https://github.com/justadudewhohacks/face-api.js#recognizing-face-expressions);
  > - Após a captura é necessário desenhar o resultado no canvas;
  > - Tire as dúvidas de uso na documentação [Exibindo Resultados](https://github.com/justadudewhohacks/face-api.js#displaying-detection-results);
  > - Talvez a forma mais eficaz para "aprender" a `FaceAPI` é rodando algum dos exemplos presentes no repositório.

- Exiba um Emoji correspondendo a emoção do usuário e uma frase de efeito de acordo com a expressão:
  
  - _Feliz_: Você está **feliz**. Aproveite!
  - _Triste_: Você está um pouco **triste** hoje..
  - _Brava_: Por que a expressão **brava**?
  - _Surpresa_: Parece que há alguma **surpresa** por aí!
  - _Medo_: Do que você tem **medo**?
  - _Enjoada_: Sua expressão é **enjoada**.

- Faça o deploy da sua solução e submeta no Codante.

## 🔍 Dicas

- Estude sobre componentização, estados e passagem de Props para os componentes do React.
- Esse Mini Projeto é uma ótima forma de treinar manipulação do `DOM` com `refs` no _React_ caso você opte por componentizar algumas partes da aplicação.
- Não deixe de ler com calma a documentação das dependências que foram usadas.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Mas claro, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1331723409593653011/mini-projeto-reconhecimento-facial)

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar

#### Media Stream API (Browser)

- Capturar e exibir uma webcam no navegador

#### React

- Refs e manipulação do DOM
- Componentização
- useEffect e useState

#### TailwindCSS

- Habilidades básicas de estilização com a biblioteca

#### TensorFlow (FaceApi)

- Vamos utilizar uma biblioteca que está construída com base no TensorFlow
- Praticar com as APIs de alto nível da biblioteca `FaceAPI`
