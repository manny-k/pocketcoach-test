const handler = require('../handler');

const lesson_nodes = [
{
    node: 0,
    message: {
      text: 'Sweet :smile:',
      metadata: '{"next":1,"type":"lesson"}',
    },
  },

  {
    node: 1,
    message: {
      text: 'Today we\'re gonna take a totally different angle to calm you down'
      metadata: '{"next":2,"type":"lesson"}',
    },
  },
 {
    node: 2,
    message: {
      text: 'Instead of practicing anxiety-reducing techniques ...'
      metadata: '{"next":3,"type":"lesson"}',
    },
  },
 {
    node: 3,
    message: {
      text: '... you can relieve anxiety by doing something really simple:'
      metadata: '{"next":4,"type":"lesson"}',
    },
  },
{
    node: 4,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+6+-+Passionflower+tea/giphy+(1).gif',
        },
      },
      metadata: '{"next":5,"type":"lesson"}',
    },
  },
  {
    node: 6,
    message: {
      text: 'Drinking tea :coffee:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Aha!',
          payload: '{"next":7,"type":"lesson"}',
        },
      ],
    },
  },

  {
    node: 7,
    message: {
      text: 'Some teas are great for helping reverse the Fight-or-Flight reaction'
      metadata: '{"next":8,"type":"lesson"}',
    },
  },
 {
    node: 8,
    message: {
      text: 'They help the body relax and recover from stress :relieved:'
      metadata: '{"next":9,"type":"lesson"}',
    },
  },
 {
    node: 9,
    message: {
      text: 'And one tea that\'s particularly helpful comes from the passionflower:'
      metadata: '{"next":10,"type":"lesson"}',
    },
  },
{
    node: 10,
    message: {
      quick_replies: [
        {
          content_type: 'text',
          title: 'Tell me more',
          payload: '{"next":11,"type":"lesson"}',
        },
      ],
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+6+-+Passionflower+tea/passion_flower_2.png',
        },
      },
    },
  },
  {
    node: 11,
    message: {
      text: 'Passionflower is a natural sedative that helps with occasional anxiety and mild panic attacks',
      metadata: '{"next":12,"type":"lesson"}',
    },
  },

  {
    node: 12,
    message: {
      text: 'It contains chrysin, a flavone which is known to have anti-anxiety benefits'
      metadata: '{"next":13,"type":"lesson"}',
    },
  },
 {
    node: 13,
    message: {
      text: 'Its effects are similar to some common pharmaceuticals :pill:'
      metadata: '{"next":14,"type":"lesson","delay":6}',
    },
  },
 {
    node: 14,
    message: {
      text: 'To make passionflower tea, simply steep one teaspoon of dried leaves in boiling water'
      metadata: '{"next":15,"type":"lesson"}',
    },
  },
 {
    node: 15,
    message: {
      text: 'The leaves should be allowed to steep for 10 to 15 minutes :clock3:'
      metadata: '{"next":16,"type":"lesson"}',
    },
  },
   {
    node: 16,
    message: {
      text: 'Usually three cups per day bring the biggest benefit',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Continue',
          payload: '{"next":17,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 17,
    message: {
      text: 'So far, two studies have shown that passionflower tea can be as effective as common anxiety medication!'
      metadata: '{"next":18,"type":"lesson"}',
    },
  },
 {
    node: 18,
    message: {
      text: 'It\'s even used in the making of some medications :pill:'
      metadata: '{"next":19,"type":"lesson","delay":6}',
    },
  },
 {
    node: 19,
    message: {
      text: 'Another good news is that drinking passionflower tea is generally safe :white_check_mark:'
      metadata: '{"next":20,"type":"lesson"}',
    },
  },
  {
    node: 20,
    message: {
      text: 'Only if you\'re in special circumstances (pregnant or taking medication for example), it makes sense to read through a bit more information',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Additional info',
          payload: '{"next":21,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Skip forward :fast_forward:',
          payload: '{"next":23,"type":"lesson"}',
        },
      ],
    },
  },
   {
    node: 21,
    message: {
      text: 'I think it\s easiest to share a WebMD link with you',
      metadata: '{"next":22,"type":"lesson"}',
    },
  },
  {
    node: 22,
    message: {
      text: 'Here it is: http://www.webmd.com/vitamins-supplements/ingredientmono-871-passionflower',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Thanks',
          payload: '{"next":23,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 23,
    message: {
      text: 'Okay, so what do you think about trying passionflower tea?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'I\'ll give it a try',
          payload: '{"next":24,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'I\'m skeptical',
          payload: '{"next":25,"type":"lesson"}',
        },
      ],
    },
  },
   {
    node: 24,
    message: {
      text: 'Fantastic :+1:'
      metadata: '{"next":26,"type":"lesson"}',
    },
  },
   {
    node: 25,
    message: {
      text: 'Fair point'
      metadata: '{"next":26,"type":"lesson"}',
    },
  },
{
    node: 26,
    message: {
      text: 'If you want, I can point you to the studies that show the beneficial effects of passionflower tea?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes please :+1:',
          payload: '{"next":28,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Not into science...',
          payload: '{"next":27,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 27,
    message: {
      text: 'Fair enough :relaxed:'
      metadata: '{"next":30,"type":"lesson"}',
    },
  },
   {
    node: 28,
    message: {
      text: ':blush: Here are the links to two studies.: \n :mortar_board: https://www.ncbi.nlm.nih.gov/pubmed/11679026 \n \n :mortar_board: https://www.ncbi.nlm.nih.gov/pubmed/18499602',
    quick_replies: [
        {
          content_type: 'text',
          title: 'Thanks',
          payload: '{"next":29,"type":"lesson"}',
        },
      ],
    },
  },

{
    node: 29,
    message: {
      text: 'You\'re welcome :relaxed:',
      metadata: '{"next":30,"type":"lesson","delay":3}',
    },
  },
  
{
    node: 30,
    message: {
      text: 'That\'s all I got today!',
      metadata: '{"next":31,"type":"lesson"}',
    },
  },
  
{
    node: 31,
    message: {
      text: 'I hope you enjoy the passionflower tea :tea:',
      metadata: '{"next":32,"type":"lesson"}',
    },
  },
  {
    node: 32,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+6+-+Passionflower+tea/giphy+(2).gif',
        },
      },
      metadata: '{"type":"end_lesson"}',
    },
  },



