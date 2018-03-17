module.exports = function () {
  var data = {
    
    styles : [
      './css/bootstrap.min.css',
      './css/conferenza.css',
      'https://use.fontawesome.com/releases/v5.0.8/css/all.css'

    ],

    scripts : [
      './js/jquery.slim.min.js',
      './js/popper.min.js',
      './js/bootstrap.min.js'
    ],
    
    platform : {
      title: 'Conferenza Event System'
      
    },

    event : {
      title : 'SEMANA DA INFORMÁTICA',
      logo: '',
      description : 'A Semana da Informática é ...',
      path : '/pages/event/',
      pages : {
        editions : {
          display : true,
          title: 'Edições',
          description: 'Página das Edições',
          file: 'index.html'
        },
        news : {
          display : true,
          title: 'Notícias',
          description: 'Página das Notícias',
          file: 'news.html'
        },
        about : {
          display : true,
          title: 'Sobre o Evento',
          description: 'Página sobre o Evento',
          file: 'about.html'
        },
        contact : {
          display : true,
          title: 'Contato',
          description: 'Página de Contato',
          file: 'contact.html'
        },
        login : {
          display : true,
          title: 'Login',
          description: 'Login Page',
          file: 'login.html'
        }
      }
    },

    edition : {
      title: 'DESENVOLVIMENTO DE SOFTWARE DE CÓDIGO ABERTO',
      year: '2018',
      date: '9 DE MAIO DE 2018',
      venue: 'IFSP',
      location: 'SÃO PAULO, SP, BRASIL',
      register: {
        btnText: 'Inscreva-se Agora'
      },
      path : '/pages/event/',
      pages: {
        schedule : {
          display : true,
          title: 'Programação',
          description: 'Página da Programação',
          file: 'schedule.html',
          itens : [
            {
              hour: '08:00 to 09:30',
              title: 'Projete Experiência do Usuário para Realidade Virtual e Outras Tecnologias',
              type: 'Palestra',
              speaker: 'John Tesla',
              job : 'Diretor de Desenvolvimento',
              company: '4L Company',
              track: 'Main',
              image: 'face1.jpeg',
              availableSeats: '9'
            },
            {
              hour: '10:00 to 10:30',
              title: 'Introdução ao Bootstrap 4',
              type: 'Minicurso',
              speaker: 'Jamie Oliver Alass',
              job : 'Programador',
              company: 'Facebook',
              track: 'Main',
              image: 'face2.jpeg',
              availableSeats: '0'
            },
            {
              hour: '08:00 to 09:30',
              title: 'Experiments, the Good, the Bad, and the Beautiful',
              type: 'Workshop',
              speaker: 'Kate Linda Kaur',
              job : 'Inspiration Director',
              company: '4L Company',
              track: 'Main',
              image: 'face3.jpeg',
              availableSeats: '39'
            },
            {
              hour: '08:00 to 09:30',
              title: 'User Experience Design Fundamentals',
              type: 'Workshop',
              speaker: 'Marta Ala Pal',
              job : 'Inspiration Director',
              company: '4L Company',
              track: 'Main',
              image: 'face4.jpeg',
              availableSeats: '33'
            },
            {
              hour: '08:00 to 09:30',
              title: 'Experiments, the Good, the Bad, and the Beautiful',
              type: 'Workshop',
              speaker: 'John Tesla',
              job : 'Inspiration Director',
              company: '4L Company',
              track: 'Main',
              image: 'face5.jpeg',
              availableSeats: '17'
            }
          ]
        },
        registration : {
          display : true,
          title: 'Inscrição',
          description: 'Página de Inscrição',
          file: 'registration.html'
        },
        tracks : {
          display : false,
          title: 'Tópicos',
          description: 'Página de Tópicos',
          file: 'tracks.html'
        },
        speakers : {
          display : true,
          title: 'Palestrantes',
          description: 'Página de Palestrantes',
          file: 'speakers.html'
        },
        partners : {
          display : true,
          title: 'Parceiros',
          description: 'Página de Parceiros',
          file: 'partners.html'
        },
        organizers : {
          display : true,
          title: 'Organizadores',
          description: 'Página de Organizadores',
          file: 'organizers.html'
        },
        rewards : {
          display : false,
          title: 'Premiação',
          description: 'Página de Premiação',
          file: 'rewards.html'
        },
        venue : {
          display : true,
          title: 'Localização',
          description: 'Página de Localização',
          file: 'venue.html'
        }
      }
    }

  }

  return data;
}