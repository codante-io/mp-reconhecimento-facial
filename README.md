# WebCam Emotions App

Que tal criar sua própria aplicação de reconhecimento facial e dar vida às suas próprias expressões e emoções? 😃

Neste projeto prático e divertido, usaremos como tecnologia o **Vite**, **React JS**, **Styled Components**, junto com a incrível **Face Api**, uma biblioteca JavaScript de código aberto construída com base no famoso TensorFlow.

Com esta aplicação, você poderá ver em tempo real, por meio de sua webcam, como as expressões faciais se relacionam com diferentes emoções, como felicidade, tristeza, surpresa e raiva. É uma oportunidade empolgante de aprender e se divertir explorando o mundo do reconhecimento facial de maneira prática e interativa. Vamos começar!"

## 🔨 Requisitos

  - Realize o clone do repositório com o template inicial `git clone git@github.com:codante-io/mp-webcam-emotions.git`
  - Entre no diretório do projeto `cd webcam-emotions`
  - Instale as dependências do projeto `npm install`
  - Rode o projeto pela primeira vez `npm run dev`

> OBS 👀: Todos os ícones e imagens já estão disponíveis no diretório `public/images`

### Parte 01: Componente WebCam

  - Dentro do diretório `src`, siga as instruções abaixo:
  - Crie um arquivo no diretório `components/WebCam/index.jsx`
  - Nesse componente você irá desenvolver o código da WebCam, para isso utilize a biblioteca já instalada `react-webcam`
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

### Parte 01: Componente WebCam



# Detalhes:

- **Tela Única;**
- **Componentes:**
  - `App.jsx`;
  - `WebCam.jsx`;
  - `Emoji.jsx`;
- **Tecnologias:**
  - `react js`;
  - `react-webcam`;
  - `face-api.js`;
  - `styled components`;

---
