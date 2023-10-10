# WebCam Emotions App

Que tal criar sua própria aplicação de reconhecimento facial e dar vida às suas próprias expressões e emoções? 😃

Neste projeto prático e divertido, usaremos como tecnologia o **Vite**, **React JS**, **Styled Components**, junto com a incrível **Face Api**, uma biblioteca JavaScript de código aberto construída com base no famoso TensorFlow.

Com esta aplicação, você poderá ver em tempo real, por meio de sua webcam, como as expressões faciais se relacionam com diferentes emoções, como felicidade, tristeza, surpresa e raiva. É uma oportunidade empolgante de aprender e se divertir explorando o mundo do reconhecimento facial de maneira prática e interativa. Vamos começar!"


## 🔨 Requisitos

  - Realize o clone do repositório com o template inicial:
    - `git clone git@github.com:codante-io/mp-webcam-emotions.git`
  - Entre no diretório do projeto `cd webcam-emotions`
  - Instale as dependências do projeto `npm install`
  - Rode o projeto pela primeira vez `npm run dev`

> OBS 👀: Todos os ícones e imagens já estão disponíveis no diretório `public/images`


### Parte 01: Componente WebCam
Neste componente você irá desenvolvedor o código responsável por habilitar a sua webcam e dimensionar a largura e altura do seu vídeo.

  - Dentro do diretório `src`, siga as instruções abaixo:
  - Crie um arquivo no diretório `/components/WebCam/index.jsx`
  - Utilize a biblioteca já instalada `react-webcam`
    - Tire as dúvidas de uso na documentação [react-webcam](https://www.npmjs.com/package/react-webcam)
  - Mantenha a largura de **600px** e altura de **450px** para o Browser
  - Adicione a classe **webcam** no componente da câmera
  - Dentro do WebCamContainer importe a imagem do Monitor no diretório `"/images/monitor.svg"`
  - Por fim, instancie o seu componente WebCam no `App.jsx`

<details>
  <summary>Exemplo básico de uso</summary>

```javascript
<WebCam
  onUserMedia={/*Evento ativado quando o vídeo é carregado com sucesso*/}
  onUserMediaError={/*Evento ativado quando algum erro não carrega o vídeo*/}
  width={600}
  height={450}
  autoPlay
  muted
/>
```

</details>


### Parte 02: Componente Canvas + FaceAPI
Agora você irá criar um elemento `canvas` que permite a renderização de gráficos e imagens  de forma interativa, a biblioteca do face-api.js irá fazer uso desse elemento para desenhar os pontilhados da sua face.

> OBS 👀: Os models já estão disponíveis no diretório `public/models`

  - No `App.jsx` crie uma tag canvas abaixo do componente WebCam
    - Tire as dúvidas sobre o canvas [Aqui](https://www.w3schools.com/html/html5_canvas.asp)
  - Crie uma referência do canvas e da sua webCam com o hook `useRef` será necessário para se comunicar a FaceApi
  - No diretório `/utils/faceApi.js` você irá desenvolver a lógica necessária
  - A função `loadModels` já estar implementada importando os modelos de dados necessários que funcione corretamente
  - Implemente a funcão `faceDetection` e utilize a documentação como base
    - Tire as dúvidas de uso na documentação [Reconhecendo Expressões](https://github.com/justadudewhohacks/face-api.js#recognizing-face-expressions)
  - Utilize da função detectAllFaces provida pela faceApi para detectar nossa face
  - Após a captura é necessário desenhar o resultado no canvas
    - Tire as dúvidas de uso na documentação [Exibindo Resultados](https://github.com/justadudewhohacks/face-api.js#displaying-detection-results)
    - Lembre de limpar o canvas antes de cada novo desenho para não acumular resultado das detecções

> Dicas 👊: É necessário que o código seja implementado dentro do setInterval a cada um décimo de segundo para que a detecção da face acompanhe os nossos movimentos.


### Parte 03: Componente Emoji
Dentro dos valores retornados pelo FaceAPI é possível notar um objeto de expressões com valores distribuidos, exemplo:

```javascript
{
  ...
  expressions: {
    angry: 0.00003753201599465683,
    disgusted: 0.00003033899156434927,
    fearful: 0.0002886536531150341,
    happy: 0.26103872060775757,
    neutral: 0.7176058292388916,
    sad: 0.00015416121459566057,
    surprised: 0.0208448339253664,
  }
}
```

  - Utilize esses valores para criar uma função capaz de gerar uma mensagem de acordo com a emoção mais forte no momento, vamos focar nas 03 principais emoções `Feliz`, `Triste`, `Neutro`. Utilize as condições abaixo como base:
    - Se `happy` for maior que `0.7` exiba `'Você parece feliz!'`
    - Se `sad` for maior que `0.1` exiba `'Você parece triste!'`
    - Se nenhuma opção for atendida exiba `'Você parece normal.'`
  - Crie um componente no diretório `/components/Emoji/index.jsx`
  - Renderize a imagem do Emoji correspondente com a classe `emoji-img`
  - Renderize a imagem do Balão com a classe `balloon-img`
  - Renderize a mensagem de texto do balão dentro de um parágrafo
  - Por fim, instancie o seu componente WebCam no `App.jsx`


## 🔨 Desafio extra para quem quer ir além

  - Enquanto a WebCam não é ativada, desenvolva uma mensagem de Loading com a seguinte frase `Carregando vídeo...` em um parágrafo.
  - Enquanto o FaceApi não detecta o seu rosto, desenvolva uma mensagem de Loading com a seguinte frase `Processando detecção...` em um parágrafo.
  - Crie um alerta de Erro inicialmente caso o site não tenha acesso a webcam com a seguinte frase `Não conseguimos acessar sua webcam!`
    - Você pode utilizar a biblioteca [sweetalert2](https://sweetalert2.github.io/) para exibir o alerta customizado.
  - Desenvolva novas reações e mensagens para as emoções de `angry` e `surprised`.


## 💻 Setup do projeto

O projeto com o design inicial já estará disponível para você na branch principal do repositório. Sua responsabilidade será apenas de implementar a lógica de acordo com o passo a passo acima.


## Deploy

- Faça o deploy da sua solução e submeta no Codante.


## 🔍 Dicas

- Estude sobre componentização, estados e passagem de Props para os componentes do React.
- Estude sobre renderização condicional para os componentes do React.
- Estude sobre Styled Components caso queria aprimorar ou modificar os estilos sugeridos.
- Não deixe de ler com calma a documentação das dependências que foram usadas.


## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design]()


## 👉🏽 Sobre esse mini-projeto

### Tecnologias e Componentes

- **Componentes:**
  - `App`
  - `WebCam`
  - `Emoji`
- **Tecnologias:**
  - `React JS`
  - `Styled Components`
  - `react-webcam`
  - `face-api.js`


---
