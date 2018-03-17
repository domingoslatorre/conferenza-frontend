module.exports = function () {
  var data = {
    
    styles : [
      'css/bootstrap.min.css',
      'css/conferenza.css',
      'https://use.fontawesome.com/releases/v5.0.8/css/all.css'

    ],

    scripts : [
      'js/query.slim.min.js',
      'js/query.popper.min.js',
      'js/query.bootstrap.min.js'
    ],
    
    platform : {
      title: 'Conferenza Event System'
      
    },

    event : {
      title : 'INFORMATICS WEEK',
      logo: '',
      description : 'Informatics Week is ...',
      path : '/pages/event/',
      pages : {
        editions : {
          display : true,
          title: 'Editions',
          description: 'Editions Page',
          file: 'index.html'
        },
        news : {
          display : true,
          title: 'News',
          description: 'News Page',
          file: 'news.html'
        },
        about : {
          display : true,
          title: 'About',
          description: 'About Page',
          file: 'about.html'
        },
        contact : {
          display : true,
          title: 'Contact',
          description: 'Contact Page',
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
      title: 'OPEN-SOURCE SOFTWARE DEVELOPER',
      year: '2018',
      date: 'MAY 9, 2018',
      venue: 'IFSP',
      location: 'SÃO PAULO, SP, BRAZIL',
      register: {
        btnText: 'Register Now'
      },
      path : '/pages/event/',
      pages: {
        schedule : {
          display : true,
          title: 'Schedule',
          description: 'Schedule Page',
          file: 'schedule.html',
          itens : [
            {
              hour: '08:00 to 09:30',
              title: 'Designing User Experience for Smart Things, Virtual Reality and Wearable Technology',
              type: 'Keynote',
              speaker: 'John Tesla',
              job : 'Inspiration Director',
              company: '4L Company',
              track: 'Main',
              image: 'face1.jpeg',
              availableSeats: '9'
            },
            {
              hour: '10:00 to 10:30',
              title: 'Jump Start Bootstrap: Get Up to Speed With Bootstrap in a Weekend',
              type: 'Workshop',
              speaker: 'Jamie Oliver Alass',
              job : 'Inspiration Director',
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
          title: 'Registration',
          description: 'Registration Page',
          file: 'registration.html'
        },
        tracks : {
          display : false,
          title: 'Tracks',
          description: 'Tracks Page',
          file: 'tracks.html'
        },
        speakers : {
          display : true,
          title: 'Speakers',
          description: 'Speakers Page',
          file: 'speakers.html'
        },
        partners : {
          display : true,
          title: 'Partners',
          description: 'Partners Page',
          file: 'partners.html'
        },
        organizers : {
          display : true,
          title: 'Organizers',
          description: 'Organizers Page',
          file: 'organizers.html'
        },
        rewards : {
          display : false,
          title: 'Rewards',
          description: 'Rewards Page',
          file: 'rewards.html'
        },
        venue : {
          display : true,
          title: 'Venue',
          description: 'Venue Page',
          file: 'venue.html'
        }
      }
    }

  }

  return data;
}