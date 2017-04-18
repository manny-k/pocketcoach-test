const handler = require('../handler');

const lesson_nodes = [
{
    node: 0,
    message: {
      text: 'Today it\'s time for a bit of practice',
      metadata: '{"next":1,"type":"lesson"}',
    },
  },

  {
    node: 1,
    message: {
      text: 'In order to build the skills to better deal with anxiety, stress and worries ...'
      metadata: '{"next":2,"type":"lesson"}',
    },
  },
 {
    node: 2,
    message: {
      text: '... it\'s not enough to simply chat about it'
      metadata: '{"next":3,"type":"lesson"}',
    },
  },
 {
    node: 3,
    message: {
      text: 'You also need some practice!'
      metadata: '{"next":4,"type":"lesson"}',
    },
  },
   {
    node: 4,
    message: {
      text: 'So before we move on to learn about some cognitive anti-anxiety techniques, we need to do that :relaxed:'
      metadata: '{"next":5,"type":"lesson"}',
    },
  },
 {
    node: 5,
    message: {
      text: 'Which technique do you want to practice with me?'
      metadata: '{"next":6,"type":"lesson"}',
    },
  },
  {
    node: 6,
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: '4-7-8 Breathing',
              image_url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/4-7-8+Breathing.png',
              buttons: [
                {
                  type: 'postback',
                  title: '4-7-8 Breathing',
                  payload: '{"type":"NEXT","value":7}',
                },
              ],
            },
            {
              title: 'Grounding',
              image_url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/Grounding.png',
              buttons: [
                {
                  type: 'postback',
                  title: 'Grounding',
                  payload: '{"type":"NEXT","value":15}',
                },
              ],
            },
            {
              title: 'Relaxation response',
              image_url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/Relaxation+response',
              buttons: [
                {
                  type: 'postback',
                  title: 'Relaxation response',
                  payload: '{"type":"NEXT","value":31}',
                },
              ],
            },
          ]
        }
      }
    },
  },
 {
    node: 7,
    message: {
      text: 'Great :relaxed:',
      metadata: '{"next":8,"type":"lesson"}',
    },
  },
{
    node: 8,
    message: {
      text: 'Do you want a video to guide you through or the gif?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Video :movie_camera:',
          payload: '{"next":9,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'gif-Animation',
          payload: '{"next":12,"type":"lesson"}',
        },
      ],
    },
  },

 {
    node: 9,
    message: {
      text: 'Get ready for one minute of practice:',
      metadata: '{"next":10,"type":"lesson"}',
    },
  },
{
    node: 10,
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: '4-7-8 Breathing Exercise',
              image_url: 'https://img.youtube.com/vi/N02BnHwS5FE/0.jpg',
              default_action: {
                type: 'web_url',
                url: 'https://www.youtube.com/watch?v=N02BnHwS5FE',
              },
            },
          ],
        },
      },
      metadata: '{"next":11,"type":"lesson"}',
    }
  },
    {
    node: 11,
    message: {
      text: 'Simply move on when you\'re done!',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Time to move on',
          payload: '{"next":36,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 12,
    message: {
      text: 'Sure thing. Here you go:',
      metadata: '{"next":13,"type":"lesson"}',
    },
  },
 {
    node: 13,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/4-7-8+breathing+practice+gif.gif',
        },
      },
      metadata: '{"next":14,"type":"lesson"}',
    },
  },
   {
    node: 14,
    message: {
      text: 'Simply move on when you\'re done!',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Time to move on',
          payload: '{"next":36,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 15,
    message: {
      text: 'Great :relaxed:',
      metadata: '{"next":16,"type":"lesson"}',
    },
  },

  {
    node: 16,
    message: {
      text: 'We start with finding 5 things around you that you can see'
      metadata: '{"next":17,"type":"lesson"}',
    },
  },
  {
    node: 17,
    message: {
      text: ':cd::tv::flashlight::newspaper::football:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Got 5 things',
          payload: '{"next":18,"type":"lesson"}',
        },
      ],
    },
  },

  {
    node: 18,
    message: {
      text: 'Now note 5 things that you can hear',
      metadata: '{"next":19,"type":"lesson"}',
    },
  },
{
    node: 19,
    message: {
      text: ':loud_sound::postal_horn::headphones::alarm_clock:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Got them',
          payload: '{"next":20,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 20,
    message: {
      text: 'And now 5 things that you can feel',
      metadata: '{"next":21,"type":"lesson"}',
    },
  },
{
    node: 21,
    message: {
      text: ':watch::eyeglasses::hand::jeans::umbrella:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Got 5 things I feel',
          payload: '{"next":22,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 22,
    message: {
      text: 'Now we move on the the next round',
      metadata: '{"next":23,"type":"lesson"}',
    },
  },
{
    node: 23,
    message: {
      text: 'Find 4 different things you see now!',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Continue',
          payload: '{"next":24,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 24,
    message: {
      text: '4 things you can hear?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Next step :fast_forward:',
          payload: '{"next":25,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 25,
    message: {
      text: 'And 4 things you can feel',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Got it',
          payload: '{"next":26,"type":"lesson"}',
        },
      ],
    },
  },

{
    node: 26,
    message: {
      text: 'In this round, let\'s start with 3 things that you can see',
      metadata: '{"next":27,"type":"lesson","delay":5}',
    },
  },
  {
    node: 27,
    message: {
      text: '3 things that you can hear...',
      metadata: '{"next":28,"type":"lesson","delay":5}',
    },
  },
{
    node: 28,
    message: {
      text: 'Aaaand 3 more things you can feel please',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Okay',
          payload: '{"next":29,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 29,
    message: {
      text: 'The last two rounds I let you go through by yourself',
      metadata: '{"next":30,"type":"lesson","}',
    },
  },
{
    node: 30,
    message: {
      text: 'Just let me know when you\'re ready to continue :relaxed:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'I\'m done',
          payload: '{"next":36,"type":"lesson"}',
        },
      ],
    },
  },


  {
    node: 31,
    message: {
      text: 'First remember the word, phrase or sound that you want to repeat :arrows_counterclockwise:',
      metadata: '{"next":32,"type":"lesson"}',
    },
  },

  {
    node: 32,
    message: {
      text: 'Then sit down comfortably and take three deep breaths :triumph:'
      metadata: '{"next":33,"type":"lesson"}',
    },
  },
 {
    node: 33,
    message: {
      text: 'When you\'re ready, start the time'
      metadata: '{"next":34,"type":"lesson"}',
    },
  },
 {
    node: 34,
    message: {
      text: 'The bell will ring after 5 minutes :bell:'
      metadata: '{"next":35,"type":"lesson"}',
    },
{
    node: 35,
    message: {
      quick_replies: [
        {
          content_type: 'text',
          title: 'I\'m done',
          payload: '{"next":36,"type":"lesson"}',
        },
      ],
      attachment: {
        type: 'audio',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+5+-+Relaxation+Response/Bell+sound+-+start+and+end+-+5+minute.mp3',
        },
      },
    },
  },

{
    node: 36,
    message: {
      text: ':smile: Thanks for taking your time to practice!',
      metadata: '{"next":37,"type":"lesson"}',
    },
  },
  
{
    node: 37,
    message: {
      text: 'It\'s this kind of dedication that will help you put anxiety in its place :+1:',
      metadata: '{"next":38,"type":"lesson"}',
    },
  },
  
{
    node: 38,
    message: {
      text: 'I suggest we\'ll repeat this practice session for the following three days ...',
      metadata: '{"next":39,"type":"lesson"}',
    },
  },
  
{
    node: 39,
    message: {
      text: '... and then we can move on to the next chapter',
      metadata: '{"next":40,"type":"lesson"}',
    },
  },
  {
    node: 40,
    message: {
      text: 'What do you think?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes, let\'s do that!',
          payload: '{"next":48,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Let\'s skip practice',
          payload: '{"next":41,"type":"lesson"}',
        },
      ],
    },
  },

{
    node: 41,
    message: {
      text: 'That is okay with me, I just want to point out that practice is really the foundation of our journey together',
      metadata: '{"next":42,"type":"lesson"}',
    },
  },
  
{
    node: 42,
    message: {
      text: 'Without practice, you\'ll sooner or later get stuck and frustrated :tired_face:',
      metadata: '{"next":43,"type":"lesson"}',
    },
  },
  {
    node: 43,
    message: {
      text: 'The more you practice the techniques I teach, the more you\'ll benefit :chart_with_upwards_trend:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Got it, skip ahead',
          payload: '{"next":44,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Ok, I\'ll practice',
          payload: '{"next":48,"type":"lesson"}',
        },
      ],
    },
  },

{
    node: 44,
    message: {
      text: 'Okay <username>, that\'s it for today',
      metadata: '{"next":45,"type":"lesson"}',
    },
  },
  
{
    node: 45,
    message: {
      text: 'Tomorrow I\'ll be here introducing it to the next chapter',
      metadata: '{"next":46,"type":"lesson"}',
    },
  },
  
{
    node: 46,
    message: {
      text: 'Exciting :smile:',
      metadata: '{"next":47,"type":"lesson"}',
    },
  },
  {
    node: 47,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/giphy+(19).gif',
        },
      },
      metadata: '{"next":YYYYYYY,"type":"lesson"}',
    },
  },
// node 47 is the end of on branch of the conversation. From here, users should be redirected to Episode #11


{
    node: 48,
    message: {
      text: ':heart_eyes:',
      metadata: '{"next":49,"type":"lesson"}',
    },
  },
  
{
    node: 49,
    message: {
      text: 'Awesome!',
      metadata: '{"next":50,"type":"lesson"}',
    },
  },
  
{
    node: 50,
    message: {
      text: 'Tomorrow I\'ll be guiding you through another round of practice together',
      metadata: '{"next":51,"type":"lesson"}',
    },
  },
  
{
    node: 51,
    message: {
      text: 'Looking forward to it :relaxed:',
      metadata: '{"next":52,"type":"lesson"}',
    },
  },
  {
    node: 52,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+8+-+Calming+Down+Practice+1/giphy+(19).gif',
        },
      },
      metadata: '{"next":YYYYYYY,"type":"end_lesson"}',
    },
  },
