module.exports = {
  locals: {
    app: {
      logo: "/assets/logo.png",
      name: "Mar del Plata Animal Save",
    },
    pages: {
      "/": {
        title: "Mar del Plata Animal Save",
        components: [
          {
            type: "card-tile",
            title: "¿Qué es Animal Save?",
            body: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            actionText: "Conocer más",
            actionLink: "/acerca",
          },
          {
            type: "button-tile",
            text: "¿Cómo participar?",
            link: "/participar",
          },
          {
            type: "social-networks-tile",
            instagram: "mdqanimalsave",
            facebook: "mdqanimalsave",
            twitter: "mdqanimalsave",
            order: ["instagram", "facebook", "twitter"],
          },
          {
            type: "button-tile",
            text: "Material de lectura",
            icon: "book",
            link:
              "https://drive.google.com/drive/folders/1eUw4BRDgWrtnwFPeV3mIcSySjIMDxnXE",
          },
          {
            type: "button-tile",
            text: "Videos y documentales",
            icon: "video",
            link:
              "https://drive.google.com/drive/folders/1tD4R_LgdUuWn5EPjYe2CxgxiC0p4i9gn",
          },
          {
            type: "button-tile",
            text: "Trainings de activismo",
            icon: "videocam",
            link: "",
          },
          {
            type: "button-tile",
            text: "Calendario de actividades",
            icon: "calendar",
            link: "",
          },
          {
            type: "button-tile",
            text: "¿Cómo donar?",
            icon: "gift",
            link: "/donaciones",
          },
        ],
      },
      "/acerca": {
        title: "¿Qué es Animal Save? / Mar del Plata Animal Save",
        back: "/",
        components: [
          {
            type: "content",
            content: `
              <h1>¿Qué es Animal Save?</h1>
              <p>Lorem ipsum.</p>
            `,
          },
        ],
      },
      "/participar": {
        title: "¿Cómo participar? / Mar del Plata Animal Save",
        back: "/",
        components: [
          {
            type: "content",
            content: `
              <h1>¿Cómo participar?</h1>
              <p>Lorem ipsum.</p>
            `,
          },
        ],
      },
      "/donaciones": {
        back: "/",
        title: "Donaciones / Mar del Plata Animal Save",
        components: [
          {
            type: "content",
            content: `
              <h1>Donaciones</h1>
              <p>
                Si deseas donar, lo puedes hacer por MercadoPago, Paypal o
                transferencia bancaria.
              </p>
              <p>
                Por favor, ponete en contacto por Facebook, Instagram, Twitter o Whatsapp
                para coordinar.
              </p>
              <p>
                Considera donar al <a href="https://refugioaladoaloha.blogspot.com/">Refugio Alado Aloha</a>.
              </p>
            `,
          },
        ],
      },
    },
  },
};
