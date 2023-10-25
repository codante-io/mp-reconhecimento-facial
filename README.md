# WebCam Emotions App

Que tal criar sua própria aplicação de reconhecimento facial e dar vida às suas próprias expressões e emoções? 😃

Neste projeto prático e divertido, usaremos como tecnologia o **Vite**, **React JS**, **Styled Components**, junto com a **Face Api**, uma biblioteca JavaScript de código aberto construída com base no famoso TensorFlow.

Com esta aplicação, você poderá ver em tempo real, por meio de sua webcam, como as expressões faciais se relacionam com diferentes emoções, como felicidade, tristeza, surpresa e raiva. É uma oportunidade para aprender e se divertir explorando o mundo do reconhecimento facial de maneira prática e interativa. Vamos começar!

## 🤓 Antes de começar
Esse Mini Projeto contém um boilerplate inicial, ou seja, algumas partes do código já estão prontas para que você possoa focar nas tecnologias principais.

Caso você prefira começar do zero, não tem problema, basta utilizar outra *branch* ou apagar os arquivos.

Caso você utilize o boilerplate, atente-se à estrutura do código.

## 🔨 Requisitos
- Exiba a Webcam do usuário na tela.
  - A webcam deverá ser exibida nas dimensões de **600px** por **450px**.
  - Exiba o texto **Carregando vídeo...** enquanto a câmera não é ativada.

  > 👀 **Dicas:**
  >  - Utilize a biblioteca `react-webcam` que já está instalada no projeto.
  >  - Utilize o arquivo /src/components/WebCam


- Utilize a `FaceAPI` para reconhecer a face do usuário e exibir seus contornos de forma dinâmica.
  - Exiba o texto **Processando detecção...** enquanto a FaceAPI não detecta o rosto.
  
  > 👀 **Dicas:**
  >  -  No arquivo `/utils/faceApi.js` você irá desenvolver a lógica necessária;
  >  - A função loadModels já está implementada importando os modelos de dados necessários;
  >  - Implemente a funcão `faceDetection` e utilize a documentação como base;
  >     - Tire as dúvidas de uso na documentação [Reconhecendo Expressões](https://github.com/justadudewhohacks/face-api.js#recognizing-face-expressions);
  >  - Após a captura é necessário desenhar o resultado no canvas;
  >     - Tire as dúvidas de uso na documentação [Exibindo Resultados](https://github.com/justadudewhohacks/face-api.js#displaying-detection-results);


- Com base na detecção da face, exiba a emoção do usuário. Foque em 3 principais emoções: `Feliz`, `Triste` e `Neutro`. 
  - Utilize as condições abaixo como base:
    - Se `happy` for maior que `0.7` exiba `'Você parece feliz!'`;
    - Se `sad` for maior que `0.1` exiba `'Você parece triste!'`;
    - Se nenhuma opção for atendida exiba `'Você parece normal.'`;
  - Exiba um Emoji correspondendo a emoção do usuário.

- Faça o deploy da sua solução e submeta no Codante.


## 🔨 Desafio extra para quem quer ir além

  - Crie um alerta de Erro inicialmente caso o site não tenha acesso a webcam com a seguinte frase `Não conseguimos acessar sua webcam!`. Você pode utilizar a biblioteca [sweetalert2](https://sweetalert2.github.io/) para exibir o alerta customizado;
  - Desenvolva novas reações e mensagens para as emoções de `angry` e `surprised`;


## 💻 Setup do projeto

O projeto com o design inicial já estará disponível para você na branch principal do repositório. Sua responsabilidade será apenas de implementar a lógica de acordo com o passo a passo acima.


## 🔍 Dicas

- Estude sobre componentização, estados e passagem de Props para os componentes do React.
- Estude sobre renderização condicional para os componentes do React.
- Estude sobre Styled Components caso queria aprimorar ou modificar os estilos sugeridos.
- Não deixe de ler com calma a documentação das dependências que foram usadas.


## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1293635877881660380)


## 👉🏽 Sobre esse mini-projeto

### Tecnologias 

- **Tecnologias:**
  - `React JS`;
  - `Styled Components`;
  - `react-webcam`;
  - `face-api.js`;
